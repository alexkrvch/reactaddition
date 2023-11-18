module.exports = {
    chromeFlags: '--headless --disable-gpu --hide-scrollbars --no-sandbox',
    diffingEngine: 'pixelmatch',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 0.5,
            mobile: false
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
            deviceScaleFactor: 0.5
        }
    }
}
