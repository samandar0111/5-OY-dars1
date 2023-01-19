import header from './header.module.scss'
import logo from './img/FOOTER.svg'
const Header = ()=>{
  return (
    <div className={header.container}>
      <div className={header.logo}><img src={logo} alt="" /></div>
        <nav>
          <ul className={header.navbar}>
            <li>HOME</li>
            <li>BAGS</li>
            <li>SNEAKERS</li>
            <li>BELT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
    </div>
  )
}

export default Header