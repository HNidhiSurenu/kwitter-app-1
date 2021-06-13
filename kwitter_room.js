
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0ycMsUWdFa4KvEwXGQXDjYHaBGhR_Kww",
      authDomain: "kwitter-37aab.firebaseapp.com",
      databaseURL: "https://kwitter-37aab-default-rtdb.firebaseio.com",
      projectId: "kwitter-37aab",
      storageBucket: "kwitter-37aab.appspot.com",
      messagingSenderId: "499547982542",
      appId: "1:499547982542:web:76b4a19e0cc52f14ba9e9f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
