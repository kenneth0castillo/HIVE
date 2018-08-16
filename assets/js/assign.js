// (function(){
//     // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDwgv_S_nW_5CHyiVsOLA2ZFRlQ7DBzZBA",
//   authDomain: "classroom-fa8c4.firebaseapp.com",
//   databaseURL: "https://classroom-fa8c4.firebaseio.com",
//   projectId: "classroom-fa8c4",
//   storageBucket: "classroom-fa8c4.appspot.com",
//   messagingSenderId: "254846611990"
// };
// firebase.initializeApp(config);

// const usernameElement = document.getElementById("username");
// const messageElement = document.getElementById("message");
// const button = document.getElementById("submitButton");
// button.addEventListener("click",updateDB);
  
//   //Set database object here
// const db = firebase.database().ref();
  
//   /**
//    * Updates the database with the username and message.
//    */
// function updateDB(event){
//   event.preventDefault();
//   const username        = usernameElement.value;
//   const message         = messageElement.value;
  
//   usernameElement.value = "";
//   messageElement.value  = "";
  
//       console.log(username + " : " + message);
  
//       //Update database here
//       const newMessage = {
//           'uername': username,
//           'message': message
//       }
//       db.push(newMessage);
//   }
  
//   function updateUI(data){
//       const allMessagesDiv = document.getElementById('allMessages');
//       const messageDiv = document.createElement('p');
//       messageDiv.innerText = data.uername + '; ' + data.message;
//       allMessagesDiv.appendChild(messageDiv);
//   }
  
  // Set database "child_added" event listener here
//   db.on('child_added',function(rowData){
//       const data = rowData.val();
//       updateUI(data);
//   }
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();


/**
* Updates the database with the username and message.
*/
function updateDB(event){
  event.preventDefault();
  const username        = usernameElement.value;
  const message         = messageElement.value;

  usernameElement.value = "";
  messageElement.value  = "";

  console.log(username + " : " + message);

  //Update database here
const value = {
  NAME: username,
  MESSAGE: message
}
database.push(value);
}
function updateUI(data){
  const allMessagesDiv = document.getElementById('allMessages');
  const messageDiv = document.createElement('p');
  messageDiv.innerText = data.NAME + " : " + data.MESSAGE;
  allMessagesDiv.appendChild(messageDiv);
}
// Set database "child_added" event listener here
database.on("child_added", function(dataRef){
  const data = dataRef.val();
  updateUI(data);
});