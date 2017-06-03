export default {
	authenticate({commit}) {
		firebase.auth().onAuthStateChanged(user => {
			if ( user ) {
				const user_ref = firebase.database().ref(`users/${user.uid}`);
				user_ref.once('value')
				.then(user => {
					commit('setUser', user.val());
					commit('setUserStatus', true);
				});					
			} else commit('setUserStatus', false);
		});
	},

	logInUser({commit}) {
		const provider = new firebase.auth.GithubAuthProvider();

		firebase.auth().signInWithPopup(provider)
		.then(result => {
			const db = firebase.database(),
						user_ref = db.ref(`users/${result.user.uid}`);
				
			user_ref.once('value')
			.then(user => {
				if ( !user.val() ) {
					const data = {
						name: result.user.displayName,
						uid: result.user.uid,
						username: result.additionalUserInfo.username,
						profile: result.additionalUserInfo.profile.html_url,
						avatar: result.additionalUserInfo.profile.avatar_url
					};

					const users_ref = db.ref('users');
					users_ref.child(result.user.uid).set(data);
					commit('setUser', data);
				} else commit('setUser', user.val());
				
				commit('setUserStatus', true);
			});				
		});
	},

	getUserGroups({commit}, uid) {
		const groups_ref = firebase.database()
			.ref(`groups`)
			.orderByChild('members')
			.startAt(uid);

		groups_ref.once('value')
		.then(groups => {
			commit('updateUserGroups', groups.val());
		});
	}
};