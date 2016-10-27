#   node-smhi

Simple interface for SMHI [smhi](http://opendata.smhi.se/apidocs/)

##  Example usage

```javascript

    const smhi = require('smhi-node');

    smhi({lat: 58.5812, lon: 16.158})
    .then(res => console.log(res))
    .catch(err => console.error(err));

```
