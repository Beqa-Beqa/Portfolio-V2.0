import { useContext, useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import FancyButton from '../../Components/FancyButton/FancyButton';
import { GeneralContext } from '../../Contexts/GeneralContextProvider';
import { breakpointMd } from '../../constants';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const {screenWidth} = useContext(GeneralContext);

    

    return (
        <nav className='header p-2 px-md-4 px-lg-5 d-flex justify-content-between align-items-center'>
            {screenWidth < breakpointMd ?
                <>
                    <GiHamburgerMenu onClick={() => setToggleMenu(true)} className='icon' />

                    {/* Toggle menu */}
                    <div className={`w-100 h-100 toggle-menu-wrapper position-fixed top-0 start-0 ${toggleMenu ? 'active' : ''}`}>
                        <div className={`py-2 px-3 toggle-menu bg-light h-100 position-fixed top-0 ${toggleMenu ? 'active' : ''}`}>
                            <div className='mt-1 w-100 d-flex justify-content-between align-items-center'>
                                <h2 className='fw-bold special-font m-0 gradient-text'>Beka Aladashvili</h2>
                                <IoMdClose onClick={() => setToggleMenu(false)} className='icon' />
                            </div>
                            <hr />
                            <ul className='fs-4 burger-menu-list p-0 mb-0'>
                                <li className='mt-4'>About me</li>
                                <li className='mt-4'>Skills</li>
                                <li className='mt-4'>Projects</li>
                                <li className='mt-4'>Contact</li>
                            </ul>
                        </div>
                    </div>
                </>
            :
                <>
                    <h2 className='fw-bold special-font m-0 gradient-text'>Beka Aladashvili</h2>

                    <ul className='fs-5 burger-menu-list d-flex justify-content-between w-50 p-0 mb-0'>
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </>
            }
            <FancyButton text='Hire me' />
        </nav>
    );
}
 
export default Header;