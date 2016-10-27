'use strict';

import test from 'ava';
import smhi from '../index.js';

test('Should be able to get data', t => {
    return smhi({lat: 58.5812, lon: 16.158});
});

test('Should fail getting data', t => {
    return t.throws(smhi({lat: 200, lon: 200}));
});
