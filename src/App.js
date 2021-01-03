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
    amount: 1500,
  };
  var temp2 = { 
    id: 1,
    type: "Income",
    category: "Paycheck",
    description: "Bi-weekly paycheck #2",
    amount: 1500,
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
  var temp8 = { 
    id: 1,
    type: "Expense",
    category: "Saving",
    description: "went into my saving",
    amount: 200,
  };
  var temp9 = { 
    id: 1,
    type: "Expense",
    category: "Others",
    description: "went into my saving",
    amount: 400,
  };
  var tempList = [temp, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9];
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

  // for switching to budget and morgage
  const [display, setDisplay] = useState("Budget");

  const divStyle = {
            width: (display === "Budget") ? "50%" : "0%",
            color: "green",

  };
  const divStyle2 = {
            width: (display === "Mortgage") ? "50%" : "0%",
            height: (display === "Mortgage") ? "100%" : "0%",
            color: "yellow",
  };


  // get testData to show (Future: Update from data from Firebase)
  //const testdata = (display === "Budget") ? this.getBudgetData() : this.getMortgageData();
  const test = prepareTest();

  return (
    <div className="App">

      <div className="Selection" >
        <button>Menu</button>
        <button style={{width: "600px"}} onClick={() => setDisplay("Budget")}>Budget</button>
        <button style={{width: "600px"}} onClick={() => setDisplay("Mortgage")}>Mortgage</button>
      </div>


      <div className="App-parts">
        {/*  
        {(display === "Budget") ? 
          <Goal style={{ display: "flex", width: "50%"}} userID={userID} data={test} />      
          :
          <Mortgage style={{ display: "flex", width: "50%"}} userID={userID} data={test} />      
        }
        */}
        <div style={divStyle}>      
          <Goal userID={userID} data={test} />  
        </div>

        <div style={divStyle2}>      
          <Mortgage userID={userID} data={test} />      
        </div>

        {/*  */}
        <Analysis style={{ width: "50%"}} value={display} data={test} display={display} />

      </div>
    
    </div>
  );
}

export default App;
