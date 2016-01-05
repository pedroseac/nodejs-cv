module.exports = function(exphbs){
	var inverted = false;

	return exphbs.create({
		// Specify helpers which are only registered on this instance.
		helpers: {
			lower: function (str) { 
				return str.toLowerCase(); 
			},
			evenOddClass: function (i, same) {
				if  ((i % 2) == 0) {
					if (same) {
						inverted = !inverted;
						return "odd same";
					} else if (inverted) {
						return "odd";
					}
					return "even";
				} else {
					if (same) {
						inverted = !inverted;
						return "even same";
					} else if (inverted) {
						return "even"; 
					}
					return "odd"; 
				}
			}
		}
	});
}