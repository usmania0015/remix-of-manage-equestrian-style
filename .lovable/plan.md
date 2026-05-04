# Manège — Competitor Benchmark & Build Plan

## What the best competitors do well

**Equestrian Stockholm** (the gold standard for luxury minimalism)
- Geo-aware country/currency/language modal on first visit
- "Trusted by 1M+ riders" social proof in announcement bar
- Express shipping + free returns messaging baked into nav
- Editorial homepage: campaign-style imagery, lookbooks, ambassador/team rider stories
- "World of ES" content hub (stories, behind-the-scenes, athlete profiles)
- Refined mega menus organized by Rider / Horse / Discipline / Color
- Sustainability page with materials traceability
- Wishlist, recently viewed, size guides on every PDP

**LeMieux** (best engagement & community mechanics)
- **Outfit Builder** — pick a color, see coordinated horse + rider sets
- **Insiders App / Loyalty program** with real-time rewards
- Discipline-driven landing pages (Eventing, Dressage, Show Jumping)
- Ambassador / #TeamLeMieux campaign (Badminton tie-in)
- Seasonal "drop" pages (SS26) with countdowns
- Toys / lifestyle / gift extensions broaden the brand
- Heavy use of short video on home + PDP

**Other notable patterns** (Kingsland, Cavalleria Toscana, PS of Sweden)
- Story-led "Heritage" / atelier pages
- Care guides per fabric type
- "Complete the look" cross-sell on PDP
- Press / editorial logos strip
- Stockists / "Find a retailer" map

## What Manège already has
Header w/ mega menu, Ilyana Collection page, currency/language selector, hero, featured products, sale + reviews carousels, footer with VIP newsletter, basic About/Contact/FAQ, Shop, PDP, Cart, Checkout.

## Gaps to close (prioritized)

### Phase 1 — Conversion & polish (high impact, low lift)
1. **Geo welcome modal** on first visit (country → currency/language) — persists in localStorage; mirrors ES.
2. **Wishlist** (heart icon already on cards) — context + drawer + persisted in localStorage; later sync to Lovable Cloud when user signs in.
3. **Recently viewed** strip on PDP and homepage.
4. **PDP upgrades**:
   - Image gallery w/ thumbnails + zoom
   - Size guide modal (per category)
   - "Complete the look" cross-sell carousel
   - Sticky add-to-cart on scroll
   - Shipping/returns accordion
   - Stock urgency ("Only 3 left") + ships-by date
5. **Quick view modal** from product cards (already teased in hover state).
6. **Editorial polish**: replace generic CTAs with campaign-style imagery; add a press/as-seen-in logo strip.

### Phase 2 — New pages (depth, SEO, story)
1. **/discipline/[show-jumping | dressage | eventing]** — landing pages per discipline with curated products, athlete quote, hero video slot.
2. **/world** ("World of Manège") — editorial hub:
   - /world/journal — long-form articles (riding rituals, styling tips, care guides)
   - /world/atelier — craftsmanship + materials
   - /world/ambassadors — team riders / stables
3. **/sustainability** — materials, sourcing, packaging, lifetime repair promise.
4. **/lookbook/[season]** — full-bleed editorial scroll, shop-the-look hotspots.
5. **/size-guide**, **/care-guide**, **/shipping-returns** — proper standalone pages (also boosts SEO).
6. **/stockists** — simple map + list (placeholder stores ok for v1).
7. **/gift-cards** and **/gift-guide** — drives Q4 revenue.

### Phase 3 — Differentiating features
1. **Outfit Builder (Manège Atelier)** — LeMieux-inspired but luxury-coded:
   - Pick a palette (Ivory, Espresso, Sage, Noir)
   - System surfaces matching saddle pad, ear bonnet, polos, rider top
   - "Add full set to cart" CTA
2. **VIP / Maison Membership** — tiered loyalty (Initiate / Connoisseur / Maison) with early access, complimentary monogramming, private styling. Phase 1 = signup + benefits page; Phase 2 = real points via Cloud.
3. **AI Styling Concierge** — chat widget powered by Lovable AI (Gemini 2.5 Flash) that recommends pieces by occasion ("dressage show, ivory palette"). Grounded in product catalog.
4. **Personal monogramming** option on selected pieces (PDP toggle + 3-character input + small upcharge).

### Phase 4 — Backend & growth
1. Move products from `src/data/products.ts` to a `products` table in Lovable Cloud (with categories, variants, images[], stock).
2. Wishlist + recently viewed sync to user account.
3. Real reviews table (currently static carousel) with verified-buyer badges.
4. Stripe checkout (replace mock).
5. Newsletter → store emails in Cloud; trigger welcome email via edge function.
6. Sitemap.xml + structured Product/BreadcrumbList schema on every PDP for SEO.

## Recommended starting point (next build batch)
If you approve, the first implementation pass will tackle **Phase 1 in full + the editorial /world hub skeleton + /discipline pages + /size-guide + /sustainability**. That's the highest-ROI block: it makes the site *feel* on par with ES/LeMieux and meaningfully improves SEO and conversion before we layer on Outfit Builder, loyalty, and Cloud-backed features.

## Open questions before I start
1. Which **Phase 3 differentiator** excites you most — Outfit Builder, VIP Membership, or AI Styling Concierge? (We can do all eventually; pick the hero feature.)
2. Want the **geo modal** to actually detect country (via IP API), or just present a manual picker on first visit?
3. For the **/world** editorial hub — placeholder lorem articles for now, or do you have real copy/imagery to drop in?
4. Should I wire **wishlist & recently viewed** to Lovable Cloud now (requires login), or keep localStorage-only for v1?
