import Logo from './assets/Logo.svg'

export default function Footer() {
return(
    <div className='section bg-gray'>
        <div className='footer container'>
            <img alt='logo' src={Logo}></img>
            <div className='footer-list'>
                <h3>Navigation</h3>
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
                <h3>Contact</h3>
                <ul className='footer-ul'>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className='footer-list'>
                <h3>Social Media Links</h3>
                <ul className='footer-ul'>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
)
}