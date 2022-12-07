import { TuyaOpenApiClient } from '@tuya/tuya-connector-nodejs';
import { TuyaContext } from '../src';
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

const context = new TuyaContext({
    baseUrl: 'https://openapi.tuyaus.com',
    accessKey: 'xxx',
    secretKey: 'xxx',
});

/**
 * Send Request
 * @param endpoint path of url example: /v1.0/devices/device_id
 * @param req_method GET or POST
 * @param pageSize 100
 * @param lastRowKey 2
 */
const main = async (endpoint = "", req_method = "", pageSize = 100, lastRowKey = '') => {
    // auto init token
    // await context.client.init();
    let page_size = pageSize;
    let last_row_key = lastRowKey;

    // const res  = await context.assets.childAssets({
    //   asset_id: '-1',
    //   page_size,
    //   last_row_key,
    // });
    // all api request you can use:
    const res = await context.request({
        // path: `/v1.0/iot-02/assets/-1/sub-assets`,
        // path: '/v1.0/devices/ebe3abc567377bbf9exgpw',
        path: endpoint,
        method: req_method.toUpperCase() == "GET" ? "GET" : "POST",
        query: {
            page_size,
            last_row_key,
            key1: '支持中文',
            key2: [{ name: 'support' }, { age: 'array' }, { name: 'object' }],
        }
    });
    if (!res.success) {
        new Error();
    }
    // console.log(res);
    // callback(res)
    return res;
};

// export main(endpoint, method, page_size = 100, last_row_key = '', callback)
// main('/v1.0/devices/ebe3abc567377bbf9exgpw', "GET").catch(err => {
//   console.log(err);
// });

export async function sendRequest(endpoint = "", method = "", page_size = 100, last_row_key = '') {
    const res = await main(endpoint, method, page_size, last_row_key);
    return res;
};