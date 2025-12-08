# Deployment Guide

## 1. Push to GitHub

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    ```
    > [!NOTE]
    > If you see an error about "Author identity unknown" when committing, run:
    > ```bash
    > git config user.email "you@example.com"
    > git config user.name "Your Name"
    > ```

2.  **Add all files**:
    ```bash
    git add .
    ```

3.  **Commit changes**:
    ```bash
    git commit -m "Initial commit for Vercel deployment"
    ```

4.  **Create a new repository on GitHub**:
    - Go to [GitHub.com](https://github.com) and create a new repository (e.g., `ai-micro-business-tech`).
    - **Do not** initialize with README, .gitignore, or License (we have them).

5.  **Link and Push**:
    ```bash
    ```bash
    git remote add origin https://github.com/Midhun-we/AI-Micro-Business-Tech.git
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy to Vercel

1.  **Go to Vercel**:
    - Log in to [vercel.com](https://vercel.com).

2.  **Add New Project**:
    - Click **"Add New..."** button.
    - Select **"Project"**.

3.  **Import Git Repository**:
    - Find your repo (`ai-micro-business-tech`) in the list and click **"Import"**.

4.  **Configure Project**:
    - **Framework Preset**: Vercel should auto-detect "Next.js".
    - **Root Directory**: Select `client` (since your Next.js app is in the `client` folder).
        - Click "Edit" next to Root Directory and select the `client` folder.
    - **Environment Variables**:
        - Copy content from `client/.env` (if you have one) to Vercel's Environment Variables section.

5.  **Deploy**:
    - Click **"Deploy"**.

6.  **Done!**:
    - Vercel will build and deploy your site. You will get a production URL (e.g., `https://your-project.vercel.app`).
