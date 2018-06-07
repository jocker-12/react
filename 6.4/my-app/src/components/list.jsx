import React from 'react';
export default class List extends React.Component{
    constructor(){
        super();
    };
    componentDidMount(){
      
    }
    CLick(e){
       
    }
    render(){
        return <div className='list'>{
            this.props.list.map((item,ind)=>{
               return <div key={ind} className='listBox'>
                    <input className='litBtn' type="checkbox"
                     checked={this.props.isCheckedAll||item.isChecked}
                     onChange={(e)=>{this.props.setChecked(ind,e.target.checked)}}/>选择
                    <p>{item.name}</p>
                    <p>{item.page}</p>
                   <p><span>购买</span><span><b onClick={(e) => { this.props.getPre(ind, '+') }}>+</b>
                   <em>{item.num}</em><b onClick={(e) => { this.props.getPre(ind, '-') }}>-</b></span></p>
                </div>
            })
        }</div>
    }
}