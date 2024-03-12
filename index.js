const genId1 = require('ptdz_xid');
const genId2 = require('szzn_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|MlMJN3Xy82|' + genId2()).digest('base64');
}


module.exports = generateKey;
