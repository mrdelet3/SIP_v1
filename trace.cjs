const potrace = require('potrace');
const fs = require('fs');

const params = {
    optTolerance: 0.2, // fine tolerance
};

potrace.trace('C:/Users/yarku/.gemini/antigravity/brain/8cf2d610-3f12-4e64-9a8d-d23e62da78e5/image/media__1771816008638.png', params, function (err, svg) {
    if (err) throw err;
    console.log(svg);
});
