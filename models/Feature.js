var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Feature = new keystone.List('Feature', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Feature.add({
	title: { type: String, required: true },
	name: { type: String, default: 'Admin', required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },

	featureImage: { type: Types.CloudinaryImage },
	featureTitle: { type: String, default: 'Help your donors much faster' },
	featureBlurb: { type: String, default: 'Get notifications and respond to your donors 10X faster with Cause Chat than the basic contact form.' }

});

Feature.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Feature.register();