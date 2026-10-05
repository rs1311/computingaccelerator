# Study Computing — Vite + React

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev
npm run build
```

Cloudflare Pages: build command `npm run build`, output `dist`.
The build pre-renders React into real HTML; no server or backend is needed.

## Before you publish
Edit `src/config.js`: set your real contact link, YouTube playlist, notebook repository and practice exam links. With empty URLs the page honestly marks resources as awaiting links and offers a copyable enquiry; it does not send or store enquiries. No analytics or cookies are added.
Confirm S$30 is your intended currency. Confirm 15 is the count of notebooks and practice exams together. The ambiguous extra “100 notebooks” claim was omitted. The site uses your supplied teaching claims; add links documenting them when available. Contest wording retains the supplied 30–50 figure without claiming whether this is per contest or total.
No school logos, endorsements, invented reviews or grade guarantees are used.

## SEO and sharing
Includes title, description, canonical, Open Graph image, semantic headings, structured Service/Person data, sitemap, robots.txt and build-time rendered content. The Python challenge provides a useful reason to share the page. Native sharing falls back to clipboard and then a visible URL.
After going live, verify studycomputing.sg in Google Search Console and submit https://studycomputing.sg/sitemap.xml. Redirect www to your chosen canonical root via Cloudflare. Add actual educational resources and relevant pages over time; metadata alone does not guarantee indexing, rankings or virality. Google does not generally show FAQ rich results for tutoring sites, so no FAQ rich-result claim is made.

## Files
`src/App.jsx`: copy/layout/interactions. `src/style.css`: responsive styling. `src/config.js`: real links. `prerender.mjs`: build-time HTML and schema. `public/`: sharing image, favicon, sitemap and headers.
