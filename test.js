function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}

//find age from current data and birth date
function calculateAge(birthDate) {
  var today = new Date();
  var birthDate = new Date(birthDate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

console.log(calculateAge('09/30/2000'));

//function return random names
function getRandomName() {
  var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob', 'Tom', 'Sam', 'Alex', 'Mike', 'Bill', 'Jack', 'John', 'Jane', 'Mary', 'Mark', 'Bob', 'Tom', 'Sam', 'Alex', 'Mike', 'Bill', 'Jack'];
  var randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;
}

