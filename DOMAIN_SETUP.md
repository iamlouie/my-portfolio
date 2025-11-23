# Custom Domain Setup Instructions

## Domain: iamlouienuez.com

### 1. DNS Configuration (At Your Domain Registrar)

After purchasing your domain, add these DNS records:

#### A Records (for root domain iamlouienuez.com)
```
Type: A
Host: @ (or leave blank for root)
Value: 185.199.108.153

Type: A
Host: @ (or leave blank for root)
Value: 185.199.109.153

Type: A
Host: @ (or leave blank for root)
Value: 185.199.110.153

Type: A
Host: @ (or leave blank for root)
Value: 185.199.111.153
```

#### CNAME Record (for www subdomain)
```
Type: CNAME
Host: www
Value: iamlouie.github.io
```

### 2. GitHub Pages Configuration

1. Go to: https://github.com/iamlouie/my-portfolio/settings/pages
2. Under "Custom domain", enter: `iamlouienuez.com`
3. Click "Save"
4. Wait for DNS check to pass (green checkmark)
5. Enable "Enforce HTTPS" (wait 24 hours for SSL certificate)

### 3. Build and Deploy

Run these commands to deploy with the new domain:

```bash
# Build the production version
npm run build -- --configuration production --base-href /

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/my-portfolio/browser
```

### 4. Verification

After DNS propagates (24-48 hours), your site will be accessible at:
- https://iamlouienuez.com
- https://www.iamlouienuez.com

The old URL (https://iamlouie.github.io/my-portfolio/) will automatically redirect.

### Notes:
- DNS propagation can take 24-48 hours
- SSL certificate provisioning takes up to 24 hours
- CNAME file is already configured in src/CNAME
- angular.json is updated to include CNAME in build assets
