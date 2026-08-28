---
name: Practitioner map renderer
description: Compatibility constraint for the public practitioner service-area map.
---

Use a DOM/raster-tile map renderer that does not require WebGL2 for the public practitioner locator.

**Why:** A WebGL-based renderer failed completely in the supported preview and automated browser environments, while the DOM-based raster map rendered exact latitude/longitude positions reliably.

**How to apply:** Preserve the non-WebGL rendering approach when changing map styling, markers, clustering, or filtering unless the replacement is verified in environments without WebGL2.

The user confirmed the final Leaflet-based map experience looked good on August 28, 2026.