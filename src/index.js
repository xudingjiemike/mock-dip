import puck from '@alife/puck'
import config from '../config.json'
const APIHost = 'http://' + config.host + config.path;

function getSchemas() {
    this.url = APIHost + '/schemas/' + encodeURIComponent('57900')
    puck.request(this.url, {
            method: 'GET',
        })
        .then(function(data) {
            debugger;
            console.log('testData', data);
        })
}


export {
    getSchemas
}
