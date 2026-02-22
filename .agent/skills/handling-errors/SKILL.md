---
name: handling-errors
description: Implements error handling patterns across languages including exceptions, Result types, error propagation, and graceful degradation. Use when the user asks to implement error handling, design APIs, debug, or improve reliability.
---

# Handling Errors

## When to use this skill
- Implementing error handling in new features
- Designing error-resilient APIs
- Debugging production issues
- Improving application reliability

## Workflow
When applying error handling, follow this Validation Loop:
1. **Analyze**: Identify the recoverable vs. unrecoverable errors for the target code.
2. **Plan**: Choose the appropriate pattern (Exceptions, Result Types, Circuit Breaker).
3. **Execute**: Implement the pattern.
4. **Validate**: Review the error messages and ensure resources are cleaned up. 

## Instructions

- **Fail Fast**: Validate input early, fail quickly.
- **Preserve Context**: Include stack traces, metadata, timestamps.
- **Meaningful Messages**: Explain what happened and how to fix it.
- **Log Appropriately**: Error = log, expected failure = don't spam logs.
- **Handle at Right Level**: Catch where you can meaningfully handle.
- **Clean Up Resources**: Use try-finally, context managers, defer.

### Core Philosophies
- **Exceptions**: For unexpected errors/exceptional conditions (e.g., Python, TS).
- **Result Types**: Explicit success/failure for expected errors (e.g., Rust, frequently used in TS).
- **Error Values**: Explicit returns (e.g., Go).

### Universal Patterns
- **Circuit Breaker**: Prevent cascading failures in distributed systems.
- **Error Aggregation**: Collect multiple errors (e.g., form validation) instead of failing on the first.
- **Graceful Degradation**: Try primary function, fall back to cache or defaults on error.

## Resources
- [Language-Specific Error Patterns](examples/language-patterns.md)
