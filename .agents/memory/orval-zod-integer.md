---
name: Orval zod integer pitfall
description: OpenAPI `type: integer` breaks api-zod codegen typecheck in this monorepo
---

Rule: In `lib/api-spec/openapi.yaml`, use `type: number` instead of `type: integer` for numeric fields.

**Why:** Orval v8 emits `zod.int()` (a zod v4-only API) for `type: integer`, but the generated file imports from the zod v3 root (`import * as zod from 'zod'`), so `pnpm --filter @workspace/api-spec run codegen` fails at the typecheck step with "Property 'int' does not exist".

**How to apply:** Whenever adding schemas to the OpenAPI spec, declare ids/counts as `type: number`. If codegen fails with `zod.int` errors, check for `type: integer` in the spec.
