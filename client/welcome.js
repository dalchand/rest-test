Template.welcome.helpers({
	username: function() {
		var user = Meteor.users.findOne(Meteor.userId());
		if(user) {
			return user.username;
		}
	}
});

Template.welcome.events({
	"click #logout": function() {
		Meteor.logout();
	}
})
