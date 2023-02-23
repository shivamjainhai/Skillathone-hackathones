 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDqqcBK0wWxTDsIvKZna2beul8EDzoQc_c",
   authDomain: "hackathones-b903c.firebaseapp.com",
   projectId: "hackathones-b903c",
   storageBucket: "hackathones-b903c.appspot.com",
   messagingSenderId: "261040973113",
   appId: "1:261040973113:web:2d740bbeee1465c14674e8",
   measurementId: "G-HJ4PLB208N"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 const express = require("express");
const expapp = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.get('/', (req, res) => {

    res.send('Hello World!');
});
