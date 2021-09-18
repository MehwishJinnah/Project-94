const firebaseConfig = {
    apiKey: "AIzaSyDVRxBIqi4qptE5otOs7b5ALi2gnkuAv_s",
    authDomain: "classtest-40e9f.firebaseapp.com",
    projectId: "classtest-40e9f",
    storageBucket: "classtest-40e9f.appspot.com",
    messagingSenderId: "286040615725",
    appId: "1:286040615725:web:46e5232f379ad7282801a4",
    measurementId: "G-EWNEKCV7XP"
  };
  
  const app = initializeApp (firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
    (
        {
            purpose : "adding user"
        }
    );
}