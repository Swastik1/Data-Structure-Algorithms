// Create a function which accepts the age and tell if the person is elligible to vote or not

function elligibleToVote(name, age) {
  if (age >= 18) {
    console.log("Hey you are elligible to vote", name);
  } else {
    console.log("Oops! you need to be 21+ to be elligible to vote", name);
  }
}

elligibleToVote("Swastik", 27);
