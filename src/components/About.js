import React from 'react';
import aboutImg from '../assets/images/about-us.png';

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={aboutImg} alt="Logo" className="d-inline-block me-2" />
                    </div>
                    <div className='content col-lg-6'>
                        <h1>About Us</h1>
                        <p>
                            Fauna Finder is an innovative platform designed for wildlife enthusiasts and nature lovers. 
                            Our mission is to educate and inspire people about the incredible diversity of fauna around the world.
                            With an extensive database of animal species and detailed descriptions, Fauna Finder allows users to 
                            explore various habitats and learn about the creatures that inhabit them.
                        </p>
                        <h2 className='pt-4'>Our Features</h2>
                        <ul>
                            <li>Comprehensive animal database</li>
                            <li>Detailed Species Profiles</li>
                            <li>User-friendly search options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;