import React from 'react';
import './Goal.css';
import TextField from '@material-ui/core/TextField';

class Goal extends React.Component<> {

  constructor(props){
    super(props);

    const data = this.props.data;
    var tempIncome = 0;
    var tempExpense = 0;
    data.forEach(element => {
      if (element.type === "Income"){
        tempIncome += element.amount;
      }
      else if (element.type === "Expense"){
        tempExpense += element.amount;
      }
    });

    this.state = {
        userID: this.props.userID,
        data: this.props.data, ///// testing test 
  
        totalIncome: tempIncome,
        totalExpense: tempExpense,
        netTotal: tempIncome - tempExpense,

        test: "NA",
        testValue: "NA",
    };

    this.addIncome = this.addIncome.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }  



  componentDidMount(prevProps){
    // fill up 'Data' state from Firebase
    // Then fill up Incomes and Expenses state using that
    // split data for incomes and expenses
  }

  getTotalIncome(obj){
    var temp = 0;    
    const data = obj;
    data.forEach(element => {
      if (element.type === "Income"){
        temp += element.amount === "" ?  0 : parseInt(element.amount);
      }
    });
    return temp;
  }

  getTotalExpense(obj){
    var temp = 0;    
    const data = obj;
    data.forEach(element => {
      if (element.type === "Expense"){
        temp += element.amount === "" ?  0 : parseInt(element.amount);
      }
    });
    return temp;
  }

  getIncomeCounts(){
    const data = this.state.data;
    var temp, i;
    for(i = 0; i < data.length; i++) {
      temp = temp + ( data.type === "Income" ? 1 : 0);
    }
    return temp;
  }

  getExpenseCounts(){
    const data = this.state.data;
    var temp, i;
    for(i = 0; i < data.length; i++) {
      temp = temp + ( data.type === "Expense" ? 1 : 0);
    }
    return temp;
  }

  addIncome(){
    var temp = { 
        id: 1,
        type: "Income",
        category: "Paycheck",
        description: "Work",
        amount: 1500,
    };

    this.setState(prevState => ({
        data:  [...prevState.data, temp ], // only this will be Firebase
        totalIncome: this.state.totalIncome + temp.amount, 
        netTotal: this.state.netTotal + temp.amount, 
    })); // wrapper function (work)
  }

  addExpense(e){
    const newItemCategory= e.target.value; // Category
    var newItem = { 
        id: 1,
        type: "Expense",
        category: e.target.value,
        description: "401k",
        amount: 200,
    };
    
    switch(newItemCategory) {
      case 'Investing':
        newItem.description = "401k";
        break;
      case 'Utility':
        newItem.description = "Rent";
        break;
      case 'Recreation':
        newItem.description = "Fun Stuffs";
        break;
      case 'Others':
        newItem.description = "Anything in generals";
        break;
      default:
        console.log("No category provided");
        break;
    }

    this.setState(prevState => ({
        data:  [...prevState.data, newItem ],       
        totalExpense: this.state.totalExpense + newItem.amount, 
        netTotal: this.state.netTotal - newItem.amount,      
   
    })); // wrapper function (work)
  }

  

  handleChange(e, index, str) {   
    var currentData = this.state.data;

    const inputData = e.target.value;   

    var temp = 0;

    if(e.target.id == "Category"){
      currentData[index].category = inputData;
      this.setState({data: currentData });
    }
    else if (e.target.id === "Amount"){
      currentData[index].amount = inputData;
      
      // income or expense total
      if (currentData[index].type === "Expense"){
        var temp = this.getTotalExpense(currentData);
        this.setState({data: currentData, totalExpense: temp, netTotal: (this.state.totalIncome - temp)  });    
      }     
      else if(currentData[index].type === "Income"){
        var temp = this.getTotalIncome(currentData);
        this.setState({data: currentData, totalIncome: temp, netTotal: (this.state.totalExpense - temp) });    
      }

    }


    this.setState({data: currentData, });

  }


  handleDelete(e, index) {
    var currentData = this.state.data;
    currentData.splice(index, 1);
    
    // Need to update the income and expense
    var tempIncome = 0;
    var tempExpense = 0;
    currentData.forEach(element => {
      if (element.type === "Income"){
        tempIncome += parseInt(element.amount);
      }
      else if (element.type === "Expense"){
        tempExpense += parseInt(element.amount);
      }
    });

    this.setState({data: currentData, totalIncome: tempIncome, totalExpense: tempExpense, netTotal: tempIncome - tempExpense});
  }

  onSave(e, arr) {
    // ?? call a function in App.js to update the data to Firebase. (or do it here?)
    // ?? or should i do it in Goals copmonent? If top refreshes then child component does too?

    // get the arr minus the current 
    var tempArr = arr;


  }

