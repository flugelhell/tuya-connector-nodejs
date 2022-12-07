async function getData() {
    let result;
    const tuya_helper = require('./yyt_tuya_helper');
    await tuya_helper.sendRequest('/v1.0/devices/xxx', 'GET', 100, '').then((res) => {
        result = res;
    });
    return result;
};

// run program
getData().then(result => {
    console.log('start');
    console.log(result);
    console.log('end');
}).catch(error => {
    console.log(error);
})