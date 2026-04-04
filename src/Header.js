import Logo from './assets/Logo.svg'
import Nav from './Nav'

export default function Header() {
return(
    <div className='header'>
        <img alt='logo' src={Logo}></img>
        <Nav/>
    </div>
)
}