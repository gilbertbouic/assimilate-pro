# Configuration Guide

This guide explains how to configure and customize the Cultural Assimilation Manual application.

## Customizing Content

All cultural content, quizzes, and scenarios are stored directly in `index.html`. To modify or add content, you can edit the HTML structure within that file.

- **Cultural Modules**: Content is organized by `section` tags (e.g., `<section id="about">`).
- **Quizzes**: Quiz questions can be added to the relevant sections.
- **Scenarios**: Scenarios and do's/don'ts cards can be added to the relevant sections.

## Styling and Themes

- **Main Styles**: Modify `styles.css` for general layout and typography.
- **Interactive Styles**: Modify `interactive-styles.css` to change the appearance of quizzes, flip cards, and other interactive elements.

## Local Development

For the best development experience, run a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

This prevents issues with browser security policies related to local file access.

## Deployment

This application is designed for easy deployment on static hosting platforms like GitHub Pages.

### GitHub Pages Setup

#### Enabling GitHub Pages

1. **Navigate to Repository Settings**:
   - Go to your GitHub repository
   - Click on "Settings" tab
   - Scroll down to the "Pages" section in the left sidebar

2. **Configure the Source**:
   - Under "Build and deployment", select "Deploy from a branch"
   - Choose the `main` branch
   - Select `/ (root)` as the folder
   - Click "Save"

3. **Wait for Deployment**:
   - GitHub will build and deploy your site automatically
   - This usually takes 1-2 minutes
   - You'll see a green checkmark and your site URL once it's live

4. **Access Your Site**:
   - Your site will be available at: `https://[your-username].github.io/Cultural-Assimilation-Manual/`
   - For this repository: `https://gilbertbouic.github.io/Cultural-Assimilation-Manual/`

#### Path Considerations for GitHub Pages

This application uses **relative paths** throughout to ensure compatibility with GitHub Pages:

**Service Worker (`sw.js`)**:
- Uses relative paths like `./` and `./index.html`
- These paths work correctly whether the app is at the root domain or in a subdirectory
- No changes needed for GitHub Pages deployment

**Web App Manifest (`manifest.json`)**:
- `start_url: "./"` - starts at the current directory
- `scope: "./"` - limits the service worker scope to the app directory
- Icon paths use `./icons/` for relative referencing
- Works automatically with GitHub Pages subdirectory structure

**Best Practices**:
- ✅ Always use relative paths (e.g., `./`, `./styles.css`, `./app.js`)
- ✅ Avoid absolute paths starting with `/` unless at root domain
- ✅ Test locally with `python -m http.server` or `npx serve .` in subdirectories
- ✅ Service worker and manifest are already configured correctly

**Custom Domain (Optional)**:
- If using a custom domain, update it in GitHub Pages settings
- The relative paths will continue to work without code changes
- Update the CNAME file if using a custom domain

### Other Static Hosting Platforms

The app works on any static hosting service:
- **Netlify**: Drag and drop the folder or connect your GitHub repo
- **Vercel**: Import your GitHub repository
- **Cloudflare Pages**: Connect your repo and deploy
- **AWS S3 + CloudFront**: Upload files to S3 bucket and configure CloudFront

All platforms work with the existing relative path structure.
