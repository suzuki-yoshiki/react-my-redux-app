import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 20 },
    { name: "Nanami", age: 1  }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>こんにちは！{ props.name }です！{ props.age }歳です！</div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
