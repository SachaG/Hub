


var github = new GitHub({
    version: "3.0.0", // required
    timeout: 5000     // optional
});

//get user data
var result = github.user.getFrom({
  user: "sachag"
});
console.log(JSON.stringify(result));

// get user repos
var result = github.repos.getFromUser({
  user: "sachag"
});
console.log(JSON.stringify(_.pluck(result, 'name')));
