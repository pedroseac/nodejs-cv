module.exports = function(app){
	var fs = require("fs");
	var file = fs.readFileSync("ps.resume.json");
	var resume = JSON.parse(file);

	app.get('/', function (req, res) {
		res.render('index', {
			title: '#pedroseac',
			basics: resume.basics,
			skills: resume.skills,
			languages: resume.languages,
			education: resume.education,
			work: resume.work
		})
	});
}