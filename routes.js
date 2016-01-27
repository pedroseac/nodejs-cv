module.exports = function(app){
	var fs = require("fs");
	var enFile = fs.readFileSync("ps.en-us.resume.json");
	var enResume = JSON.parse(enFile);
	var ptbrFile = fs.readFileSync("ps.pt-br.resume.json");
	var ptbrResume = JSON.parse(ptbrFile);

	var url = require('url');

	// GENERATE PDF PAGES
	var pdftheme = require('jsonresume-theme-paper');
	var enpdf = pdftheme.render(enResume);
	var ptbrpdf = pdftheme.render(ptbrResume);

	var getQueryParams = function (req) {
		return url.parse(req.url, true).query;
	};

	app.get('/', function (req, res) {
		var qparams = getQueryParams(req);
		var resume = enResume;
		if (qparams.l == 'pt-br') resume = ptbrResume;

		res.render('index', {
			title: '#pedroseac',
			basics: resume.basics,
			skills: resume.skills,
			languages: resume.languages,
			education: resume.education,
			work: resume.work
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

	app.get('/pdf', function (req, res) {
		var isWin = /^win/.test(process.platform);
		var shortcut = 'Ctrl + P';
		if (!isWin) shortcut = '⌘ + P';

		var qparams = getQueryParams(req);
		var pdfpage = enpdf.replace('<span class="note">Check out new print view! (<strong>Press Ctrl + P</strong>) (Not available in Live-Editor!)</span>', '<span class="note">(Press ' + shortcut + ') and Save it as PDF</span>');
		if (qparams.l == 'pt-br') pdfpage = ptbrpdf.replace('<span class="note">Check out new print view! (<strong>Press Ctrl + P</strong>) (Not available in Live-Editor!)</span>', '<span class="note">(Pressione ' + shortcut + ') e salve como PDF</span>');

		res.send(pdfpage);
	});
}