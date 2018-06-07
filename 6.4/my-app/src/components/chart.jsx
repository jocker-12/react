import React from 'react';
import List from './list.jsx';
export default class Chart extends React.Component{
    constructor(){
        super();
        this.state={
            pricse:0,
            list:[
                    {
                        name:'猪肉',
                        page:18,
                        num:1,
                        isChecked:false
                    },{
                        name:'牛肉',
                        page:20,
                        num:1,
                        isChecked:false
                    },{
                        name:'羊肉',
                        page:22,
                        num:1,
                        isChecked:false
                    }
            ],
            isCheckedAll:true
        }
    }
    componentDidMount(){
       
    }
    changeSt(e){
        let list = this.state.list;
        list.forEach((item,i)=>{
            item.isChecked=e.target.checked;
        });
        this.setState({
            list:list,
            isCheckedAll:e.target.checked
        }, () => {
            this.getSum();
        })
    }
    setChecked(ind,type){
        let list = this.state.list;
        let flag=true;
        list[ind].isChecked=type;
        list.forEach((item)=>{
            if(!item.isChecked){
                flag=false;
                return;
            }
        })
        this.setState({
            list:list,
            isCheckedAll:flag``
        }, () => {
            this.getSum();
        });
    }
    getPre(ind,type){
        let list = this.state.list;
        if(type=='+'){
            list[ind].num++;
        }else{
            if(list[ind].num<=1){
                return;
            }
            list[ind].num--;
        }
        this.setState({
            list:list
        },()=>{
            this.getSum();
        });
    }
    getSum(){
        let list=this.state.list;
        let price=0;
        list.forEach((item)=>{
            if(item.isChecked){
                price+=item.num*item.page;
            }
        });
        this.setState({
            list:list,
            pricse:price
        })
    }
    render(){
        return <div className='wrap'>
            <List list={this.state.list} isCheckedAll={this.state.isCheckedAll} getPre={this.getPre.bind(this)}
            setChecked={this.setChecked.bind(this)}/>
            <div>
				<input type="checkbox" className='AllBtn' checked={this.state.isCheckedAll} onChange={(e)=>this.changeSt(e)}/>全选
				<p>总价<span>{this.state.pricse}</span></p>
			</div>
        </div>
    }
}