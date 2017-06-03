export default {
	addGroup(state, group) {
		state.groups.push(group);
		state.user_groups.push(group);
	},

	updateGroup(state, data) {
		state.groups[data.index] = data.group;
	},

	deleteGroup(state, data) {
		state.groups.splice(data.index, 1);
		if ( state.user_groups.includes(data.name) )
			state.user_groups.splice(data.index, 1);
	}
};