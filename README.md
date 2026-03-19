# Polka

Website for Polka hairdressing salon.

## Work in progress

This site is currently under construction. The `index.html` file contains a simple placeholder page informing about the upcoming salon website.

## Deployment

The site deploys automatically to GitHub Pages when changes are merged into the `main` branch. No secrets required.

Enable GitHub Pages: **Settings → Pages** → Source: **GitHub Actions**.

### Custom domain (salonpolka.pl)

To use your domain with GitHub Pages:

1. In the repository: **Settings → Pages** → under "Custom domain" enter `salonpolka.pl`, enable "Enforce HTTPS"
2. In OVH (Domains & DNS → DNS Zone for salonpolka.pl), add one of:
   - **Root domain:** four A records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www subdomain:** CNAME record for `www` pointing to `your-username.github.io`
