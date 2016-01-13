module.exports = function(exphbs){
	var inverted = false;

	var isEven = function (number) {
		if (number % 2 == 0) return "even";
		else return "odd";
	};

	return exphbs.create({
		// Specify helpers which are only registered on this instance.
		helpers: {
			lower: function (str) { 
				return str.toLowerCase(); 
			},
			evenOddClass: function (i, same) {
				if (inverted) {
					if (same) {
						inverted = !inverted;
						return isEven(i % 2) + " same";
					} else {
						return isEven((i % 2) + 1);
					}
				} else {
					if (same) {
						inverted = !inverted;
						return isEven((i % 2) + 1) + " same";
					} else {
						return isEven(i % 2);
					}
				}
			}
		}
	});
}