  render(){
    // 1. Upload/Delete data vs Manupulating data in the component

    // investing utility recreation ohters
    const incomeHeight = (100 / 1) + "%" ; 
    const expenseHeight = (100 / 4) + "%" ; 

    return (
      <div className="goal">
          
   

          { /* Income */}
          <div className="goal-item-wrapper" style={{height: "30vh"}}>
            <h3 style={{margin: "0 auto", }}>Income</h3>

            <div className="goal-items" style={{ height: "100%"}}>
              <div className="goal-item-header" >
                <h3 style={{margin: 0}}>Paycheck</h3>
                <button style={{height: "100%", margin: "auto 1em" }} type="button" onClick={this.addIncome}> New </button>
              </div>

              {
                  this.state.data.map((data, index) =>

                    <div>
                        { data.type === "Income" && data.category === "Paycheck" ? 
                        <div className="goal-item">
                          <TextField size="small" label="Description" id="Category" value={data.description} onChange={(e) => this.handleChange(e, index)} />
                          <TextField size="small" label="Amount"  id="Amount"value={data.amount} onChange={(e) => this.handleChange(e, index)} />
                          <button onClick={(e) => this.handleDelete(e, index)} > Remove </button>
                        </div>
                        :
                        <div></div>            
                        }
                    </div>
                  )
              }
 
            </div>

            <h3 style={{margin: "0.5em"}}>Total Income: {this.state.totalIncome}</h3>          
          </div>

          {/********************************************************************************************/}

          <div className="goal-item-wrapper" style={{height: "60vh"}}>
            <h3 style={{height: "5%", margin: "0 auto"}}>Expense</h3>
            
            <div style={{height: "90%", margin: 0, backgroundColor: "yellow", display: "flex", flexDirection: "column",     }}>

              <div className="goal-items" style={{ height: expenseHeight }} >          
                <div className="goal-item-header" >
                  <h3 style={{margin: 0, }}>Investing</h3>
                  <button style={{height: "100%", margin: "auto 1em" }} type="button" value="Investing" onClick={this.addExpense}> + </button>
                </div>
              
                {this.state.data.map((data, index) =>
                  <div> 
                    { data.type === "Expense" && data.category === "Investing" ? 
                    <div className="goal-item">
                      <TextField defaultValue={data.description} id="Category" value={data.description} onChange={(e) => this.handleChange(e, index)} />
                      <TextField defaultValue={data.amount} id="Amount" value={data.Amount} onChange={(e) => this.handleChange(e, index)} />
                      <button onClick={(e) => this.handleDelete(e, index)} > Remove </button>
                    </div>
                    :
                    <div></div>                
                    }
                  </div>
                  
                )}
              </div>

              <div className="goal-items" style={{ height: expenseHeight }}>
                <div className="goal-item-header" >
                  <h3 style={{margin: 0, }}>Utility</h3>
                  <button style={{height: "100%", margin: "auto 1em" }} type="button" value="Utility" onClick={this.addExpense}> + </button>
                </div>

                {this.state.data.map((data, index) =>
                  <div> 
                    { data.type === "Expense" && data.category === "Utility" ? 
                    <div className="goal-item">
                      <TextField defaultValue={data.description} id="Category" value={data.description} onChange={(e) => this.handleChange(e, index)} />
                      <TextField defaultValue={data.amount} id="Amount" value={data.Amount} onChange={(e) => this.handleChange(e, index)} />
                      <button onClick={(e) => this.handleDelete(e, index)} > Remove </button>
                    </div>
                    :
                    <div></div>                
                    }
                  </div>
                
                )}
              </div>

              <div className="goal-items" style={{ height: expenseHeight }}>
                <div className="goal-item-header" >
                  <h3 style={{margin: 0, }}>Recreation</h3>
                  <button style={{height: "100%", margin: "auto 1em" }} type="button" value="Recreation" onClick={this.addExpense}> + </button>
                </div>

                {this.state.data.map((data, index) =>
                  
                  <div> 
                    { data.type === "Expense" && data.category === "Recreation" ? 
                    <div className="goal-item">
                      <TextField defaultValue={data.description} id="Category" value={data.description} onChange={(e) => this.handleChange(e, index)} />
                      <TextField defaultValue={data.amount} id="Amount" value={data.Amount} onChange={(e) => this.handleChange(e, index)} />
                      <button onClick={(e) => this.handleDelete(e, index)} > Remove </button>
                    </div>
                    :
                    <div></div>                
                    }
                  </div>

                )}
              </div>


              <div className="goal-items" style={{ height: expenseHeight }}>
                <div className="goal-item-header" >
                  <h3 style={{margin: 0, }}>Others</h3>
                  <button style={{height: "100%", margin: "auto 1em" }} type="button" value="Others" onClick={this.addExpense}> + </button>
                </div>

                {this.state.data.map((data, index) =>
                  
                  <div> 
                    { data.type === "Expense" && data.category === "Others" ? 
                    <div className="goal-item">
                      <TextField defaultValue={data.description} id="Category" value={data.description} onChange={(e) => this.handleChange(e, index)} />
                      <TextField defaultValue={data.amount} id="Amount" value={data.Amount} onChange={(e) => this.handleChange(e, index)} />
                      <button onClick={(e) => this.handleDelete(e, index)} > Remove </button>
                    </div>
                    :
                    <div></div>                
                    }
                  </div>

                )}
              </div>

            </div>
                

            <h3 style ={{ height: "5%", margin:  "0", backgroundColor: "white"}}>Total Expense: {this.state.totalExpense}</h3>
          </div>
      

          <div className="goal-total" style={{height: "10vh"}}>
            <h3 style={{margin: "0" }}>Remaining; make number red if negative</h3>
            <h4 style={{margin: "auto", fontSize: "2em" }}> ${this.state.totalIncome} - ${this.state.totalExpense} ===>  ${this.state.netTotal}</h4>

          </div>


      </div>
    );
  }
}

export default Goal;
