import React from 'react'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"受控组件",
            textval:"",
            age:''
        }
    }
    changeTextvalue=(e)=>{
        this.setState({
            // textval:e.target.value
            [e.target.name]:e.target.value
        },()=>{
            console.log(this.state.textval,this.state.age)
        })
    }
    render(){
        return (
            <div>
                form 表单练习
                姓名：<input type="text" value={this.state.textval} onChange={this.changeTextvalue} name="textval"></input>
                年龄：<input type="text" value={this.state.age} onChange={this.changeTextvalue} name='age'></input>
            </div>
        )
    }
}
export default Home