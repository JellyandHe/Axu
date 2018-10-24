var $axure = window.$axure;

function getRepeater(repeaterId) {
	var repeater;
	var myAxure = $axure(function (target) {
		return 'repeater' === target.type;
	}).each(function(item, id) {
		if(repeaterId === id){
			repeater = item;
		}
	});
	return repeater;
}