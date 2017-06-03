export default {
	setUser(state, user) {
		state.user = user;
	},

	setUserStatus(state, status) {
		state.logged_in = status;
	},

	updateUserGroups(state, groups) {
		state.user_groups = groups;
	}
};