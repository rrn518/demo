import  React, { Component } from 'react';
import './ChangeApp.css';

class ChangeApp extends Component {
    
    state = {
        change: 0,
        fiftypound: 0,
        twentypound: 0,
        tenpound: 0,
        fivepound: 0,
        twopound: 0,
        onepound: 0,
        fiftypence: 0,
        twentypence: 0,
        tenpence: 0,
        fivepence: 0,
        twopence: 0,
        onepence: 0
    }

    changeBlur = (event) => {

        let fiftypound  = 0;
        let twentypound = 0;
        let tenpound    = 0;
        let fivepound   = 0;
        let twopound    = 0;
        let onepound    = 0;
        let fiftypence  = 0;
        let twentypence = 0;
        let tenpence    = 0;
        let fivepence   = 0;
        let twopence    = 0;
        let onepence    = 0;
       
        let price = document.getElementById("ProductPrice").value;
        let paid  = document.getElementById("Paid").value;

        let diff = parseFloat(paid - price).toFixed(2);
        this.setState({change: parseFloat(paid - price).toFixed(2)});
       
        // work out the change denominations starting with £50 downwards...
        if(diff > 50) {
            fiftypound = 1;
            diff -= (50);
        }

        if(diff >= 20) {

            twentypound = Math.floor(diff / 20);
            diff -= (twentypound * 20);
        }


        if(diff >= 10) {

            tenpound = Math.floor(diff / 10);
            diff -= (tenpound * 10);
        }

        if(diff >= 5) {

            fivepound = Math.floor(diff / 5);
            diff -= (fivepound * 5);
        }

        if(diff >= 2) {

            twopound = Math.floor(diff / 2);
            diff -= (twopound * 2);
        }

        if(diff >= 1) {

            onepound = 1;
            diff -= 1;
        }

        if(diff >= 0.50) {

            fiftypence = 1;
            diff -= 0.5;
        }

        if(diff >= 0.20) {

            twentypence = Math.floor(diff / 0.2);
            diff -= (twentypence * 0.2);
        }

        if(parseFloat(diff).toFixed(2) >= 0.10) {

            tenpence = 1;
            diff -= 0.1;
        }

        if(parseFloat(diff).toFixed(2) >= 0.05) {

            fivepence = 1;
            diff -= 0.05;
        }

        if(parseFloat(diff).toFixed(2) >= 0.02) {

            twopence = Math.floor(parseFloat(diff).toFixed(2) / 0.02);
            diff -= (twopence * 0.02);
        }

        if(parseFloat(diff).toFixed(2) >= 0.01) {

            onepence = 1;
            diff -= 0.1;
        }

        this.setState({fiftypound: fiftypound});
        this.setState({twentypound: twentypound});
        this.setState({tenpound: tenpound});
        this.setState({fivepound: fivepound});
        this.setState({twopound: twopound});
        this.setState({onepound: onepound});
        this.setState({fiftypence: fiftypence});
        this.setState({twentypence: twentypence});
        this.setState({tenpence: tenpence});
        this.setState({fivepence: fivepence});
        this.setState({twopence: twopence});
        this.setState({onepence: onepence});
    }

    // display the app.

    setupChangeApp = () => {
        
        return (
            <div>
                <h2>ChangeApp</h2>
                <h3>An app to calculate cash change denomination. Please enter numeric values only...</h3>
                <p>Purchase Price:</p>
                <p>£ <input id= 'ProductPrice' type='text' defaultValue='0' onBlur={this.changeBlur} /></p> 
                <p>Amount Paid:</p>
                <p>£ <input id= 'Paid' type='text' defaultValue='0' onBlur={this.changeBlur} /></p>
            </div>
        );
    }

    setupChangeVal = () => {

        return (
            <div>
                <h2>Your change is £{parseFloat(this.state.change).toFixed(2)}:</h2>
                {
                    this.state.fiftypound > 0 &&  <p>1 x £50</p>
                }
                {
                    this.state.twentypound > 0 &&  <p>{this.state.twentypound} x £20</p>
                } 
                {
                    this.state.tenpound > 0 &&  <p>{this.state.tenpound} x £10</p>
                }             
                {
                    this.state.fivepound > 0 &&  <p>{this.state.fivepound} x £5</p>
                }                
                {
                    this.state.twopound > 0 &&  <p>{this.state.twopound} x £2</p>
                }
                {
                    this.state.onepound > 0 &&  <p>{this.state.onepound} x £1</p>
                }
                {
                    this.state.fiftypence > 0 &&  <p>1 x 50p</p>
                }
                {
                    this.state.twentypence > 0 &&  <p>{this.state.twentypence} x 20p</p>
                }
                {
                    this.state.tenpence > 0 &&  <p>1 x 10p</p>
                }
                {
                    this.state.fivepence > 0 &&  <p>1 x 5p</p>
                }
                {
                    this.state.twopence > 0 &&  <p>{this.state.twopence} x 2p</p>
                }
                {
                    this.state.onepence > 0 &&  <p>1 x 1p</p>
                }
            </div>
        );
    }

   
    render () {

        let changeapp  = this.setupChangeApp();
        let changeval  = this.setupChangeVal();

        return (
            <div>{changeapp}
                 <br />
                 {changeval}       
            </div>
        );
  }
}

export default ChangeApp;