Package.describe({
	name: 'ian:accounts-ui-bootstrap-3',
	summary: 'Bootstrap-styled accounts-ui with multi-language support.',
	version: '1.2.89',
	git: "https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3"
})

Package.onUse(function (api) {
	api.versionsFrom('METEOR@3.4');

	api.use(['session',
		'spacebars',
		'accounts-base',
		'underscore',
		'templating',
		],'client')

	api.imply('accounts-base', ['client', 'server']);

	// Allows the user of this package to choose their own Bootstrap
	// implementation.
	api.use(['twbs:bootstrap',
					'nemo64:bootstrap'],
					'client', {weak: true});
	// Allows us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth', {weak: true});
	// Allows us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password', {weak: true});

	api.addFiles([
		'accounts_ui.js',

		// English-only i18n stub (replaces the anti:i18n integration)
		'i18n.js',

		'login_buttons.html',
		'login_buttons_single.html',
		'login_buttons_dropdown.html',
		'login_buttons_dialogs.html',

		'login_buttons_session.js',

		'login_buttons.js',
		'login_buttons_single.js',
		'login_buttons_dropdown.js',
		'login_buttons_dialogs.js',
		'accounts_ui.css'
		], 'client')

	api.export('accountsUIBootstrap3', 'client')
})
