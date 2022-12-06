"use strict";
exports.__esModule = true;
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;
var cors_proxy = require("cors-anywhere");
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: [],
    removeHeaders: []
}).listen(port, host, function () {
    console.log('OHTAM CORS Anywhere起動中 ' + host + ':' + port);
});
