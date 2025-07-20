# Deployment Guide for joshuabrunke.com

## Prerequisites
- Your domain joshuabrunke.com should point to your web hosting provider
- PHP support enabled on your hosting provider
- Apache or Nginx server (Apache .htaccess file is included)

## Build and Deploy Steps

### 1. Build the Production Version
```bash
npm run build:prod
```
This creates an optimized build in the `dist/portfolio` folder.

### 2. Upload Files
Upload the contents of `dist/portfolio` to your web server's root directory (usually `public_html`, `www`, or `httpdocs`).

**Important:** Upload the CONTENTS of the dist/portfolio folder, not the folder itself.

### 3. Server Configuration

#### For Apache Servers:
- The `.htaccess` file is already included and will handle routing
- Make sure your hosting provider allows `.htaccess` files
- Ensure mod_rewrite is enabled

#### For Nginx Servers:
Add this configuration to your nginx.conf:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 4. PHP Mail Configuration
- The `sendMail.php` file should be in your root directory
- Make sure your hosting provider supports the PHP `mail()` function
- Some providers require additional SMTP configuration

### 5. SSL Certificate
Make sure your hosting provider has SSL enabled for joshuabrunke.com so your site loads over HTTPS.

### 6. Testing
After deployment, test:
- All pages load correctly (/, /imprint, /privacy)
- Contact form works (sends emails)
- All assets load (images, fonts, etc.)
- Navigation works properly

## File Structure After Deployment
Your web server root should contain:
```
index.html
main.js
polyfills.js
styles.css
sendMail.php
.htaccess
robots.txt
assets/
  fonts/
  img/
  i18n/
```

## Troubleshooting
- If routing doesn't work, check if .htaccess is being read
- If contact form doesn't work, check PHP mail configuration
- If assets don't load, check file paths and permissions
