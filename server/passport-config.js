const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const mysql = require('mysql2/promise');
const db = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'aps'
  
})

function initialize(passport) {
  
  const authenticateUser = async (email, password, done) => {
    
    const [rows] = await db.execute('SELECT * FROM users WHERE User_Email = ?', [email]);
    const user = rows[0];

    if (user == null) {
      return done(null, false, { message: 'No user with that email' });
    }

    try {
      if (await bcrypt.compare(password, user.User_Password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => {
    done(null, user.ID);
  });

  passport.deserializeUser(async (id, done) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE ID = ?', [id]);
    const user = rows[0];
    return done(null, user);
  });
}

module.exports = initialize;