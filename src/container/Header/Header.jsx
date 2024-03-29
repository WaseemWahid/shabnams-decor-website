import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import './Header.css'

const Header = () => {
    // check apple.com to make video work with plays inline data inline 
    return (
        <section id='home'>
            <div className='main'>
                <div className='overlay'></div>
                <video 
                src={images.bgVideo} 
                autoPlay 
                loop 
                muted 
                playsinline
                alt="background video"
                />
                <motion.div 
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{ duration: 1.0 }}
                className="content">
                    <h1 className='head-text'><img src={images.logo} alt='logo' /></h1>
                </motion.div>
            </div>
        </section>

    )
}

export default Header