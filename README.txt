MEGACODE TIMERS & CCF  -  HOW TO PUT IT ONLINE AS AN APP (free, one time)
============================================================================

What is in this folder
  index.html     the app itself
  manifest.json  app name and icon (makes phones offer "Install app")
  sw.js          lets the app work without internet after the first opening
  icon-192.png, icon-512.png   JIPMER logo app icons

STEP 1  Make a free GitHub account
  Go to https://github.com and sign up.

STEP 2  Create a place for the app
  Click the "+" (top right) > New repository
  Name: megacode-ccf      Choose: Public      Click: Create repository

STEP 3  Upload the files
  Click "uploading an existing file"
  Drag ALL 6 files from this folder (not the folder itself)
  Click "Commit changes"

STEP 4  Switch on the website
  Settings > Pages
  Source: Deploy from a branch    Branch: main   / (root)    Save
  Wait 1-2 minutes. Your link appears at the top, like:
      https://YOUR-GITHUB-NAME.github.io/megacode-ccf/

STEP 5  Test, then share
  Open the link on your phone once. Then share it in the course WhatsApp group.

HOW PROVIDERS INSTALL IT
  Android (Chrome):  open the link > tap "Install app" (or Menu > Install app / Add to Home screen)
  iPhone (Safari):   open the link > Share > Add to Home Screen
  After the first opening it works with no internet.

UPDATING THE APP LATER
  Upload the new index.html (same name) to the same repository.
  Also open sw.js and change  megacode-v1  to  megacode-v2  (v3 next time...)
  so phones pick up the new version.

Note: training tool for mock codes. Each phone keeps its own data.
