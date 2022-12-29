function login()
{
var name=document.getElementById("inp").value;
localStorage.setItem("inp",name);    
window.location="kwitter_room.html";
}
