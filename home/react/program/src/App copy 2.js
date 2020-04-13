import React from 'react';
import Shou from './view/menu/shou'
import Fen from './view/menu/Fen'
import Ge from './view/menu/Ge'
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="con">
            <Switch>
              <Route path="/shou"> <Shou></Shou></Route>
              <Route path="/fen"><Fen></Fen> </Route>
              <Route path="/ge"><Ge></Ge> </Route>
            </Switch>

          </div>
          <ul>
            <li><Link to="shou">首页</Link></li>
            <li><Link to="fen">分类</Link></li>
            <li><Link to="ge">个人中心</Link></li>
          </ul>
        </div>
      </HashRouter>
    )
  }
}
export default App;
