import React from 'react';

function App() {
  return (
    <React.Fragment>
     <label html="bar">bar</label>
     <input type="text" onChange={() => {console.log("クリックしたよ！")}}  />
    </React.Fragment>
  );
}

export default App;
