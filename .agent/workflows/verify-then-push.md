---
description: Verify changes with user, then auto-push to GitHub (triggers Netlify deploy)
---

# Verify → Push Workflow

After implementing and verifying any website change:

## 1. Verify with User
- Present changes via `notify_user` with a walkthrough or implementation summary.
- Wait for explicit user approval (comment "LGTM", "looks good", or equivalent).
- **Do NOT push until approval is received.**

## 2. Auto-Push to GitHub
Once approved, stage, commit, and push:

// turbo
```
cmd /c "git add -A && git commit -m \"<type>(<scope>): <short description>\" && git push origin main"
```

**Commit message conventions:**
- `fix(mobile): ...` — bug fixes
- `feat(section): ...` — new features or sections  
- `style(component): ...` — visual/CSS-only changes
- `refactor(navbar): ...` — code restructuring

## 3. Confirm Deploy
Netlify automatically deploys on push to `main`. Confirm with:
- Check Netlify dashboard, OR
- Wait ~60s and test the live URL

## Notes
- Remote: `https://github.com/mrdelet3/SIP_v1`
- Branch: `main`
- Deploy: Netlify (auto-triggered on push)
