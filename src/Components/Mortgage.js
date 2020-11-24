import React from 'react';
import './Mortgage.css';
import TextField from '@material-ui/core/TextField';

import houselogo from '../images/house-image.png'; 



class Mortgage extends React.Component<> {

  constructor(props){
    super(props);
    
    this.state = {
      data: 0,
      homeValue: 350000,
      dpPER: 20,
      downAmount: (350000 / 20),
      loanAmount: 350000 - (350000 / 20),
      interestRate: 3.5,
      loanTerm: 30,

      monthlyPayment: 0,
    };    

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(prevProps){
    // fill up 'Data' state from Firebase
    // Then fill up Incomes and Expenses state using that
    
  }

  handleChange(e){
    // TODO: updating value without using if/switch
    this.setState({value: e.target.value});
  }

  render(){
    return (
      <div className="mortgage">        

          <div className="mortgage-calculator">
            <h3 style={{margin: 0, }}>Mortgage Calculator</h3>

            <div className="mortgage-calculator-section">
              <h2>Home Price/Value</h2>
              <TextField size="small" label="Home Price" defaultValue="300000" value={this.state.homeValue} onChange={this.state.handleChange}/>
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Down Payment ($)</h2>
              <TextField size="small" label="Description" defaultValue="60000" value={this.state.dpAmount} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Down Payment (%)</h2>
              <TextField size="small" label="Description" defaultValue="20" value={this.state.dpPER} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Interest Rate</h2>
              <TextField size="small" label="Description" defaultValue="3.5" value={this.state.interestRate} />
            </div> 

            <div className="mortgage-calculator-section">
              <h2>Loan Term</h2>
              <TextField size="small" label="Description" defaultValue="30" value={this.state.loanTerm} />
            </div> 

            <div className="mortgage-calculator-section">
              <h4> => Monthly Payment: $</h4> 
              <TextField size="small" label="Description" value={this.state.monthlyPayment} />
            </div> 
          </div>

          <div className="mortgage-resources">
            <h3>Some important information</h3>
              => Taxes (Interest, Homeowner's Insurance, Property Tax, HOA fees
          </div> 

          <div className="mortgage-image-container">
            <img src={houselogo} className="image-file" alt="house logo" />
          </div>
      </div>
    );
}
}

export default Mortgage;
