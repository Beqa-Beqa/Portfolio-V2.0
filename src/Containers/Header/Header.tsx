import { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FancyButton } from '../../Components';
import { GeneralContext } from '../../Contexts/GeneralContextProvider';
import { breakpointMd } from '../../constants';
import { throttle } from 'lodash';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const {screenWidth} = useContext(GeneralContext);

    const headerRef = useRef<HTMLElement>(null);
    const prevScrollPos = useRef(window.scrollY);

    useEffect(() => {
        const scrollListener = throttle(() => {
            if (headerRef.current) {
                if (prevScrollPos.current < window.scrollY) {
                    headerRef.current!.classList.add('hide');
                } else {
                    headerRef.current!.classList.remove('hide');
                }
            }

            prevScrollPos.current = window.scrollY;
        }, 300);

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);
    
    return (
        <>
            <nav ref={headerRef} className='header p-2 px-sm-3 px-md-4 px-lg-5 d-flex justify-content-between align-items-center'>
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
                        <h2 onClick={() => window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            })} 
                            className='fw-bold special-font m-0 gradient-text' 
                            role='button'>
                                Beka Aladashvili
                            </h2>

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

            {/* Space filler */}
            <div style={{height: 60}} />
        </>
    );
}
 
export default Header;