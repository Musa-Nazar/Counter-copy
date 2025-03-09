import Styles from "./styles";
const {CounterStyles} =  Styles;
function Counter({data,changeData,increment,decrement,reset}) {
  function handleRange(e) {
    const {name} = e.target;
    changeData(prevData => ({...prevData,[name] : parseInt(e.target.value)}))
  }
  const xml =
  <>
    <div className={`
      ${CounterStyles.main} 
      bg-${data.darkMode ? "black" : "[#fff]"}`
      }>
      <div className={`
        ${CounterStyles.circle} 
        border-${!data.darkMode ? "black" : "[#fff]"}`
      }>
        <p className={`
          ${CounterStyles.count} 
          text-[${data.color}] 
          text-${!data.darkMode ? "black" : "[#fff]"}`
        }>{data.num}</p>
        <div className={`
          ${CounterStyles.line} 
          border-${!data.darkMode ? "black" : "[#fff]"}`
        }></div>
        <button className={`${CounterStyles.reset}`} onClick={reset}>Reset</button>
        <button className={`
        ${CounterStyles.buttons} 
        text-${!data.darkMode ? "black" : "[#fff]"}`
        } onClick={increment}>+</button>
        <button className={`
          ${CounterStyles.buttons} 
          left-[unset] right-[20%] 
          text-${!data.darkMode ? "black" : "[#fff]"}`} onClick={decrement}>-</button>
        <p className={`
        ${CounterStyles.smallCircle} 
        ${!data.showPop ? "hidden" : "block"}
        text-${!data.darkMode ? "black" : "[#008000]"}
        border-${!data.darkMode ? "black" : "[#fff]"}
        `}>{data.pop}</p>
      </div>
    </div>
    <div className={`${CounterStyles.range}`}>
      <input type="number" name="range" onChange={handleRange} className={`
      ${CounterStyles.rangeInput} 
      text-${!data.darkMode ? "black" : "[#fff]"}
      placeholder:text-${!data.darkMode ? "black" : "[#fff]"}
      `} placeholder="Input Range"/>
    </div>
  </> 
  return (xml)
}
export default Counter;