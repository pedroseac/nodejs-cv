module.exports = function(app){
	var fs = require("fs");
	var enFile = fs.readFileSync("ps.en-us.resume.json");
	var enResume = JSON.parse(enFile);
	var ptbrFile = fs.readFileSync("ps.pt-br.resume.json");
	var ptbrResume = JSON.parse(ptbrFile);

	app.get('/', function (req, res) {
		res.render('index', {
			title: '#pedroseac',
			basics: enResume.basics,
			skills: enResume.skills,
			languages: enResume.languages,
			education: enResume.education,
			work: enResume.work
		})
	});

	app.get('/en-us', function (req, res) {
		res.render('index', {
			title: '#pedroseac',
			basics: enResume.basics,
			skills: enResume.skills,
			languages: enResume.languages,
			education: enResume.education,
			work: enResume.work
		})
	});

	app.get('/pt-br', function (req, res) {
		res.render('index', {
			title: '#pedroseac',
			basics: ptbrResume.basics,
			skills: ptbrResume.skills,
			languages: ptbrResume.languages,
			education: ptbrResume.education,
			work: ptbrResume.work
		})
	});
}