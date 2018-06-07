import React from 'react';
import Output from './output';
export default class output extends React.Component {
    constructor(props) {
        super(props),
            this.state={
                list: [],
                name: '',
                time: '',
                content: ''
                }
        }
        changeText(e){
            this.setState({
                content:e.target.value.trim()
            })
        }
        setName(e){
            this.setState({
                name:e.target.value
            })
        }
        setEnd(e){
            if(!this.state.content){
                alert('请输入内容');
                return false;
            }
            let obj={};
            obj.name=this.state.name;
            obj.time=+new Date();
            obj.content=this.state.content;
            let list = this.state.list;
            list.push(obj);
            this.setState({
                list:list
            })
            console.log(this.state.list)
        }
    render(){
        return <div className='wrap'>
                <div className='header'>
                <h1>单机高级对话框</h1>
                <Output list={this.state.list}/></div>
                <div className='footer'>
                    <div className='text'>
                        <textarea cols="" rows="" value={this.state.content} placeholder='请输入内容...' onChange={(e)=>{this.changeText(e)}}></textarea>
                    </div>
                    <div className="btn">
                        <div className="name"><input type="text" placeholder='请输入名字' onChange={(e)=>{this.setName(e)}}/></div>
                        <button onClick={(e)=>{this.setEnd(e)}}>发送</button>
                    </div>
                </div>
        </div>
    }
}