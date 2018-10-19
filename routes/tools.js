/**
 * @author ligang.yao
 */
module.exports = function isGameiom(req) {
	var parts = req.headers.host.split('.');
	if(parts.length <= 2) return false;
	return parts[0] == 'gameiom';
};
