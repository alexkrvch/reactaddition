module.exports = {
    chromeFlags: '--headless --disable-gpu --hide-scrollbars --no-sandbox',
    diffingEngine: 'looks-same',
    chromeTolerance: 6,
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7'
        }
    }
}
