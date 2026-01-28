# 🚀 VERCEL DEPLOYMENT GUIDE

**Site:** Tommy Reynolds  
**Type:** Static React SPA (Vite)  
**Deploy to:** Vercel

---

## QUICK DEPLOY

### First Time Setup

1. **Install Vercel CLI** (if you haven't):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Scope:** Your account
- **Link to existing project?** No
- **Project name:** tommy-reynolds (or whatever you want)
- **Directory:** . (current directory)
- **Override settings?** No

### Subsequent Deploys

```bash
vercel --prod
```

That's it. Live in ~60 seconds.

---

## WHAT WAS FIXED

### The Problem
The project was built with both:
- React client (what we need)
- Express server (not needed for this site)

Previous agent tried deploying the full-stack app as a static site. Didn't work.

### The Solution
Created proper Vercel config that:
1. Builds ONLY the React client (`vite build`)
2. Outputs to `dist/public`
3. Handles SPA routing (all routes → `index.html`)
4. Optimizes asset caching

---

## CONFIGURATION FILES

### `vercel.json`
- Tells Vercel how to build and deploy
- Sets up SPA routing
- Configures asset caching

### `.vercelignore`
- Excludes unnecessary files from upload
- Speeds up deployment

### `package.json`
Updated scripts:
- `"build": "vite build"` — Now builds static site
- `"build:fullstack": "tsx script/build.ts"` — Old full-stack build (kept for reference)

---

## VERCEL DASHBOARD

After deploying:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your project
3. Click "Visit" to see the live site
4. **Save the URL** to show Tommy

---

## CUSTOM DOMAIN

When ready to add Tommy's domain:

1. Go to project → **Settings** → **Domains**
2. Add domain (e.g., `tommyreynolds.com`)
3. Follow DNS instructions from Vercel
4. Wait 5-10 minutes for DNS propagation

---

## TROUBLESHOOTING

### Build Fails

Check build logs in Vercel dashboard. Common issues:
- Missing dependencies → Run `npm install` locally first
- Environment variables → Add in Vercel dashboard if needed (this site doesn't need any)

### Page Not Found on Refresh

Already fixed. The `vercel.json` rewrites handle this.

### Assets Not Loading

Check paths in code:
- Use `/` prefix for public assets: `/tommy-hero.jpg`
- Or import in React: `import img from './asset.jpg'`

---

## CURRENT STATUS

✅ Vercel config created  
✅ Build command fixed  
✅ SPA routing configured  
✅ Asset caching optimized  

**READY TO DEPLOY** → Run `vercel --prod`

---

## DEPLOYMENT WORKFLOW

For future updates:

```bash
# 1. Make changes locally
# 2. Test locally
npm run dev

# 3. Build to verify
npm run build

# 4. Deploy to production
vercel --prod
```

Live in 60 seconds. Every time.

---

*This is now a proper static site deployment. Clean, fast, exactly what Vercel is designed for.*

