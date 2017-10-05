import React from 'react';
import Card from './Card.js';

function App(props){
    return (
      <div>
          <Card
          img="http://sampson.washcoll.edu/~pkinsella2/Final%20Project/images/Spongebob.jpg"
          name="Spongebob Squarepants" />
          <Card
          img="https://vignette2.wikia.nocookie.net/spongebob/images/e/e6/Gary-snail-spongebob.jpg/revision/latest?cb=20120831132338"
          name="Gary Squarepants" />
          <Card
          img="https://carboncostume.com/wordpress/wp-content/uploads/2014/09/patrickstar.jpg"
          name="Patrick Star" />
          <Card
          img="https://farm8.staticflickr.com/7496/26944092182_ae6d62133b_o.png"
          name="Squidward Tentacles" />
          <Card
          img="https://vignette.wikia.nocookie.net/spongebob/images/a/a0/Sandy_Cheeks.svg/revision/latest?cb=20100920201409"
          name="Sandy Cheeks" />
          <Card
          img="http://vignette4.wikia.nocookie.net/nicktheultimaswordwielder/images/4/4e/444689-671-760.png/revision/latest?cb=20120109055033"
          name="Eugene Krabs" />
      </div>
    )
};

export default App
