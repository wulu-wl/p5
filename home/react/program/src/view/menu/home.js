import React from 'react'
import '../../assets/css/home.css'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"home页面",
            arr:[{
                a:"1",title:"home-a"
            },{
                a:"2",title:"home-b"
            },{
                a:"3",title:"home-c"
            }],
            num:1
        }
    }
    // 第一种绑定事件的写法   不传参
    // <button onClick={this.jia}>+1</button>
    jia=()=>{
        // console.log(this.state.num)
        this.setState({
            num:this.state.num+1
        },function(){
            console.log(this.state.num)
        })
    }
    // 第二种绑定事件的写法  传参
    // <button onClick={()=>{this.jiajia(2)}}>++1</button>

    jiajia(i){
        console.log(i)
        this.setState({
            num:this.state.num+i
        })
    }
    //第三种绑定事件的写法
    // <button onClick={this.jiajiajia.bind(this)}> +++1</button>
    jiajiajia(){
        // console.log(this.state.num)
        this.setState({
            num:this.state.num+1
        })
    }
    render(){
        return (
            <div>
                {this.state.msg}
                <br/>
                {this.state.num}
                <ul>
                    {this.state.arr.map((item,index)=>{
                        return (<li key={item.a}>{item.title}</li>)
                    })}
                </ul>
                <button onClick={this.jia}>+1</button>
                <hr/>
                <button onClick={()=>{this.jiajia(2)}}>++1</button>
                <hr/>
               <button onClick={this.jiajiajia.bind(this)}> +++1</button>
            </div>
        )
    }

}
// class Home extends React.Component{
//     render(){
//         return (<div>
//             我是外部组件home
//         </div>)
//     }
// }
export default Home