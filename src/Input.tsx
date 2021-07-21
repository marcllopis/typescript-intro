import React, {useState} from 'react';

const Input = () => {

  const [username, setUsername] = useState('')
  const [initialAge] = useState<string | number>('22')


  return(
    <div>
      <h1>Your age: {initialAge}</h1>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Your name...'
      />
      <h2>Your name: {username}</h2>
    </div>
  )
}

export default Input;
