

let usernames = [
  'first1234',
  'last0987',
  'middle654',
  'flag0129',
  'bestbuy5674',
  'quarter25',
  'wearehere2222',
  'texas1883',
  'fight2024',
  'ousucks1989',
]; 
 
function getRandomUsername() {

    const newUsername = usernames[Math.floor(Math.random() * usernames.length )];
    console.log("Adding: ", newUsername);
    const continueData = usernames.filter(user => user !== newUsername);
    console.log("Remaining Data: ", continueData)

    usernames = continueData;
    
    return newUsername
  }
  
  
  let emails = [ 
    'yeep@yahoo.com',
    'heep@gmail.com',
    'teep@yahoo.com',
    'rere@outlook.com',
    'yes1234@gmail.com',
    'takeover89@gmail.com',
    'yourgone683@yahoo.com',
    'myking89@outlook.com',
    'myqueen23@yahoo.com',
    'jester564@gmail.com',
  ];
  
  function getRandomEmail(){ 
    
    const newEmail = emails[Math.floor(Math.random()*emails.length)]
    console.log("Adding: ", newEmail);
    const continueData = emails.filter(email => email !== newEmail);
    console.log("Remaining Data: ", continueData)
  
    emails = continueData;
    
    return newEmail
  }
  



const randomUsername = getRandomUsername()
  const randomEmail = getRandomEmail()
  console.log(randomUsername);
  console.log(randomEmail)

  
  module.exports = {getRandomUsername, getRandomEmail, usernames, emails, }
  


