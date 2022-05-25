import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 20 },
    { name: "Nanami" }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
      <User name={"Taro"} age={10} />
      <User name={"HANAKO"} age={20} />
    </div>
  )
}

const User = (props) => {
  return (
    <div>こんにちは！{ props.name }です！{ props.age }歳です！</div>
  )
}

User.defaultProps = {
  age: 15
}

export default App;
