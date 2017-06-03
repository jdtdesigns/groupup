import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import user_actions from './store/actions/user_actions';
import user_mutations from './store/mutations/user_mutations';
import group_actions from './store/actions/group_actions';
import group_mutations from './store/mutations/group_mutations';

Vue.use(Vuex);

/*

Data Logic:
	- User can log in √
		. Has profile
			_ Name
				. Updatable
			_ Join Date
				. Strict
			_ Hangout Meetups
				. Shows a listing of all upcoming meetups
			_ Languages
				. User can add programming languages they specialize in
		. Can invite member to group
		. Can be invited to a group
		. Can search for members

	- Groups
		. Has a leader
			_ Can update/delete group
		. Has a title
		. Has an optional stack listing
		. Has a hangouts link
			_ Only visible to members of this group
		. Has members list
		. Can be created √
		. Can be updated √
		. Can be deleted √

	- Hangout Meetup
		. Has a group associated with it
		.	Has Date/Time of meetup
		. Users can click to choose to say "I'm in" or "Can't make it"
		. Shows how many members have signed up to go

*/

export default new Vuex.Store({
	state: {
		logged_in: false,
		user: {},
		user_groups: [],
		groups: [],
		meetups: []
	},


	getters: {
		userStatus(state) {
			return state.logged_in;
		},

		userGroups(state) {
			return state.user_groups;
		}
	},


	// jshint ignore:start
	mutations: {
		...user_mutations,
		...group_mutations
	},


	actions: {
		...user_actions,
		...group_actions
	}
	// jshint ignore:end
});