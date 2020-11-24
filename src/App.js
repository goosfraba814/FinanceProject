import React, { useState } from 'react';
import './App.css';

import Goal from './Components/Goal';
import Mortgage from './Components/Mortgage';
import Analysis from './Components/Analysis';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

function ReadData(params) {
  
}

function UpdateData(params) {
  
}

function prepareTest() {
  var temp = { 
    id: 1,
    type: "Income",
    category: "Paycheck",
    description: "Bi-weekly paycheck #1",
    amount: 2000,
  };
  var temp2 = { 
    id: 1,
    type: "Income",
    category: "Paycheck",
    description: "Bi-weekly paycheck #2",
    amount: 2000,
  };
  var temp3 = { 
    id: 1,
    type: "Income",
    category: "Paycheck",
    description: "Picked up a quarter",
    amount: 0.25,
  };
  var temp4 = { 
    id: 1,
    type: "Expense",
    category: "Investing",
    description: "401k",
    amount: 300,
  };
  var temp5 = { 
    id: 1,
    type: "Expense",
    category: "Investing",
    description: "Insurance",
    amount: 40,
  };
  var temp6 = { 
    id: 1,
    type: "Expense",
    category: "Utility",
    description: "Internet and stuff",
    amount: 300,
  };
  var temp7 = { 
    id: 1,
    type: "Expense",
    category: "Recreation",
    description: "Bought a fry, drink, burger",
    amount: 200,
  };


  var tempList = [temp, temp2, temp3, temp4, temp5, temp6, temp7];
  return tempList;

}



function App() {

  // TODO: Replace the following with your app's Firebase project configuration
  var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  const userID = 3;

  
  const test = prepareTest();

  return (
    <div className="App">    
      <Goal userID={userID} data={test}/>
      <Mortgage/>
      <Analysis/>
    </div>
  );
}

export default App;
