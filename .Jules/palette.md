## 2026-06-07 - Executive Positioning UI/UX **Learning:** Explicitly stating engineer-led credentials requires dedicated layout emphasis to capture the 'authority' branding effectively. **Action:** Next time, ensure specialized role details (like Mechanical Engineer, APEGA EIT) get a dedicated 'About' section block or visual highlight, rather than relying strictly on the hero section.
## 2026-06-09 - Interactive UI Enhancements **Learning:** Simple Tailwind utility classes like group-hover and animate-pulse effectively increase visual engagement without adding complex JavaScript logic. **Action:** Next time, default to utilizing standard Tailwind hover states and subtle transform properties for CTAs and interactive cards.

## 2026-06-14 - Gallery Accessibility
**Learning:** Using an interactive `div` wrapper for image galleries prevents keyboard users from opening lightboxes. Replacing `div` with `button` intrinsically adds keyboard support (Enter/Space).
**Action:** Next time, always use semantic `button` tags for clickable thumbnails and ensure they have an `aria-label` describing the resulting image action.
