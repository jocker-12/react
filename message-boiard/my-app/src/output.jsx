import React from 'react';
export default class output extends React.Component {
    constructor(props) {
        super(props)
    }
    setTimes(time){
        let date=new Date(time);
        let year=date.getFullYear();
        let month=date.getMonth();
        let day=date.getDay();
        let hour=date.getHours();
        let minute=date.getMinutes();
        let set=date.getSeconds();
        return `${year}-${month+1}-${day}-${hour}:${minute}:${set}`
    }
    render(){
        return <div className='out'>
            <ul>
               {
                 this.props.list.map((item,ind)=>{
                    return <li key={ind}>
                            <p className='top'><span>{item.name}</span><span>{this.setTimes(item.time)}</span></p>
                            <p className='bottom'>{item.content}</p>
                        </li>
                })
                }
            </ul>
        </div>
    }
}