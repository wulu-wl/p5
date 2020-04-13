//redux
//创建store仓库   state   改变state的方法
//到处仓库 store



//创建仓库
import {createStore} from 'redux'

function fn(state=1,actions) { 
    switch (actions.type){
        case "jia":
            return state+1
        default:
            return state
    }
 }

 let store=createStore(fn)
 export default store