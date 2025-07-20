# Pre-Deployment Checklist

## Files Created/Modified for Deployment:

✅ **public/.htaccess** - Apache server configuration for Angular routing
✅ **public/robots.txt** - SEO configuration  
✅ **public/sendMail.php** - Contact form handler (copied from src/app/)
✅ **public/php-config.php** - PHP configuration settings
✅ **DEPLOYMENT.md** - Complete deployment guide
✅ **package.json** - Added `build:prod` script

## Before Deployment - Verify:

- [ ] Your domain joshuabrunke.com points to your hosting provider
- [ ] Hosting provider supports PHP (for contact form)
- [ ] SSL certificate is configured for joshuabrunke.com
- [ ] Your hosting provider allows .htaccess files (for Apache)

## Deployment Steps:

1. **Build the project:**
   ```bash
   npm run build:prod
   ```

2. **Upload files:**
   - Upload ALL contents of `dist/portfolio/` to your server's root directory
   - Do NOT upload the `dist/portfolio` folder itself, just its contents

3. **Test after deployment:**
   - [ ] Main page loads at joshuabrunke.com
   - [ ] Navigation works (imprint, privacy pages)
   - [ ] Contact form sends emails
   - [ ] All images and fonts load correctly
   - [ ] Site works on mobile devices

## Important Notes:

- Your contact form endpoint is already configured for joshuabrunke.com
- The sendMail.php will send emails to joshuabrunke1@gmail.com  
- Make sure your hosting provider's PHP mail() function works
- The site will work as a Single Page Application (SPA) with proper routing

## If Something Doesn't Work:

- Check the browser's developer console for errors
- Verify file permissions on your server
- Test the PHP mail functionality separately
- Ensure .htaccess file is being read by Apache
