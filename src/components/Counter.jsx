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
        ${data.darkMode === false ? "border-black" : "border-white"}`
      }>
        <p className={`
          ${CounterStyles.count} 
          text-${data.darkMode === false ? "[#000]" : "[#fff]"}
          ${data.color === "red" ? "text-[red]" : ""}
          `
        }>{data.num}</p>
        <div className={`
          ${CounterStyles.line} 
          border-${data.darkMode === false ? "black" : "white"}`
        }></div>
        <button className={`${CounterStyles.reset}`} onClick={reset}>Reset</button>
        <button className={`
        ${CounterStyles.buttons} 
        text-${data.darkMode === false ? "black" : "[#fff]"}`
        } onClick={increment}>+</button>
        <button className={`
          ${CounterStyles.buttons} 
          left-[unset] right-[20%] 
          text-${data.darkMode === false ? "black" : "[#fff]"}`} onClick={decrement}>-</button>
        <p className={`
        ${CounterStyles.smallCircle} 
        ${!data.showPop ? "hidden" : "block"}
        {data.darkMode === false ? "text-black" : "text-[#008000]"}
        ${data.darkMode === false ? "border-black" : "border-white"}
        `}>{data.pop}</p>
      </div>
    </div>
    <div className={`${CounterStyles.range}`}>
      <input type="number" name="range" onChange={handleRange} className={`
      ${CounterStyles.rangeInput} 
      text-${data.darkMode === false ? "black" : "[#fff]"}
      placeholder:text-${data.darkMode === false ? "black" : "[#fff]"}
      `} placeholder="Input Range"/>
    </div>
  </> 
  return (xml)
}
export default Counter;
