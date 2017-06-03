<template>
  <div>
  	

  </div>
</template>

<script>
	import { mapGetters } from 'vuex';
/**
Pages:
	- Landing
	- Group Listing
	- Upcoming Hangout Listing
	- User Profile
		. Basic info (Name, email, github username)

**/

  export default {
    data() {
      return {
      
      }
    },

    computed: {
    	...mapGetters([
    		'userGroups'
    	]),
    	user() {
    		return this.$store.state.user;
    	}
    },

    created() {
    	this.$store.dispatch('authenticate');
   //  	leader_uid: data.leader_uid,
			// leader_name: data.leadername,
			// stack: data.stack ? data.stack : null,
			// hangouts_link: data.hangouts_link ? data.hangouts_link : null,
			// members: [data.uid
    	setTimeout(() => {
    		const group = {
	    		group_name: 'Marietta Group',
	    		leader_uid: this.$store.state.user.uid,
	    		leader_name: this.$store.state.user.name,
	    		stack: ['MEAN'],
	    		hangouts_link: 'https://google.com'
	    	};

	    	this.$store.dispatch('createGroup', group);
    	}, 1500);
    	// this.$store.dispatch('logInUser');
    }
  }
</script>

<style lang="scss">
  
</style>