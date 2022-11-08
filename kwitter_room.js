var firebaseConfig ={
 apiKey: "AIzaSyBamO-a_eLTlm9zR1gsJCi8fkouVZdr7S0",
 authDomain: "kwitter-3a851.firebaseapp.com",
 projectId: "kwitter-3a851",
 storageBucket: "kwitter-3a851.appspot.com",
 messagingSenderId: "561030448721",
 appId: "1:561030448721:web:23760a3d630de9af2c9a70",
 measurementId: "G-7K4FCZ6ZGN"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
