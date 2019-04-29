import React, { useState } from 'react';

// function component written as function declaration
// rather than arrow function so we can immediately
// export it
export default function Login(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser ] = useState(null

  )
  const handleSubmit = event => {
    event.preventDefault()
     const userData = {
       username,
       password
     }
     setUser(userData);
     // clear contents of username and password
     setUsername("")
     setPassword("")
  }
  return (
    <div
      style ={{
        textAlign: 'center'

      }}
    >
    <h2>Login</h2>
      <form action=""
        style={{
          display: 'grid',
          alignItems: "center",
          justifyItems: "center"
        }}
        onSubmit = {handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}

// export default Login;
