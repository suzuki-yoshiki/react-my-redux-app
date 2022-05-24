import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//      <label html="bar">bar</label>
//      <input type="text" onChange={() => {console.log("クリックしたよ！")}}  />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (
    <div>にゃあ</div>
  )
}

export default App;
