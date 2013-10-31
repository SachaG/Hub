/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop(); 
    }
  }

}

Router.before(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  // Top

  this.route('homepage', {
    path: '/'
  });

  this.route('repos', {
    waitOn: function () {
      return Meteor.subscribe('userRepos');
    },
    data: function () {
      return {
        items: Repos.find()
      }
    }
  });

  this.route('repo', {
    path: '/repos/:name',
    waitOn: function () {
      return Meteor.subscribe('singleRepo', this.params.name);
    },
    data: function () {
      return {
        item: Repos.findOne({name: this.params.name})
      }
    }
  });

  this.route('person', {
    path: '/people/:username',
    waitOn: function () {
      return Meteor.subscribe('singlePerson', this.params.username);
    },
    data: function () {
      return {
        item: People.findOne({username: this.params.username})
      }
    }
  });

});
