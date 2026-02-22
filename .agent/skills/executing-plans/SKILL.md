---
name: executing-plans
description: Executes a written implementation plan step-by-step with review checkpoints. Use when the user has an approved implementation plan ready to be built.
---

# Executing Plans

## When to use this skill
- When the user asks to execute an existing implementation plan.
- After a plan is created using the `writing-plans` skill and the user says "go".

## Overview
Load the chosen plan, review it critically, execute the tasks in batches, and report back to the user for review between batches. 

**Core principle:** Batch execution with checkpoints for architect/user review.

## Workflow

### Step 1: Load and Review Plan
1. Read the plan file requested by the user.
2. Review it critically — identify any questions or concerns about the plan.
3. If concerns: Raise them with your human partner before starting.
4. If no concerns: Proceed to execution.

### Step 2: Execute Batch
*Default: Execute the first 3 tasks in the plan.*

For each task:
1. Mark it as in progress (update any checklists if they exist).
2. Follow each step exactly as written in the plan (the plan should have bite-sized steps).
3. Run the verification commands specified in the plan.
4. Mark it as completed.

### Step 3: Report
When the batch is complete:
- Show what was implemented.
- Show the verification output.
- Say: "Ready for feedback."

### Step 4: Continue
Based on feedback:
- Apply changes if needed.
- Execute the next batch.
- Repeat until the plan is complete.

## Instructions

**Announce at start:** "I'm using the executing-plans skill to implement this plan."

### When to Stop and Ask for Help
**STOP executing immediately when:**
- You hit a blocker mid-batch (missing dependency, test fails, instruction unclear).
- The plan has critical gaps preventing you from starting.
- You don't understand an instruction.
- Verification fails repeatedly.

**Ask for clarification rather than guessing.**

### When to Revisit Earlier Steps
Return to Review (Step 1) when:
- The partner updates the plan based on your feedback.
- The fundamental approach needs rethinking.

Don't force through blockers — stop and ask.

## Reminders
- Review the plan critically first.
- Follow the plan steps exactly.
- Don't skip verifications.
- Between batches: just report and wait for the user.
- Stop when blocked, don't guess.
