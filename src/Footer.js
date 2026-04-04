import Logo from './assets/Logo.svg'

export default function Footer() {
return(
    <div className='footer'>
        <img alt='logo' src={Logo}></img>
        <div className='footer-list'>
            <h4>Navigation</h4>
            <ul className='footer-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
        <div className='footer-list'>
            <h4>Contact</h4>
            <ul className='footer-ul'>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div className='footer-list'>
            <h4>Social Media Links</h4>
            <ul className='footer-ul'>
                <li>Instagram</li>
                <li>Facebook</li>
                <li></li>
            </ul>
        </div>
    </div>
)
}