import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './Services.css'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'


const Services = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])

    //  waiting on client to come up with what she wants each description to be 

    return (
            <div className='app__services-main'>
                <h1 className='head-text'>Services we provide at <span>Shabnam's Decor</span></h1>
                <div className='app__services-items'>
                    {abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opcaity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
                            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
    )
}

export default AppWrap(
    MotionWrap(Services, 'app__services'),
    'services',
    'app__whitebg',
); 