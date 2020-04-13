import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';


//redux
//1 载入redux
import {createStore} from 'redux'


//3.获取reducer
function fn(state=1,actions){
    switch(actions.type){
        case "jia":
            return state+1;
        default:
                return state
    }
}
//2.创建仓库 store

let store=createStore(fn)
//调用state
console.log(store.getState())//1


//调用 "jia"  方法  改变state

// store.dispatch({type:"jia"})
console.log(store.getState())//2

////第一种形式


// class One extends React.Component{
//     //第一种的方法
//     // jiajia=()=>{
//     //     store.dispatch({type:'jia'})
//     // }
//     render(){
//         return (
//             <div>
//                 {/* 调用state值 */}
//             <h1>渲染one组件{store.getState()}</h1>
//             {/* 第一种可以在外面写个方法 */}
//             {/* <button onClick={this.jiajia}>jia</button> */}
//             {/* 第二种直接在里面写 */}
//             <button onClick={()=>{store.dispatch({type:"jia"})}}>第二种方法</button>
//             </div>
//         )
//     }
// }

// //手动刷新   state值已经发生变化   但是页面没有渲染需要手动刷新
// function run () {  
//     ReactDOM.render(<One />, document.getElementById('root'));
// }
// run()
// //手动刷新试图  {订阅}
// store.subscribe(run)



//第二种形式

//在页面挂在完成之后将store里面的数据赋值给this.state.的值
//store.dispatch({type:"方法名"})这个方法调用store里面的方法
//store.subscribe()刷新试图
//store.getState()获取store里面的参数
//在页面加载完成之后进行页面刷新
class One extends React.Component{
    constructor(){
        super()
        this.state={
            a:null
        }
    }
    //组件挂载  获取 store.state
    //重新刷新   订阅  改变one组件中的state
    componentDidMount(){
       this.setStatefn()
       store.subscribe(this.setStatefn)

    }
    //改变One种的state
    setStatefn=()=>{
        this.setState({
            a:store.getState()
        })
    }
    //点击事件改变store.state
    jiajia=()=>{
        store.dispatch({type:'jia'})
    }
    render(){
        return (<div>
            <h1>第二种形式</h1>
            <p>{this.state.a}</p>
            <button onClick={this.jiajia}>点击</button>
        </div>)  

        
    }
}



ReactDOM.render(<One />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<One />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
