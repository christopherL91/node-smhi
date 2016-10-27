'use strict';

import fetch from 'node-fetch';

const checkStatus = (res) => {
    return new Promise((resolve, reject) => {
        if (res.status >= 200 && res.status < 299) {
            return resolve(res);
        } else {
            const error = new Error(`StatusCode: ${res.status}, message: ${res.statusText}`);
            return reject(error);
        }
    });
};

export default function({lat, lon}) {
    const url = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(checkStatus)
    .then(res => res.json());
};
