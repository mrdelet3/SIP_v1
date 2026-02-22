---
name: analyzing-task-complexity
description: Analyzes design and website change requests to determine if they require rapid execution (Gemini Flash) or deep planning (Claude 4.6 Opus). Use prior to executing any website change request.
---

# Task Complexity Analysis Protocol

## When to use this skill
- Whenever the user asks to change or alter the design of the website.
- Before starting any implementation for new features, UI adjustments, or component modifications.

## Workflow

1. **Assessing the Request**: Read the user's requested change and evaluate its scope against the existing codebase.
2. **Determine Route**:
   - **Minimal Change (Gemini Flash Route)**: Isolated design tweaks, color palette changes, typography adjustments, or small copy updates. 
   - **Complex Change (Claude 4.6 Opus Route)**: Multi-component refactors, new page creations, complex interactive features, or prolonged architectural planning.

### Gemini Flash Route (Fast Execution)
- **Acknowledge**: State clearly that this is a minimal change and you will execute it rapidly.
- **Process**: Bypass prolonged planning artifacts. Directly jump into editing the necessary files (`index.css`, components, etc.) for a fast, iterative turnaround.

### Claude 4.6 Opus Route (Prolonged Planning)
- **Acknowledge**: State clearly that this is a complex change requiring deep planning.
- **Process**: 
  - Do NOT modify code yet.
  - Create a detailed `implementation_plan.md` in your artifact directory.
  - Break down the requirements, analyze component dependencies, and propose a step-by-step strategy.
  - Request the user's approval on the plan before proceeding.

## Instructions
1. Begin your response by printing a prominent header: `🧠 **Complexity Analysis: [Gemini Flash Engine / Claude 4.6 Opus Engine]**`
2. Briefly justify your classification based on the scope of the user's request.
3. If using the fast route, proceed with the UI edits immediately.
4. If using the prolonged planning route, generate the `implementation_plan.md` and await user approval.
