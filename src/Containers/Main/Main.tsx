import './Main.css';
import { developerAnimation } from '../../Assets/Animations';
import { Animation, TypeWriter } from '../../Components';
import { useContext } from 'react';
import { GeneralContext } from '../../Contexts/GeneralContextProvider';
import { breakpointMd } from '../../constants';
import { BTULogo } from '../../Assets/Images';

const Main = () => {
    const { screenWidth } = useContext(GeneralContext);

    return (
        <div className='p-2 px-sm-3 px-md-4 px-lg-5'>   
            <div className='d-flex flex-column flex-md-row align-items-center'>
                <div className={`${screenWidth >= breakpointMd && 'w-50'} mt-md-4`}>
                    <Animation style={{ maxWidth: 500 }} className='w-100' animationData={developerAnimation} />
                </div>

                <div className={`text-center mt-3 ${screenWidth >= breakpointMd && 'w-50'} mt-md-4`}>
                    <h4><TypeWriter text='Beka Aladashvili' specialFont /></h4>
                    <p>Passionate developer with a knack for building efficient, user-focused applications. Skilled in Python, JavaScript, and React, I thrive on solving complex problems and continuously expanding my knowledge.</p>
                </div>
            </div>

            <div className='w-100 p-2 px-sm-3 px-md-4 px-lg-5 d-flex flex-column align-items-center flex-md-row-reverse gap-md-5'>
                <div className={`${screenWidth >= breakpointMd && 'w-50'} px-5 py-4 p-md-0 d-flex justify-content-center`}>
                    <a className='skewed hover-pop rounded-4' href="https://btu.edu.ge/en/home-english/" target='_blank'>
                        <img 
                            style={{maxWidth: screenWidth >= breakpointMd ? 350 : 300}}
                            className='w-100 rounded-4'
                            src={BTULogo} 
                            alt="Business and techonolgy university" 
                        />
                    </a>
                </div>
                <div className={`${screenWidth >= breakpointMd && 'w-50'} text-center`}>
                    <h4><TypeWriter text='Student of BTU' /></h4>
                </div>
            </div>
        </div>
    );
}
 
export default Main;