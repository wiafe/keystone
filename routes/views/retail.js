var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'retail';
	locals.filters = {
		retail: req.params.retail
	};
	locals.data = {
		transactions: []
	};
	
	view.on('init', function(next) {
	  var query = keystone.list('Retail').model.findOne({'state':'published'})
	    .populate('features')
	    .exec(function(err, result) {
	        locals.data.retail = result;
	        next(err);
	      });
	});
	
	// Load other posts
	view.on('init', function(next) {
		
		var q = keystone.list('Retail').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		
		q.exec(function(err, results) {
			locals.data.retails = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('retail');
	
};
