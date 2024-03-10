import Logo from "./../../assets/img/logo.svg";

export default function Header() {
    return (
        <header className='py-6'>
            <div className='container flex justify-between items-center border-b border-c-red pb-6'>
                {/* Logo */}
                <div className=''>
                    <img src={Logo} alt='Eduphiser Logo' />
                </div>

                {/* Menu Part */}
                <ul className='hidden xl:flex gap-8'>
                    <li>
                        <a href='#'>Educational Loan</a>
                    </li>
                    <li>
                        <a href='#'>How it works?</a>
                    </li>
                    <li>
                        <a href='#'>Resources</a>
                    </li>
                    <li>
                        <a href='#'>Blogs</a>
                    </li>
                    <li>
                        <a href='#'>Be Our Partner</a>
                    </li>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                </ul>

                {/* Menu Buttons */}
                <div className='hidden xl:flex gap-4'>
                    <button className='btn border border-c-blue'>
                        <i className='ri-login-box-line mr-1' /> Login
                    </button>
                    <button className='btn bg-c-red text-white shadow-xl shadow-c-red/30'>Apply Now</button>
                </div>

                {/* Menu hamburger */}
                <i className='ri-menu-3-line text-3xl xl:hidden' />
            </div>
        </header>
    );
}
