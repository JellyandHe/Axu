'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var $axure = window.$axure;

var getRepeater = exports.getRepeater = function getRepeater(repeaterId) {
	var repeater = void 0;
	$axure(function (target) {
		return 'repeater' === target.type;
	}).each(function (item, id) {
		if (repeaterId === id) {
			repeater = item;
		}
	});
	return repeater;
};
