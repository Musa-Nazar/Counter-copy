import Styles from "./styles"
const {footerStyle} = Styles
function Footer({data}) {
  const xml = 
  <footer className={`${footerStyle} bg-${data.darkMode ? "black" : "[#fff]"} text-${!data.darkMode ? "black" : "[#fff]"}`}>&copy;{new Date().getFullYear()} nHub Assignment</footer>
  return (xml)
}
export default Footer