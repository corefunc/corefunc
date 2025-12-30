# GitHub Copilot Instructions

When performing a code review, include a risk assessment with one of these levels: Very Low, Low, Medium, High, or Very High

## Priority Areas (Review These)

### Security & Safety

* Unsafe code blocks without justification
* Command injection risks (shell commands, user input)
* Path traversal vulnerabilities
* Credential exposure or hardcoded secrets
* Missing input validation on external data
* Improper error handling that could leak sensitive info

### Correctness Issues

* Logic errors that could cause panics or incorrect behavior
* Race conditions in async code
* Resource leaks (files, connections, memory)
* Off-by-one errors or boundary conditions
* Incorrect error propagation (using `unwrap()` inappropriately)
* Optional types that don’t need to be optional
* Booleans that should default to false but are set as optional
* Error context that doesn’t add useful information
* Overly defensive code with unnecessary checks
* Unnecessary comments that restate obvious code behavior

### Architecture & Patterns

* Code that violates existing patterns in the codebase
* Missing error handling (should use `anyhow::Result`)
* Async/await misuse or blocking operations in async contexts
* Improper trait implementations
