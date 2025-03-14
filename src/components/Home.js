import React from 'react';

const Home = () => {
    return (
        <section id='home' className='home-banner'>
            <div className="container">
                <div className='row'>
                    <div className='banner-text col-lg-6'>
                        <h1>Welcome to <span className='name'>Fauna Finder</span></h1>
                        <p>Discover the diverse wildlife around you!</p>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Home;