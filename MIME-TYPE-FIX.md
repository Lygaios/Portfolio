# MIME Type Error Fix

## Problem
The error "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'" occurs when:

1. The server redirects JS file requests to index.html (wrong MIME type)
2. The .htaccess file is too aggressive with URL rewriting
3. Server doesn't recognize proper MIME types for modern JS modules

## Solution Applied

### 1. Fixed .htaccess File
Updated the URL rewriting rules to be more specific:

```apache
RewriteEngine On

# Handle Angular Router - but exclude static files
RewriteBase /
RewriteRule ^index\.html$ - [L]

# Don't rewrite files that exist (JS, CSS, images, etc.)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Don't rewrite API calls or PHP files
RewriteCond %{REQUEST_URI} !^/sendMail\.php$
RewriteCond %{REQUEST_URI} !^/api/

# Don't rewrite files with extensions (JS, CSS, images, fonts, etc.)
RewriteCond %{REQUEST_URI} !\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|json|php|html)$

# Only rewrite routes that don't have file extensions
RewriteRule . /index.html [L]
```

### 2. Added MIME Type Declarations
Ensured proper MIME types are set:

```apache
# Ensure proper MIME types for modern web files
AddType application/javascript .js
AddType text/css .css
AddType application/json .json
AddType font/woff .woff
AddType font/woff2 .woff2
AddType font/ttf .ttf
AddType image/svg+xml .svg
```

## What This Fixes:

✅ **Static files**: JS, CSS, images, fonts serve correctly
✅ **Angular routing**: Still works for navigation
✅ **API endpoints**: sendMail.php and other APIs work
✅ **MIME types**: Proper content types for all file types
✅ **Security**: Maintains security headers

## Testing After Deployment:

1. Check that JS files load with `application/javascript` MIME type
2. Verify CSS files load with `text/css` MIME type  
3. Test Angular routing still works (refresh on /imprint, /privacy)
4. Ensure contact form PHP endpoint works
5. Check browser developer tools for any MIME type errors

## Alternative Solutions (if above doesn't work):

### Option 1: Nginx Configuration
If using Nginx instead of Apache:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Option 2: Server-Level Configuration
Contact hosting provider to ensure:
- mod_rewrite is enabled
- mod_mime is enabled  
- .htaccess files are processed
- Modern JavaScript MIME types are supported
