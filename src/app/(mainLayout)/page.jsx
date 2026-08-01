import React from 'react';
import Slider from '../components/Slider';

import TopArtists from '../components/TopArtist';
import HomePageCate from '../components/HomePageCate';


const HomePage
 = () => {
    return (
        <div>
        <Slider/>
        <div className='grid md:grid-cols-2 items-center gap-15 my-5 container mx-auto'> 
         <HomePageCate/>
        <TopArtists/>
        </div>
        </div>
    );
};

export default HomePage
;