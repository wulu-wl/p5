import React from 'react';
// 父子组件通信
// import FuZi from "./Fuzi/Fu.jsx"

// 子父组件通信
// import ZiFu from "./ZiFu/Fu.jsx"

// 非父子组件通信
import Feifuzi from "./FeiFuZi/Fu.jsx"
function App() {
  return (
    <div className="App">
      {/* <FuZi></FuZi> */}
      {/* <ZiFu></ZiFu> */}
      <Feifuzi></Feifuzi>
    </div>
  );
}

export default App;
