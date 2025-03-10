import Styles from "./styles"
const {NavbarStyles} = Styles;
function Navbar({toggleMode,data}) {
  const xml = 
  <header className={`
    ${NavbarStyles.header} 
    ${data.darkMode ? "bg-black" : "bg-[#fff]"}
    ${!data.darkMode ? "text-black" : "text-[#fff]"}
  `}>
    <nav className={`${NavbarStyles.nav}`}>
      <h2 className={`${NavbarStyles.h2}`}>JS Counter</h2>
      <div className={`${NavbarStyles.mode} ${!data.darkMode ? "before:bg-black" : "before:bg-[#fff]"}`} onClick={toggleMode}></div>
    </nav>
  </header>
  return xml
}
export default Navbar
