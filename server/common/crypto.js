const crypto = require('crypto');
module.exports = {
    MD5_SUFFIX: 'djnquwdhwbnhjbdwcrypto',
    md5: function (str) {
        var obj = crypto.createHash('md5');
        return obj.update(str).digest('hex');
    }
};