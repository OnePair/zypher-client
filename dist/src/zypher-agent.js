"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("util"));
var request_1 = __importDefault(require("request"));
var API_PATH = "%s/v1/agent/%s";
var REGISTER_DID = "registerDID";
var REGISTER_NAME = "registerName";
var IMPORT_DID = "importDID";
var AUTHORIZE_PROCESSOR = "authorizeProcessor";
var IMPORT_PROCESSOR = "importProcessor";
var REVOKE_PROCESSOR = "revokeProcessor";
var CREATE_JWT = "createJwt";
var VERIFY_JWT = "verifyJwt";
var CREATE_AUTH_REQUEST = "createAuthRequest";
var SIGN_AUTH_REQUEST = "signAuthRequest";
var VERIFY_AUTH_REQUEST = "verifyAuthRequest";
var VERIFY_AUTH_RESPONSE = "verifyAuthResponse";
var ZypherAgent = /** @class */ (function () {
    function ZypherAgent(host) {
        this.apiHost = util_1.default.format(API_PATH, host);
    }
    ZypherAgent.prototype.registerDID = function (protocol, password) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(REGISTER_DID);
                var body = { protocol: protocol, password: password };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.registerName = function (protocol, password, name) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(REGISTER_NAME);
                var body = { protocol: protocol, password: password, name: name };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.importDID = function (password, did) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(IMPORT_DID);
                var body = { password: password, did: did };
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
    ZypherAgent.prototype.authorizeProcessor = function (protocol, password, processorId, publicKey, auth, sig) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(AUTHORIZE_PROCESSOR);
                var body = {
                    protocol: protocol,
                    password: password,
                    processorId: processorId,
                    publicKey: publicKey,
                    auth: auth,
                    sig: sig
                };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.importProcessor = function (protocol, password, processorId, processorToken, privateKey) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(IMPORT_PROCESSOR);
                var body = {
                    protocol: protocol,
                    password: password,
                    processorId: processorId,
                    processorToken: processorToken,
                    privateKey: privateKey
                };
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
    ZypherAgent.prototype.revokeProcessor = function (protocol, password, processorId) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(REVOKE_PROCESSOR);
                var body = {
                    protocol: protocol,
                    password: password,
                    processorId: processorId
                };
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
    ZypherAgent.prototype.createJwt = function (protocol, password, claims, expiresIn) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(CREATE_JWT);
                var body = {
                    protocol: protocol,
                    password: password,
                    claims: claims,
                    expiresIn: expiresIn
                };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.verifyJwt = function (jwt, id) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(VERIFY_JWT);
                var body = { jwt: jwt, id: id };
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
    ZypherAgent.prototype.createAuthRequest = function (id) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(CREATE_AUTH_REQUEST);
                var body = { id: id };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.signAuthRequest = function (password, authRequest) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(SIGN_AUTH_REQUEST);
                var body = { password: password, authRequest: authRequest };
                request_1.default.post(apiUrl, { json: body }, function (err, httpResponse, body) {
                    if (err)
                        throw err;
                    if (httpResponse.statusCode != 201) {
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
    ZypherAgent.prototype.verifyAuthResponse = function (password, authReqsponse) {
        var _this = this;
        return new Promise(function (onSuccess, onError) {
            try {
                var apiUrl = _this.getApiUrl(VERIFY_AUTH_RESPONSE);
                var body = { password: password, authReqsponse: authReqsponse };
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
    ZypherAgent.prototype.getApiUrl = function (endpoint) {
        return util_1.default.format(this.apiHost, endpoint);
    };
    return ZypherAgent;
}());
exports.ZypherAgent = ZypherAgent;
