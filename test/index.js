// Requirements
const RRip = require("../lib/index"); // do require("rblx-rip") instead

// Config
const config = require("./config.json");

// Test
const _RRip = new RRip.RRip();

// Downloading an audio
(async () => {
    for (var [key, value] of Object.entries(config)){
        eval(`_RRip.${key}(${value})`);
    }
})();