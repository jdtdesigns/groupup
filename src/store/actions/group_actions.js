export default {
	createGroup({commit}, data) {
		const groups_ref = firebase.database().ref('groups');

		const group = {
			leader_uid: data.leader_uid,
			leader_name: data.leader_name,
			stack: data.stack ? data.stack : null,
			hangouts_link: data.hangouts_link ? data.hangouts_link : null,
			members: [data.leader_uid]
		};

		groups_ref.child(_.lowerCase(data.group_name)).set(group);

		commit('addGroup', group);
	},

	updateGroup({commit}, data) {
		const group_ref = firebase.database().ref(`groups/${data.group_name}`);

		group_ref.once('value')
		.then(group => {
			group = group.val();

			if ( data.new_member )
				group.members.push(data.new_member);

			group.stack = data.stack ? data.stack : group.stack;
			group.hangouts_link = data.hangouts_link ? data.hangouts_link : group.hangouts_link;							

			group_ref.update(group);

			commit('updateGroup', {group: group, index: data.index});
		});
	},

	deleteGroup({commit}, data) {
		const group_ref = firebase.database().ref(`groups/${data.name}`);

		group_ref.remove();
		commit('deleteGroup', data);
	}
};