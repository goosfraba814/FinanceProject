import React from 'react';
import './Analysis.css';

import { Pie } from 'react-chartjs-2';

class Analysis extends React.Component<> {

  // Get Distinct categories
  // Get total amount for each categories



  constructor(props){
    super(props);

    const testData = this.props.data;
    var expenseCategories = [];
    var expenseAmount = [0, 0, 0, 0, 0];
    var i;
    for (i = 0; i < testData.length; i++){
      if ( expenseCategories.indexOf(testData[i].category) === -1 && testData[i].type === "Expense"){
        expenseCategories.push(testData[i].category);
      }

      switch (testData[i].category) {
        case "Investing":
          expenseAmount[0] += testData[i].amount;
          break;
        case "Utility":
          expenseAmount[1] += testData[i].amount;          
          break;
        case "Recreation":
          expenseAmount[2] += testData[i].amount;          
          break;
        case "Saving":
          expenseAmount[3] += testData[i].amount;          
          break;            
        case "Others":
          expenseAmount[4] += testData[i].amount;          
          break;            
        default:
          break;
      }      
    }
    var expenseTotal = expenseAmount.reduce((a, b) => a + b, 0);

    this.state = {
        testData: this.props.data,
        expennseTotal: expenseTotal,

        labels: expenseCategories,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#2FDE00',
              '#C9DE00',
              '#00A6B4',
              'pink'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            'purple',
            ],
            data: expenseAmount
        }
      ]      
    } 
  } 


  render() {

    return (
      <div className="Analysis">

        <div style={{margin: "20vh 0"}}>
          <h3>Test Here</h3>
          <Pie
            data={this.state}
            options={{
              title:{
                display: true,
                text: 'Expense Analysis (Total: $' + this.state.expennseTotal + ")",
                fontSize: 40
              },
              legend:{
                display: true,
                position: 'right',

              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Analysis;
