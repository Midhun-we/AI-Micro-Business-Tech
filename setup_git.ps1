$email = Read-Host "Enter your email for Git (e.g. you@example.com)"
$name = Read-Host "Enter your name for Git (e.g. Your Name)"

if ($email -and $name) {
    git config user.email $email
    git config user.name $name
    Write-Host "Git identity configured."
}

# Ensure remote is correct
git remote set-url origin https://github.com/Midhun-we/AI-Micro-Business-Tech.git

# Stage and Commit
git add .
git commit -m "Initialize project for deployment"

# Push
Write-Host "Pushing to GitHub... (You may be asked to sign in via browser)"
git branch -M main
git push -u origin main

Write-Host "Done! If the push succeeded, your code is on GitHub."
Write-Host "Next step: Import to Vercel."
