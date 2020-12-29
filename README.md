# rblx-rip
An asset ripper for ROBLOX.

# How to install package (works on typescript and javascript)
`npm install rblx-rip --save`

# Examples
Below you will find some examples to help you:

## Typescript
```typescript
// Requirements
import { RRip } from "rblx-rip"

// Test
const _RRip = new RRip();

// Downloading an audio
(async () => {
    _RRip.audio(639750143);
})();
```
## Javascript
```javascript
// Requirements
const RRip = require("rblx-rip")

// Test
const _RRip = new RRip.RRip();

// Downloading an audio
(async () => {
    _RRip.audio(639750143);
})();
```