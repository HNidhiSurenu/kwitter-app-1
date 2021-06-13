
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAKc__xrtM-RiTNh_WeKI3g_BF-emgUqto",
      authDomain: "lets-chat-d2ba0.firebaseapp.com",
      projectId: "lets-chat-d2ba0",
      storageBucket: "lets-chat-d2ba0.appspot.com",
      messagingSenderId: "617648217649",
      appId: "1:617648217649:web:be29ceb30d016b85a9bf10"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
