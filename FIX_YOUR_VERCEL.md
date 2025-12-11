# Fix Your ai-micro-business-tech.vercel.app 404 Error

## 🎯 The Problem

Your site **https://ai-micro-business-tech.vercel.app/** shows 404 because Vercel doesn't know your app is in the `client` folder.

## ✅ The Fix (2 Minutes)

### Step 1: Go to Your Project Settings

Click this link: **https://vercel.com/unnees-projects/ai-micro-business-tech/settings**

(Or manually: Dashboard → ai-micro-business-tech → Settings tab)

### Step 2: Change Root Directory

1. In the left sidebar, click **"General"**
2. Scroll to **"Root Directory"** section
3. Click **"Edit"**
4. Change from `./` to **`client`**
5. Click **"Save"**

![Step-by-step guide](file:///C:/Users/Acer/.gemini/antigravity/brain/3e0a09df-0f35-4df3-821f-c8da1dadb737/vercel_settings_steps_1765465286896.png)

### Step 3: Redeploy

1. Go to: **https://vercel.com/unnees-projects/ai-micro-business-tech**
2. Click **"Deployments"** tab
3. On the latest deployment, click the **"..."** menu
4. Click **"Redeploy"**
5. Wait 1-2 minutes

### Step 4: Check Your Site

Visit: **https://ai-micro-business-tech.vercel.app/**

It should now show your AI Micro-Business Tech homepage! 🎉

---

## Alternative: Fresh Start

If the above doesn't work:

1. **Delete the project**: Settings → General → Delete Project
2. **Re-import**: Dashboard → Add New Project → Import from GitHub
3. **Select**: `Midhun-we/AI-Micro-Business-Tech`
4. **BEFORE deploying**: Set Root Directory to `client`
5. **Deploy**

---

## Why This Happens

```
Your GitHub Repo:
AI-Micro-Business-Tech/
├── client/          ← Your Next.js app is HERE
│   ├── src/
│   └── package.json
└── server/

Vercel is looking here: AI-Micro-Business-Tech/ (root)
Vercel should look here: AI-Micro-Business-Tech/client/
```

Setting Root Directory to `client` tells Vercel where to find your app!
