//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCqkDO8d7t8UsBSHXYdvZUMPBp1HeE3ZFI",
      authDomain: "cl94-f06da.firebaseapp.com",
      databaseURL: "https://cl94-f06da-default-rtdb.firebaseio.com",
      projectId: "cl94-f06da",
      storageBucket: "cl94-f06da.appspot.com",
      messagingSenderId: "1083271370485",
      appId: "1:1083271370485:web:1ec2200036823b2f8d57bc"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
var username=localStorage.getItem("inp");
var room_name=localStorage.getItem("room");
function send()
{
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
 name:username,
 message:msg,
 like:0     
 });

 document.getElementById("msg").value="";
}