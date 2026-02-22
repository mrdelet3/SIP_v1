---
name: writing-plans
description: Writes comprehensive, step-by-step implementation plans before touching code. Use when the user has a spec or requirements for a multi-step task and needs a clear plan.
---

# Writing Plans

## When to use this skill
- After a brainstorming session has reached a validated design.
- When the user asks you to write an implementation plan for a feature or task.
- Before writing any code for a complex or multi-step feature.

## Overview
Write comprehensive implementation plans assuming the executing agent or engineer has zero context for our codebase and questionable taste. Document everything they need to know: which files to touch for each task, code, testing, docs they might need to check, and how to test it. 

Provide the whole plan as bite-sized tasks emphasizing DRY, YAGNI, TDD, and frequent commits.

## Workflow: Bite-Sized Task Granularity
Each step should represent one action (2-5 minutes of work):
- "Write the failing test"
- "Run it to make sure it fails"
- "Implement the minimal code to make the test pass"
- "Run the tests and make sure they pass"
- "Commit"

## Instructions

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

**Save plans to:** `docs/plans/YYYY-MM-DD-<feature-name>.md`

### Plan Document Header
Every plan MUST start with this header:

```markdown
# [Feature Name] Implementation Plan

**Goal:** [One sentence describing what this builds]
**Architecture:** [2-3 sentences about approach]
**Tech Stack:** [Key technologies/libraries]
---
```

### Task Structure Template
Use the following format for each task in the plan:

```markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file.tsx`
- Modify: `exact/path/to/existing.ts:123-145`
- Test: `tests/exact/path/to/test.ts`

**Step 1: Write the failing test**
(Provide exact code for the test)

**Step 2: Run test to verify it fails**
Run: `npm test -- tests/path/test.ts`
Expected: FAIL

**Step 3: Write minimal implementation**
(Provide exact code for the implementation)

**Step 4: Run test to verify it passes**
Run: `npm test -- tests/path/test.ts`
Expected: PASS

**Step 5: Commit**
Run: `git add <files> && git commit -m "feat: <message>"`
```

## Reminders
- Use exact file paths always.
- Include complete code snippets in the plan (do not just say "add validation").
- Provide exact commands with expected output.
- Emphasize DRY, YAGNI, TDD, and frequent commits.

## Execution Handoff
After saving the plan, offer execution choices to the user:
1. **Execute now**: The agent will use the `executing-plans` skill to build it step-by-step.
2. **Review later**: The user can review the plan and trigger execution when ready.
