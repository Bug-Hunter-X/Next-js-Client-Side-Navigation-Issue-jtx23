# Next.js Client-Side Navigation Issue

This repository demonstrates a common issue in Next.js applications involving client-side navigation using `router.push()`.  The problem manifests as an unhandled promise rejection and a momentary flickering of the UI before the navigation completes.

The root cause is typically related to how client-side navigation handles race conditions and potential timing differences between rendering and route changes.