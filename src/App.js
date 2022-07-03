import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

// function Timer(props) {
//   return (
//     <div className="timer">
//     <span className="digits">
//       {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
//     </span>
//     <span className="digits">
//       {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
//     </span>
//   	</div>
//   );
// }

const [start, setStart] = useState(new Date());
const [myx, setMyx] = useState(0);

useEffect(
  ()=>{
    let interval = setInterval(() => {
      let current = new Date();
      let count = Math.floor((+current - +start)/1000);
      // // console.log('count=',count)
      setMyx(count);
      }, 10);	
      return ()=>{clearInterval(interval)}
    }
)

  

// React.useEffect(() => {
// 	let interval = null;
// interval = setInterval(() => {
//   let current = new Date();
//   let count = +current - +start;
//   // console.log('count=',count)
//   setTime(count);
// 	}, 10);	
// 	return () => {
// 	clearInterval(interval);
// 	};
// });

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first line of text
        </p>
        {/* <Timer time={time} /> */}
        <p>counter myx = {myx} </p>

      </header>
    </div>
  );
}

export default App;
