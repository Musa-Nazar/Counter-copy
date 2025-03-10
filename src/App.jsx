import { useState } from "react";

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
  function increment(e) {
    e.preventDefault()
    changeData(prevData => {
      return prevData.num === prevData.range - 1 ?
      {...prevData
        ,num : prevData.num + 1,
        color:  "red",
        rangeCount : prevData.rangeCount + 1,
        pop : prevData.pop + 1
      }
      :prevData.num > prevData.range && prevData.rangeCount > 0 ?
      {...prevData,
        num : 0,
        color: "black"
      }
      :prevData.rangeCount > 0 && prevData.num === 0 ?
      {...prevData,num : prevData.num + 1,showPop : true} 
      :
      {...prevData,num : prevData.num + 1,color: "black"}
    })    
  }
  function decrement() {
    changeData(prevData => {
      return prevData.num > -1 ? {...prevData,num : prevData.num - 1} : {...prevData,num : 0}
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
    changeData(prevData => ({...prevData,darkMode : !prevData.darkMode}))
  }
  const xml = 
  <>
    < Navbar data={data} toggleMode={toggleMode}/>
    < Counter data={data} increment={increment} decrement={decrement} changeData={changeData} reset={reset}/>
    < Footer data={data}/>
  </>
  return (xml)
}
export default App;
