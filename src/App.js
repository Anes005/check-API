import React from 'react';
import {useSelector} from 'react-redux';
import UserList from './Components/UserList';
import './App.css';

function App() {

  const userlist=useSelector(state=>state.userlist);
  return (
    <div className='App container'>
      <UserList userlist={userlist}/>
    </div>
  );
}

export default App;
