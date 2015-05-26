cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/src/windows/NetworkInfoProxy.js",
        "id": "org.apache.cordova.network-information.NetworkInfoProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/windows8/SplashScreenProxy.js",
        "id": "org.apache.cordova.splashscreen.SplashScreenProxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/src/windows/StatusBarProxy.js",
        "id": "org.apache.cordova.statusbar.StatusBarProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.splashscreen": "1.0.0",
    "org.apache.cordova.statusbar": "0.1.10"
}
// BOTTOM OF METADATA
});