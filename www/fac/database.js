function DatabaseService($firebaseObject, $firebaseArray) {
  console.log('DatabaseServ');

  var userName;

  var recipes;

  var User = $firebaseObject.$extend({
    // these methods exist on the prototype, so we can access the data using `this`
    $$defaults: {
      exp: 0,
      level: 1,
      finished: {}
    }
  });

  var user;

  var Report = $firebaseArray.$extend({
    // these methods exist on the prototype, so we can access the data using `this`
  });

  var report  = new Report(fb.child('feedback'));

  return {
    report: report,
    recipes: recipes,
    userName: userName,
    user: user,
    newUser: function (uname) {
      var ref = fb.child(uname);
      return new User(ref);
    }
  };
}
