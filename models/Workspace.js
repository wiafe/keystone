var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Transaction Model
 * ==========
 */

var Workspace = new keystone.List('Workspace', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Workspace.add({
	title: { type: String, required: true },
	name: { type: String, default: 'Admin', required: true },

	headerBackgroundImage: { type: Types.CloudinaryImage },
	callToAction: { type: String },
	callToActionSubheading: { type: String },

	slideOne: { type: Types.CloudinaryImage },
	slideTwo: { type: Types.CloudinaryImage },


	testmonialQuote: { type: String }, 
	client: { type: String },
	clientBackgroundColor: { type: Types.Color },
	clientTitle: { type: String },
	clientLogo: { type: Types.CloudinaryImage },
	clientBackgroundImage: { type: Types.CloudinaryImage },

	state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
});

Workspace.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Workspace.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Workspace.register();
