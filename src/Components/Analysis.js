import React from 'react';
import './Analysis.css';

function Analysis(props) {

//  const temp = this.props.value;

  return (
    <div className="Analysis">
        <h1>prop.value: {props.value} </h1>
        <div>
            <p>Toggle weekly, monthly, yearly stats </p>
            <p>a Graph of spending + Chart Graph </p>

            <h4> App Name ideas </h4> 
              - Calculate Budgets and Mortgage
              - Pay/Get Some
              - 
            <h4> App Ideas </h4>
              - have a tab on top to switch between Budget and Mortgage; right now looks too ugly 
        </div>
        ---------------------------------------------------------------------------

        <div>
              <h2>Budget Idea</h2> 
        </div>

        <div>
              <h2>Mortgage Idea </h2> 
              // Need to get formula for monthly payment
              https://smartasset.com/mortgage/mortgage-calculator 
        </div>





    </div>
  );
}

export default Analysis;
