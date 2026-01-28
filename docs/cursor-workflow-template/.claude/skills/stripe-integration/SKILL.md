---
name: stripe-integration
description: Implement Stripe payment processing for robust, PCI-compliant payment flows including checkout, subscriptions, webhooks, and refunds. Use when integrating Stripe payments, building subscription systems, or implementing secure checkout flows.
---

# Stripe Integration

Master Stripe payment processing integration for robust, PCI-compliant payment flows including checkout, subscriptions, webhooks, and refunds.

## When to Use This Skill

- Implementing payment processing in web/mobile applications
- Building subscription-based SaaS products
- Setting up Stripe Checkout flows
- Handling webhooks for payment events
- Managing customer billing and invoicing
- Implementing refund flows
- Setting up test environments

## Core Concepts

### Payment Methods

1. **Stripe Checkout** (Recommended for most cases)
   - Hosted payment page
   - PCI compliant out of the box
   - Supports multiple payment methods
   - Best conversion rates

2. **Payment Intents** (Custom UI)
   - Full control over payment flow
   - Requires more implementation
   - Use Stripe Elements for card input

3. **Subscriptions**
   - Recurring billing
   - Multiple pricing tiers
   - Usage-based billing support


## Checkout Session (One-time Payment)

```python
def create_checkout_session(amount, currency='usd'):
    """Create a one-time payment checkout session."""
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': currency,
                'product_data': {
                    'name': 'Purchase',
                },
                'unit_amount': amount,  # Amount in cents
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='https://yourdomain.com/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url='https://yourdomain.com/cancel',
        metadata={
            'order_id': 'order_123',
            'user_id': 'user_456'
        }
    )
    return session
```

## Subscription Setup

```python
def create_subscription_checkout(price_id, customer_email):
    """Create subscription checkout session."""
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price': price_id,
            'quantity': 1,
        }],
        mode='subscription',
        success_url='https://yourdomain.com/success',
        cancel_url='https://yourdomain.com/cancel',
        customer_email=customer_email,
    )
    return session
```


## Webhook Handling (CRITICAL)

Webhooks are essential for reliable payment processing. Never rely solely on client-side success redirects.

```python
@app.post("/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
    
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        return {"error": "Invalid payload"}, 400
    except stripe.error.SignatureVerificationError:
        return {"error": "Invalid signature"}, 400
    
    # Handle the event
    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        fulfill_order(session)
    
    elif event['type'] == 'invoice.paid':
        invoice = event['data']['object']
        extend_subscription(invoice)
    
    elif event['type'] == 'invoice.payment_failed':
        invoice = event['data']['object']
        notify_payment_failed(invoice)
    
    elif event['type'] == 'customer.subscription.deleted':
        subscription = event['data']['object']
        cancel_subscription(subscription)
    
    return {"status": "success"}
```

## Essential Webhook Events

| Event | When to Handle |
|-------|---------------|
| `checkout.session.completed` | After successful checkout |
| `invoice.paid` | Subscription payment successful |
| `invoice.payment_failed` | Payment failed |
| `customer.subscription.updated` | Plan changed |
| `customer.subscription.deleted` | Subscription cancelled |


## Testing

Always use test mode keys during development:

```python
stripe.api_key = "sk_test_..."

# Test card numbers
TEST_CARDS = {
    'success': '4242424242424242',
    'declined': '4000000000000002',
    '3d_secure': '4000002500003155',
    'insufficient_funds': '4000000000009995'
}
```

### Testing Webhooks Locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/webhook

# Trigger test events
stripe trigger checkout.session.completed
```

## Best Practices

1. **Always verify webhook signatures** - Never trust unverified events
2. **Use idempotency keys** - Prevent duplicate charges
3. **Store Stripe IDs** - Save customer_id, subscription_id in your database
4. **Handle failures gracefully** - Implement retry logic for failed payments
5. **Use metadata** - Pass order/user IDs for easy reconciliation
6. **Test thoroughly** - Use test mode and all test card numbers

## Common Patterns

### Check Subscription Status
```python
def is_subscribed(customer_id):
    subscriptions = stripe.Subscription.list(
        customer=customer_id,
        status='active'
    )
    return len(subscriptions.data) > 0
```

### Create Customer Portal Session
```python
def create_portal_session(customer_id):
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url='https://yourdomain.com/account',
    )
    return session.url
```
