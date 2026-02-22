# 📋 Daily Menu Update — Staff Runbook

This guide explains how to update the daily food and drink menu PDF on the Stout Irish Pub website.

---

## How It Works

The website always links to a file called `menu.pdf` in the GitHub repository. To update the menu, you simply **replace that file**. The website automatically updates within ~30 seconds.

---

## Steps (Every Time You Update the Menu)

### 1. Export the menu from Canva
1. Open your Canva menu design and make your changes.
2. Click **Share → Download**.
3. Choose **PDF Standard** as the file type.
4. Click **Download**.
5. Save the file as **`menu.pdf`** (exactly this name, all lowercase).

---

### 2. Upload to GitHub

> You will need a free GitHub account. Ask the web manager if you need access.

1. Go to: [https://github.com/YOUR_ORG/stout-irish-pub](https://github.com/YOUR_ORG/stout-irish-pub)
   _(Replace `YOUR_ORG` with the actual GitHub organisation or username)_
2. Click into the **`public/`** folder.
3. Find the existing **`menu.pdf`** file and click on it.
4. Click the **pencil / edit icon** (top right of the file view).
5. On the edit page, click **"Replace file"** (or drag and drop your new file in).
6. Scroll down and click **"Commit changes"**.

---

### 3. Wait ~30 seconds

The website automatically rebuilds and publishes the new PDF. The "Download PDF Menu" button on the website will now serve your updated file.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| File downloaded is old menu | Clear your browser cache (Ctrl+Shift+R) and try again |
| File won't upload | Make sure the filename is exactly `menu.pdf` (no spaces, no caps) |
| Can't find the folder | Ask the web manager to check your GitHub permissions |

---

## Contact

If you need help, contact the website manager or email **erin@stoutirishpub.ca**.
