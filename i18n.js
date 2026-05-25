// Minimal English-only replacement for the anti:i18n integration. The original
// loaded ~30 language files via anti:i18n; we only ship English here. If you
// need more, fold them into `strings` below as additional keys.
var strings = {
	resetPasswordDialog: {
		title: "Reset your password",
		newPassword: "New password",
		newPasswordAgain: "New Password (again)",
		cancel: "Cancel",
		submit: "Set password",
	},
	enrollAccountDialog: {
		title: "Choose a password",
		newPassword: "New password",
		newPasswordAgain: "New Password (again)",
		cancel: "Close",
		submit: "Set password",
	},
	justVerifiedEmailDialog: {
		verified: "Email address verified",
		dismiss: "Dismiss",
	},
	loginButtonsMessagesDialog: {
		dismiss: "Dismiss",
	},
	loginButtonsLoggedInDropdownActions: {
		password: "Change password",
		signOut: "Sign out",
	},
	loginButtonsLoggedOutDropdown: {
		signIn: "Sign in",
		up: "Join",
	},
	loginButtonsLoggedOutPasswordServiceSeparator: {
		or: "or",
	},
	loginButtonsLoggedOutPasswordService: {
		create: "Create",
		signIn: "Sign in",
		forgot: "Forgot password?",
		createAcc: "Create account",
	},
	forgotPasswordForm: {
		email: "Email",
		reset: "Reset password",
		invalidEmail: "Invalid email",
	},
	loginButtonsBackToLoginLink: {
		back: "Cancel",
	},
	loginButtonsChangePassword: {
		submit: "Change password",
		cancel: "Cancel",
	},
	loginButtonsLoggedOutSingleLoginButton: {
		signInWith: "Sign in with",
		configure: "Configure",
	},
	loginButtonsLoggedInSingleLogoutButton: {
		signOut: "Sign out",
	},
	loginButtonsLoggedOut: {
		noLoginServices: "No login services configured",
	},
	loginFields: {
		usernameOrEmail: "Username or Email",
		username: "Username",
		email: "Email",
		password: "Password",
	},
	signupFields: {
		username: "Username",
		email: "Email",
		emailOpt: "Email (optional)",
		password: "Password",
		passwordAgain: "Password (again)",
	},
	changePasswordFields: {
		currentPassword: "Current Password",
		newPassword: "New Password",
		newPasswordAgain: "New Password (again)",
	},
	infoMessages: {
		emailSent: "Email sent",
		passwordChanged: "Password changed",
	},
	errorMessages: {
		genericTitle: "There was an error",
		userNotFound: "User not found",
		invalidEmail: "Invalid email",
		incorrectPassword: "Incorrect password",
		usernameTooShort: "Username must be at least 3 characters long",
		passwordTooShort: "Password must be at least 6 characters long",
		passwordsDontMatch: "Passwords don't match",
		newPasswordSameAsOld: "New and old passwords must be different",
		signupsForbidden: "Signups forbidden",
	},
};

function lookup(key) {
	if (!key)
		return key;
	var parts = String(key).split(".");
	var node = strings;
	for (var i = 0; i < parts.length; i++) {
		if (node == null)
			return key;
		node = node[parts[i]];
	}
	return (typeof node === "string") ? node : key;
}

var previousI18n = Blaze._globalHelpers && Blaze._globalHelpers.i18n;

Template.registerHelper("i18n", function (key) {
	var translated = lookup(key);
	if (translated !== key)
		return translated;

	if (typeof previousI18n === "function")
		return previousI18n.apply(this, arguments);

	return key;
});

accountsUIBootstrap3 = {
	setLanguage: function () {},
	getLanguage: function () { return "en"; },
	map: function () {},
};
