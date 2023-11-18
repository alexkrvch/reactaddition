module.exports = {
    chromeFlags: '--headless --disable-gpu --hide-scrollbars --no-sandbox',
    diffingEngine: 'pixelmatch',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.docker',
            width: 1366,
            height: 768,
            deviceScaleFactor: 0.5,
            mobile: false
        },
        'chrome.iphone7': {
            target: 'chrome.docker',
            preset: 'iPhone 7',
            deviceScaleFactor: 0.5
        }
    }
}
