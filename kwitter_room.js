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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+room_name_+"onclick='RedirectToRoomName (this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

user_name=localStorage.getItem("inp");
document.getElementById("user").innerHTML="Hello" + user_name + "!";

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
 purpose:"room name"     
});
localStorage.setItem("room",room_name);
window.location("kwitter_page.html");
}

function RedirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location("kwitter_page.html");
}

function logout()
{
 localStorage.removeItem("inp");
 localStorage.removeItem("room_name");
 window.location="index.html";
}

