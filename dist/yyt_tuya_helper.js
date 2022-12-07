"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.sendRequest = void 0;
var src_1 = require("../src");
// const { TuyaContext } = require('../lib/index');
// import { TuyaContext } from '@tuya/tuya-connector-nodejs';
/**
 * api env entrypoint
 *
 * 'https://openapi.tuyacn.com',  // 亚洲 AY
 * 'https://openapi.tuyaus.com',  // 美区 US
 * 'https://openapi.tuyaeu.com',  // 欧洲 EU
 * 'https://openapi.tuyain.com',  // 印度 IN
 */
var context = new src_1.TuyaContext({
    baseUrl: 'https://openapi.tuyaus.com',
    accessKey: 'xxx',
    secretKey: 'xxx'
});
/**
 * Send Request
 * @param endpoint path of url example: /v1.0/devices/device_id
 * @param req_method GET or POST
 * @param pageSize 100
 * @param lastRowKey 2
 */
var main = function (endpoint, req_method, pageSize, lastRowKey) {
    if (endpoint === void 0) { endpoint = ""; }
    if (req_method === void 0) { req_method = ""; }
    if (pageSize === void 0) { pageSize = 100; }
    if (lastRowKey === void 0) { lastRowKey = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var page_size, last_row_key, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page_size = pageSize;
                    last_row_key = lastRowKey;
                    return [4 /*yield*/, context.request({
                        // path: `/v1.0/iot-02/assets/-1/sub-assets`,
                        // path: '/v1.0/devices/ebe3abc567377bbf9exgpw',
                        path: endpoint,
                        method: req_method.toUpperCase() == "GET" ? "GET" : "POST",
                        query: {
                            page_size: page_size,
                            last_row_key: last_row_key,
                            key1: '支持中文',
                            key2: [{ name: 'support' }, { age: 'array' }, { name: 'object' }]
                        }
                    })];
                case 1:
                    res = _a.sent();
                    if (!res.success) {
                        new Error();
                    }
                    // console.log(res);
                    // callback(res)
                    return [2 /*return*/, res];
            }
        });
    });
};
// export main(endpoint, method, page_size = 100, last_row_key = '', callback)
// main('/v1.0/devices/ebe3abc567377bbf9exgpw', "GET").catch(err => {
//   console.log(err);
// });
function sendRequest(endpoint, method, page_size, last_row_key) {
    if (endpoint === void 0) { endpoint = ""; }
    if (method === void 0) { method = ""; }
    if (page_size === void 0) { page_size = 100; }
    if (last_row_key === void 0) { last_row_key = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main(endpoint, method, page_size, last_row_key)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.sendRequest = sendRequest;
;
