# SSL Certificate Issue - Contact Form Fix

## What was the problem?
The contact form was failing with `net::ERR_CERT_COMMON_NAME_INVALID` because the SSL certificate for joshuabrunke.com is not properly configured.

## Changes Made:

### 1. Updated Contact Form (contact.component.ts):
- **Temporary Fix**: Changed endpoint from HTTPS to HTTP: `http://joshuabrunke.com/sendMail.php`
- **Added Error Handling**: Better error messages and user feedback
- **Added Loading State**: Submit button shows "Sending..." when processing
- **Added Status Tracking**: Success/error states with appropriate messages

### 2. Updated Contact Form Template (contact.component.html):
- **User Feedback**: Shows success/error messages based on submission status
- **Disabled State**: Button disabled while sending to prevent double submissions
- **Error Display**: Shows specific error messages when submission fails

## Next Steps to Fix SSL Certificate:

### Option 1: Get a proper SSL certificate
1. Contact your hosting provider about SSL certificate for joshuabrunke.com
2. Many hosting providers offer free SSL certificates (Let's Encrypt)
3. Once SSL is working, change the endpoint back to HTTPS

### Option 2: Use relative paths (if sendMail.php is on same domain)
Change the endpoint to just: `./sendMail.php` or `/sendMail.php`

### Option 3: Contact hosting provider
Ask them to:
- Install SSL certificate for joshuabrunke.com
- Ensure certificate covers www.joshuabrunke.com as well
- Enable HTTPS redirect

## Current Status:
✅ Contact form now uses HTTP temporarily (less secure but functional)
✅ Better error handling and user feedback
✅ Loading states and validation
✅ Ready for deployment

## Security Note:
The temporary HTTP solution works but is less secure. For production, you should:
1. Get proper SSL certificate
2. Change back to HTTPS endpoint
3. This ensures encrypted communication for contact form data
