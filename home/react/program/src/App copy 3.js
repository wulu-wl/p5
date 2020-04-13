import React from 'react';
import { connect } from 'react-redux'
// function App(xx) {
//   return (
//     <div className="App">
//       <h1>
//         {xx.zhi}
//       </h1>
//       <button onClick={()=>{xx.jiajia()}}>jia </button>
//     </div>
//   )
// }

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.zhi}</h1>
        <button onClick={()=>this.props.jiajia}>jiajia </button>
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  //  console.log(state)
  return {
    zhi: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      "jiajia": () => {
          dispatch({
              "type": "jia",
              // "zhi": state
          })
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
