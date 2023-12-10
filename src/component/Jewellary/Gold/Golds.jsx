/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loading from '../../Shared/Loading/Loading';
import Gold from './Gold';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Golds = () => {

 
  const [golds, setGolds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/golds')
      .then((res) => res.json())
      .then((data) => setGolds(data));
    
    
  }, []);

  if (golds.length == 0) {
    return <Loading></Loading>;
  }

  const handleGolds = (_id) => {
    console.log('this is id', _id);
  };

    

   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 4, // Number of cards to show for larger screens (tablets and above)
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 576, // Breakpoint for screens with a width of 576px or less
         settings: {
           slidesToShow: 1, // Number of cards to show for screens less than 576px
         },
       },
       {
         breakpoint: 1000, // Breakpoint for screens with a width of 768 or less
         settings: {
           slidesToShow: 3, // Number of cards to show for screens less than 576px
         },
       },
     ],
     autoplay: true,
     autoplaySpeed: 2000,
     pauseOnHover: true,
     arrows: false,
   };

  return (
    <div className="container mx-auto">
      <div >
        <Slider {...settings}>
            {golds.slice(0, 5).map((gold) => (
              <Gold
                key={gold._id}
                gold={gold}
                handleGolds={handleGolds}
              ></Gold>
            ))}
        
        </Slider>
      </div>
    </div>
  );
};

export default Golds;
