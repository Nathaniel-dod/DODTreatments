---
name: Treatment CTA routing
description: Product rule for calls to action on treatment pages.
---

Treatment-page “Find a Practitioner” actions must route to the Clinics page, not the practitioner map. Treatment-specific “Book Consultation” actions should appear only on the Perfect Day Consult treatment page.

**Why:** The Clinics page is the intended conversion path for treatment availability, while consultation booking is specific to the Perfect Day Consult offering.

Every treatment detail page should also include a secondary end-of-page CTA to DOD5Star. If existing DOD5Star content explicitly confirms that resident access is included at no additional treatment fee, the CTA must state that it is free with the stay.

DOD5Star is a separate visitor journey. Its treatment links must stay within the DOD5Star route namespace, use only the established DOD5Star top navigation, and replace clinic or practitioner CTAs with retreat inquiry actions. General site links may remain in the footer.

**Why:** Retreat visitors should not be diverted to competing clinic or practitioner choices while they are evaluating a DOD5Star stay.

**How to apply:** Follow these rules when adding or revising treatment cards, shared treatment CTAs, detail-page closing sections, and the main Treatments page. Do not label a treatment free without explicit inclusion evidence. Never expose clinic-directory actions inside the DOD5Star journey; remove those actions from the rendered markup rather than hiding them with CSS.