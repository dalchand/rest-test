Template.login.events({
	"click #signup": function(event, templ) {
		var username = templ.find("#username").value;
		var password = templ.find("#password").value;
		if(username && password) {
			Accounts.createUser({ username: username, password: password }, function(e){
				if(e) {
					console.log(e);
				} else {
					console.log("User created");
				}
			})
		}
	},
	"click #login": function(event, templ) {
		var username = templ.find("#username").value;
		var password = templ.find("#password").value;
		if(username && password) {
			Meteor.loginWithPassword({username: username}, password, function(e) {
				console.log(e);
			})
		}	
	}
})