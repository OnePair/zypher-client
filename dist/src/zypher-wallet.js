"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("util"));
var request_1 = __importDefault(require("request"));
var API_PATH = "%s/v1/wallet/%s";
var GET_ADDRESS = "getAddress";
var GET_INFO = "getInfo";
var GET_PUBLIC_KEYS = "getPublicKeys";
var GET_SEED_PHRASE = "getSeedPhrase";
var RECOVER_FROM_SEED_PHRASE = "recoverFromSeedPhrase";
var ZypherWallet = /** @class */ (function () {
    function ZypherWallet(host) {
        this.apiHost = util_1.default.format(API_PATH, host);
    }
    ZypherWallet.prototype.getAddress = function (protocol, password) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(GET_ADDRESS);
                var body = { protocol: protocol, password: password };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 200) {
                        onError(body);
                        return;
                    }
                    onSuccess(body);
                });
            }
            catch (err) {
                onError(err);
            }
        });
    };
    ZypherWallet.prototype.getInfo = function (protocol) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(GET_INFO);
                var body = { protocol: protocol };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 200) {
                        onError(body);
                        return;
                    }
                    onSuccess(body);
                });
            }
            catch (err) {
                onError(err);
            }
        });
    };
    ZypherWallet.prototype.getPublicKeys = function (protocol, password) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(GET_PUBLIC_KEYS);
                var body = { protocol: protocol, password: password };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 200) {
                        onError(body);
                        return;
                    }
                    onSuccess(body);
                });
            }
            catch (err) {
                onError(err);
            }
        });
    };
    ZypherWallet.prototype.getSeedPhrase = function (protocol, password) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(GET_SEED_PHRASE);
                var body = { protocol: protocol, password: password };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 200) {
                        onError(body);
                        return;
                    }
                    onSuccess(body);
                });
            }
            catch (err) {
                onError(err);
            }
        });
    };
    ZypherWallet.prototype.recoverFromSeedPhrase = function (protocol, password, phrase) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(RECOVER_FROM_SEED_PHRASE);
                var body = { protocol: protocol, password: password, phrase: phrase };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 200) {
                        onError(body);
                        return;
                    }
                    onSuccess(body);
                });
            }
            catch (err) {
                onError(err);
            }
        });
    };
    ZypherWallet.prototype.getApiUrl = function (endpoint) {
        return util_1.default.format(this.apiHost, endpoint);
    };
    return ZypherWallet;
}());
exports.ZypherWallet = ZypherWallet;
