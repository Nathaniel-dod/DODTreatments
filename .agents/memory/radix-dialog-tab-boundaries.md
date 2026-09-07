---
name: Radix dialog tab boundaries
description: Preventing backward keyboard traversal from sticking on a Radix tab set at the start of a modal.
---

When a Radix tab set is the first interactive region in a looping dialog, the tablist container must not compete with its active tab as a separate tab stop. Keep the active tab as the keyboard entry point.

**Why:** With both elements in the tab order, backward traversal at the dialog boundary can land on the tablist wrapper and immediately return to the active tab instead of wrapping to the dialog’s final control.

**How to apply:** For tab sets at a modal’s first focus boundary, verify one-keystroke Shift+Tab wrapping and remove the wrapper’s redundant tab stop when needed; preserve the active trigger and arrow-key roving behavior.