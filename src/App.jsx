import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const initialCount = parseInt(getCookie('countData')) || 0;
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    const d = new Date();
      d.setTime(d.getTime() + (10*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = "countData" + "=" + count + ";" + expires + ";path=/";
  }, [count]);

  return (
    <>
      <div>
        <h2>Current number: {count}</h2>
      </div>
      <div>
        <button onClick={() => setCount((a) => a + 1)}>+</button>
        <button onClick={() => setCount((a) => a - 1)}>-</button>
      </div>
    </>
  )
}

export default App
