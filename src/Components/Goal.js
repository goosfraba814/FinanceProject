import React from 'react';
import './Goal.css';

class Goal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    income: {
        id: '',
        category: '',
        description: '',
        amount: 0,
      },
      expense:"",
      
    };
  }  

  addIncome(e){
      this.setState(prevState => ({
          income:  [...prevState.income, "ha2" ],
          
       })); // wrapper function (work)
  }

  addExpense(){
      this.setState(prevState => ({
          expense:  [...prevState.expense, "ha2" ],
          
       })); 
  }

  handleChange(e, index){

  }
    render(){
    return (
      <div className="goal">
          
          - User provides below data
          <div className="goal-item-wrapper"> 
            <h3>Income</h3>
            <div className="goal-item">
              <button type="button" onClick={this.addIncome}> + </button>


                {this.state.income.map((value, index) => (
                      <div>
                        {value}:{index} <input type="text" /> 
                      </div>
                ))}

              {/* 
                {incomes.map((value, index) => (
                      <div>
                        {value}:{index} <input type="text" /> 
                      </div>
                ))}
              */}

            </div>

            <p>Total: $</p>

          </div>
  
          <div className="goal-item-wrapper"> 
            <h3>Expense</h3>
            <div className="goal-item">
              <p>Investing</p>
              <p>401k, Insurance, IRA </p> 

              <p>Utility</p>
                Allow 'Must' (eg. rent) and 'Options'
                - Subscriptions
                - Rent
                -

              <p>Fun</p>
            </div>
          </div>

          <div>
            Totals
          </div>

      </div>
    );
  }
}

export default Goal;
