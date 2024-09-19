//IMPLEMENTATION A BASIC AUTHENTICATION FORM WITH LOGIN AND REGISTRATION
import React from 'react'

const Thirteen = () => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [isRegistered,setIsRegistered] = React.useState(false);
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  const[users,setUsers] = React.useState([]);



  const handleAuthentication = (e) => {
    if(isRegistered){
      if(isRegistered){
        const user = users.find((u)=>u.email === email && u.passsword === password);
        if(user){
          setIsLoggedIn(true);
        }else{
          alert('User not found');
        }
      }
    }else{
      const newUser = {email,password};
      setUsers([...users,newUser]);
      localStorage.setItem('users',JSON.stringify([...users,newUser]));
      setIsLoggedIn(true);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h2>
              Wlecome , {email}!
            </h2>
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ):(
          <div>
            <h2>{isRegistered ? 'Login' : 'Register'}</h2>
            <form>
      <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleAuthentication}>
        {isRegistered ? 'Login':'Register'}
      </button>
      </form>
      <p>
        {isRegistered ? 'Dont have an account?':'Already have an account?'}
      </p>
      <button onClick={()=>setIsRegistered(!isRegistered)}>
      {isRegistered ?'Register':'Login'}
      </button>
          </div>
        )
      }
      
    </div>
  )
}

export default Thirteen
