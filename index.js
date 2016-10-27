'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch = _interopDefault(require('node-fetch'));

var checkStatus = function checkStatus(res) {
    if (res.status >= 200 && res.status <= 300) {
        return Promise.resolve(res);
    } else {
        return Promise.reject(new Error('Status: ' + res.status + ', statusText: ' + res.statusText));
    }
};

var main = function (_ref) {
    var lat = _ref.lat,
        lon = _ref.lon;

    var url = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/' + lon + '/lat/' + lat + '/data.json';
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(checkStatus).then(function (res) {
        return res.json();
    });
};

module.exports = main;
