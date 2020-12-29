// Requirements
const RRip = require("../lib/index") // do require("rblx-rip") instead

// Test
const _RRip = new RRip.RRip();

// Downloading an audio
(async () => {
    _RRip.audio(639750143);
})();