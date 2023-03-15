import React, { useState } from 'react';

import Menu from '../../components/Menu/menu';

const FormsPage = () => {

    const [navBar, setNavBar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 30){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <div>
            <div className="header">
                <div className='top-header'>
                    <div className={navBar ? 'menu-div sticky' : 'menu-div'}>
                        <Menu inicio='#inicio' cme='#cme' beneficio='#beneficio' etapa='#etapa' beneficio2='#beneficio2'/>
                    </div>
                </div>
                <div className='title-content'>
                    <p className='title'>LetsInove Web Solutions</p>
                </div>
            </div>
        </div>
    )

}


export default FormsPage;