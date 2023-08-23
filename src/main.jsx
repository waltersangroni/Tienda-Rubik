import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBH1pMC3fHp0f-bpU0ioxqD834f8RU-hA",
  authDomain: "tienda-rubik.firebaseapp.com",
  projectId: "tienda-rubik",
  storageBucket: "tienda-rubik.appspot.com",
  messagingSenderId: "444816991750",
  appId: "1:444816991750:web:355a0468d8d0152b62c587",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
