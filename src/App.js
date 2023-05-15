import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import "./App.css";

const App = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   const handle = () => {
      setCookie('Name', name, { path: '/' });
      setCookie('Password', pwd, { path: '/' }); 
      window.location.reload(); 
   }

   return (
      <div className="App">
      <h1 className='title'>WADS Cookies and Sessions Project</h1>
      <h4 className='myself'>Maria Clarin - 2501990331 - L4AC</h4>
      <img src ="https://cdn.discordapp.com/attachments/1074944157363220597/1107735500544016526/BookStack_4.png"/>
      <div className="unamefield">
         <h4 className='unametitle'>Username:</h4>
         <input
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
      </div>
      <div className="passfield">
         <h4 className='passtitle'>Password:</h4>
         <input
            type="password"
            placeholder="Enter password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            />
            </div>
            <button className="btn" onClick={handle}>Set Cookie</button>
            <div className='getcookie'>
               {cookies.Name && (
                  <div className='display'>
                     Name : <p> {cookies.Name}</p>
                  </div>
               )}
               {cookies.Password && (
                  <div className='display1'>
                     Password : <p> {cookies.Password}</p>
                  </div>
               )}
            </div>
         </div>
      );
   };
export default App;