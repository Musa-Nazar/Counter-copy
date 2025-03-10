import { useState,useEffect,StrictMode } from "react";

import Navbar from "./components/Navbar"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
function App() {
  const [data,changeData] = useState({
    num : 0,
    range: null,
    rangeCount: 0,
    color : "black",
    pop: 0,
    showPop: false,
    darkMode : false
  });
  useEffect(()=>{
    document.body.style.background = data.darkMode ? "black" : "white";
    console.log(data);
  },[data])
  function increment() {
    changeData(prevData => {
      const {num,range,rangeCount,showPop,pop} = prevData;
      if (num === range - 1) {
        return {...prevData,num :  prevData.num + 1 , color : "red" }
      } else if (num === range) {
        return {...prevData,num : 0 , color : "black", rangeCount : rangeCount + 1, pop : pop + 1}
      } else {
        if(rangeCount > 0) {
          return {...prevData,num : prevData.num + 1, showPop : true} 
        }
        return {...prevData, num : num + 1}
      }
    })
  }
  function decrement() {
    changeData(prevData => {
      const {num} = prevData;
      return prevData.num !== 0 ? {...prevData,num : num -1 } : {...prevData,num : 0}
    })
  }
  function reset() {
    changeData(prevData => ({
      ...prevData,
      num : 0,
      rangeCount: 0,
      color : "black",
      pop: 0,
      showPop: false
    }))
  }
  function toggleMode() {
    console.log(data)
    changeData(prevData => ({...prevData,darkMode : !prevData.darkMode}))
  }
  const xml = 
  <StrictMode>
    < Navbar data={data} toggleMode={toggleMode}/>
    < Counter data={data} increment={increment} decrement={decrement} changeData={changeData} reset={reset}/>
    < Footer data={data}/>
  </StrictMode>
  return (xml)
}
export default App;
