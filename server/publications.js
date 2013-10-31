/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('projectPeople', function(project) {
  return People.find({projectId: project._id});
});

// Publish a single item

Meteor.publish('singlePerson', function(id) {
  return People.find(id);
});

// Publish current user

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId);
});