# Language-Specific Error Handling Patterns

This file contains reference implementations for various languages as well as universal architectural patterns.

## Python Error Handling

<details>
<summary>Custom Exception Hierarchy</summary>

```python
class ApplicationError(Exception):
    """Base exception for all application errors."""
    def __init__(self, message: str, code: str = None, details: dict = None):
        super().__init__(message)
        self.code = code
        self.details = details or {}

class NotFoundError(ApplicationError):
    pass
```
</details>

## TypeScript/JavaScript Error Handling

<details>
<summary>Result Type Pattern</summary>

```typescript
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

function Ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

function Err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

function parseJSON<T>(json: string): Result<T, SyntaxError> {
  try {
    return Ok(JSON.parse(json) as T);
  } catch (error) {
    return Err(error as SyntaxError);
  }
}
```
</details>

## Rust Error Handling

<details>
<summary>Result Types and Propagating Errors</summary>

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;  // ? operator propagates errors
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}
```
</details>

## Go Error Handling

<details>
<summary>Explicit Error Returns</summary>

```go
func getUser(id string) (*User, error) {
    user, err := db.QueryUser(id)
    if err != nil {
        return nil, fmt.Errorf("failed to query user: %w", err)
    }
    if user == nil {
        return nil, errors.New("user not found")
    }
    return user, nil
}
```
</details>

## Universal Architectural Patterns

### Circuit Breaker
Prevents cascading failures in distributed systems. When failures exceed a threshold, requests are rejected immediately to give the failing service time to recover (Open State), then gradually let back in (Half-Open State).

### Error Aggregation
Collects multiple errors instead of failing on the first. Very common for field and payload validation so you can show the user ALL form errors in one go, e.g., using an `ErrorCollector`.

### Graceful Degradation
Where primary functionality is broken, providing a fallback instead of failing the request entirely, such as defaulting to a stale cache or removing complex features from UI instead of a blank screen.
