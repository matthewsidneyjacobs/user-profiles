var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  //the error was in here. if(user.username...) should be user.name
    login: function(req, res, next) {
        var userFound = false;
        users.forEach(function(user) {
          if (user.name === req.body.name && user.password === req.body.password) {
            req.session.currentUser = user;
            userFound = true
          }
        });
        if (userFound) {
          res.send({userFound: true});
        }
        else {
          res.send({userFound: false});
        }
    }

}
