// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA-_mL6p2pZwj6sdyCE2t-yJO4wLqEtT4c",
      authDomain: "kwitter-ed6e3.firebaseapp.com",
      projectId: "kwitter-ed6e3",
      storageBucket: "kwitter-ed6e3.appspot.com",
      messagingSenderId: "618876624983",
      appId: "1:618876624983:web:9380de9898a27a71a0c312"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name" 
      });
      localStorage.setItem("Room Name", room_name);
      window.location = "kwitter_room.js";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names: " + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "kwitter_room.html"
}