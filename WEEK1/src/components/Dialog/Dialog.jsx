import React, { Component } from 'react';
import "./dialog.css"

    //alert提示框
    function Alert(){
      
        function click(){
            document.querySelector(".alert").style.display="none";
        }
        return(<div className="alert">
                    <div>
                        <h4>提示</h4>
                        <p>操作成功</p>
                        <button type="button" onClick={click}>确定</button>
                    </div>
               </div>)
     
    }
    //confirm提示框
    function Confirmo(){
        function click(){
            document.querySelector(".alert").style.display="none";
        }
        return(<div className="alert">
                    <div>
                        <h4>提示</h4>
                        <p>确认执行次操作？</p>
                        <div className="btn">
                            <button type="button" onClick={click}>取消</button>
                            <button type="button" onClick={click}>确定</button>
                        </div>
                    </div>
               </div>)
     
    }
      //Prompt提示框
    function Prompt(){
        function click(){
            document.querySelector(".alert").style.display="none";
        }
        return(<div className="alert">
                    <div>
                        <h4>请输入姓名</h4>
                        <p><input type="text"/></p>
                        <div className="btn">
                            <button type="button" onClick={click}>取消</button>
                            <button type="button" onClick={click}>确定</button>
                        </div>
                    </div>
               </div>)
     
    }

class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props){
        if(props.dialog==this.props.dialog){
            document.querySelector(".alert").style.display="block";
        }
    }

    render() {
        return (
                <div>
                    {this.props.dialog =="alert" ?  <Alert/> : this.props.dialog =="confirm" ? <Confirmo/> : <Prompt/> }
                </div>
               )   
    }
}

export default App;
