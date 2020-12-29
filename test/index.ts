// Requirements
import { RRip } from "../src/index";

// Config
const config = require('./config.json');

// Test
const _RRip = new RRip();

// Downloading an audio
(async () => {
    for (var [key, value] of Object.entries(config)){
        eval(`_RRip.${key}(${value})`);
    }
})();