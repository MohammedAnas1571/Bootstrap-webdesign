import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [currentText, setCurrentText] = useState('France');

  useEffect(() => {
    const places = ['France', 'Italy', 'Spain', 'Japan', 'Brazil','India','China','USA'];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentText(places[index]);
      index = (index + 1) % places.length; 
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='home'>
      <div className="content">
        <h5>Welcome To World</h5>
        <h1>Visit <span className="changecontent">{currentText}</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ipsam quam, laboriosam mollitia exercitationem, perspiciatis veritatis rerum temporibus animi nemo impedit? </p>
        <a href="#book">Book place</a>
      </div>
    </div>
  );
};
