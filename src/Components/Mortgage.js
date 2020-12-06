import React from 'react';
import './Mortgage.css';
import TextField from '@material-ui/core/TextField';

import houselogo from '../images/house-image.png'; 



class Mortgage extends React.Component<> {

  constructor(props){
    super(props);
    
    this.state = {
      data: 0,
      homeValue: 300000,
      dpPER: 20,
      downAmount: 60000,
      loanAmount: 300000 - 60000,
      interestRate: 3,
      loanTerm: 30,
      tax: 5,
      insurance: 100,
      monthlyPayment: 0,
    };    

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(prevProps){
    // fill up 'Data' state from Firebase
    const principal = this.state.homeValue - this.state.downAmount;
    const rate = this.state.interestRate / 12 / 100;  
    const months = this.state.loanTerm * 12;
    const x = (rate * (( Math.pow(1 + rate,months))));
    const y = (Math.pow(1 + rate, months) - 1); 
    const mthlyAmount =  (principal * x / y).toFixed(2);
    
    this.setState({monthlyPayment: mthlyAmount});
  }

  handleChange(e){
    // TODO: updating value without using if/switch
    this.setState({value: e.target.value});
  }

  render(){
    return (
      <div className="mortgage">        

          <div className="mortgage-calculator">
            <h3 style={{margin: "0 auto", }}>Mortgage Calculator</h3>

            <div className="mortgage-calculator-section">
              <h2>Home Price/Value</h2>
              <TextField size="small" label="Home Price" value={this.state.homeValue} onChange={this.state.handleChange}/>
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Down Payment ($)</h2>
              <TextField size="small" label="Description" value={this.state.dpAmount} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Down Payment (%)</h2>
              <TextField size="small" label="Description" value={this.state.dpPER} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Interest Rate</h2>
              <TextField size="small" label="Description" value={this.state.interestRate} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Loan Term</h2>
              <TextField size="small" label="Description" value={this.state.loanTerm} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Tax</h2>
              <TextField size="small" label="Tax" value={this.state.tax} />
            </div> 
            
            <div className="mortgage-calculator-section">
              <h2>Insurance</h2>
              <TextField size="small" label="Insurance" value={this.state.insurance} />
            </div> 

            <div className="mortgage-calculator-section">
              <h4> => Monthly Payment: $</h4> 
              <TextField size="small" label="Description" value={this.state.monthlyPayment} />
            </div> 
          </div>



          <div className="mortgage-image-container">
            <img src={houselogo} className="image-file" alt="house logo" />
          </div>
      </div>
    );
}
}

export default Mortgage;
