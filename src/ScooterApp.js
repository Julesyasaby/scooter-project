// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  // ScooterApp code here
  constructor(){
    "Station A": [],
    "Station B": [],
    "Station C": []
  };
  this.registeredUsers = {};
}

registeredUsers(username, password, age){
  if (this.registeredUsers[username]){
    throw new Error("Username already registered");
  } else if (age < 18){
    throw new Error("Too young to register.")
    }
    else {
      const nameUser = new User(username, password, age);
      this.registeredUsers[username] = newUser;
      console.log(`${username} has been resgistered.`);
      return newUser;
  }
}
loginUser(username, password){
  const user = this.registeredUsers[username];
  if (!user){
    throw new Error("Username or password is incorrect.")
  }
  else {
    user.login(password);
  }
}
logoutUser(username){
  const user = this.registeredUsers[username];
  if (user && user.loggedIn){
    user.logout()
  }
  else{
    throw new Error("No such user is logged in.")
  }
}
createScooter(station){
  if (!this.stations[station]){
    throw new Error("No such station");
  }
  const scooter = new Scooter(station);
  this.station[station].push(scooter);
  console.log("Created new scooter");
  return scooter;
}
dockScooter(scooter, station){
  this.station[station].push(scooter);
  scooter.dock(station)
  console.log("Scooter is docked")
}
rentScooter(scooter, user){
  if (scooter.user){
    throw new Error("Scooter already rented.");
  }
  scooter.rent(user);
  console.log("Scooter is rented.");
}
print(){
  console.log("Registered Users:", this.registeredUsers);
  console.log("Stations:", this.station);
  }
module.exports = ScooterApp
