var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'workspace';
	locals.filters = {
		workspace: req.params.workspace
	};
	locals.data = {
		workspaces: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Workspace').model.findOne({
			state: 'published'
		}).populate('author categories');
		
		q.exec(function(err, result) {
			locals.data.workspace = result;
			next(err);
		});
		
	});
	
	// Load other posts
	view.on('init', function(next) {
		
		var q = keystone.list('Workspace').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		
		q.exec(function(err, results) {
			locals.data.workspaces = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('workspace');
	
};
