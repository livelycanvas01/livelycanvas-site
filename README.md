# LivelyCanvas — starter site

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or drag the
whole folder into Netlify Drop / GitHub Pages / Vercel to go live in minutes.

## Files
- `index.html` — homepage (hero, 4 category swatches, latest posts, newsletter)
- `category.html` — category listing template (shown as "Parenting" — duplicate
  and adjust the accent class + copy for Outdoor / Home & DIY / Finance)
- `post.html` — single article template (sidebar ads, affiliate "pick" box,
  related posts)
- `styles.css` — all design tokens and layout (see `:root` at the top for colors)
- `script.js` — mobile menu + newsletter form handling

## Turning this into a real, earning blog

**1. Newsletter (do this first — it's your owned audience)**
Sign up for Mailchimp, ConvertKit, or Beehiiv (all have free tiers). Replace
the `<form data-newsletter>` action in `script.js` with their embed/API code.
Every `data-newsletter` form on the site (homepage, sidebar, post footer)
will then work.

**2. Ads**
Apply for Google AdSense once you have ~15-20 real posts. When approved,
paste your AdSense script into the `<head>` of each page, then swap each
`.ad-slot` div for your actual ad unit code (they're pre-sized: leaderboard
728×90, rectangle 300×250, in-content).

**3. Affiliate links**
The `.pick-box` component in `post.html` is a ready-made "our pick" callout
for Amazon Associates or other affiliate links. Duplicate it wherever you
recommend a specific product. Keep the disclosure line in the footer — it's
legally required (FTC) if you use affiliate links or paid placements.

**4. Adding real posts**
Duplicate `post.html` per article, update the category pill/color (plum =
Parenting, meadow = Outdoor, mustard = Home & DIY, denim = Finance), swap the
placeholder body copy, and add a matching card to the relevant `category.html`
and to `index.html`'s "Latest posts" list.

**5. Next categories**
When you're ready to add Lifestyle, Travel, Storytelling, Food & Drink, or
Health & Well-Being, duplicate `category.html`, pick a new accent color (or
reuse one), and move it from the "Coming to the canvas" pill row into the
main nav.
