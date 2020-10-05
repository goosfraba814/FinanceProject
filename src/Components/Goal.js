import React from 'react';
import './Goal.css';



class Goal extends React.Component<> {

  constructor(props){
    super(props);

    this.state = {
        data: [],
        income: [],
        expense: [],

        totalIncome: 0,
        totalExpense: 0,
        netTotal: 0,
    };

    this.addIncome = this.addIncome.bind(this);
    this.addExpense = this.addExpense.bind(this);

  }  

  componentDidMount(prevProps){
//    if (this.props.userID !== prevProps.userID) {
  //    this.fetchData(this.props.userID);
   // }
    var temp = { 
        id: 1,
        type: "Expense",
        category: "Free",
        description: "Bought a burger",
        amount: 500,
    };
    this.setState(prevState => ({
        data:  [...prevState.data, temp ],          
    })); // wrapper function (work)
  }

  addIncome(){
    var temp = { 
        id: 1,
        type: "Income",
        category: "Job",
        description: "Work",
        amount: 2000,
    };

    this.setState(prevState => ({
        data:  [...prevState.data, temp ],
        totalIncome: this.state.totalIncome + temp.amount, 
        netTotal: this.state.netTotal + temp.amount,      
    })); // wrapper function (work)
  }

  addExpense(){
        var temp = { 
        id: 1,
        type: "Expense",
        category: "Free",
        description: "Spending Money",
        amount: 50,
    };
    
    this.setState(prevState => ({
        data:  [...prevState.data, temp ],       
        netTotal: this.state.netTotal + temp.amount,      
   
    })); // wrapper function (work)
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
              {
                <div>
                  <ul>
                    {this.state.data.map((income, index) =>
                      <li key={income.index}>
                        <p>{income.id} | {index}</p>
                        <p>{income.type}</p>
                        <p>{income.description}</p>
                        <p>{income.amount}</p>

                      </li>
                    )}
                  </ul>
                </div>              
              }

              <h3>Total Income: {this.state.totalIncome}</h3>
            </div>

          </div>
  
          <div className="goal-item-wrapper"> 
            <h3>Expense</h3>
            <div className="goal-item">
              
              <h4>Investing</h4>
              <button type="button" onClick={this.addIncome}> + </button>
              <p>401k, Insurance, IRA </p> 

              <h4>Utility</h4>
                <button type="button" onClick={this.addIncome}> + </button>
                Allow 'Must' (eg. rent) and 'Options'
                - Subscriptions
                - Rent
                -

              <h4>Fun</h4>
                <button type="button" onClick={this.addIncome}> + </button>


            </div>
              <h3>Total Expense: {this.state.totalExpense}</h3>
          </div>

          <div>

          <h3>Net Total: {this.state.netTotal}</h3>

          </div>

      </div>
    );
  }
}

export default Goal;
