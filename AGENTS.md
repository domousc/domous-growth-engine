# Project rules

- Active commercial and editorial pages use `src/components/site`; legacy components are not the homepage system. Keep changes in the active system to avoid disconnected edits.
- Editorial selections and search are shared pure functions over the existing post collection so automated posts flow into every listing without manual curation.
- Keep post URLs, sources and publishing automation intact; generated WebP previews accompany, never replace, downloadable PNG sharing assets.
- Use an editorial variant of shared page headings to prioritize reading without changing commercial page CTAs.
- Never attach an anonymous result to a named client; the client list is independent evidence of service history.
- Existing editorial WebP previews are bundled through an asset glob; future automated posts use build-generated public previews, with a stable fallback if unavailable.
