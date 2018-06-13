import React, { Component } from 'react';
import "./app.css";
import Dialog from "./Dialog/Dialog.jsx";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            type:null
        }
    }
    dialogChange(e,type){
       this.setState({
        type
       })
    }
    render() {
        return (
                <div className="all">
                    <ul>
                        <li   onClick={(e)=>this.dialogChange(e,"alert")}>打开alert提示框</li>
                        <li   onClick={(e)=>this.dialogChange(e,"confirm")}>打开confirm提示框</li>
                        <li   onClick={(e)=>this.dialogChange(e,"prompt")}>打开prompt提示框</li>
                    </ul>
                    <Dialog dialog={this.state.type}/>
                </div>
              )   
   }
}

export default App;
