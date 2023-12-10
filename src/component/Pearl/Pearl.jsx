import './Pearl.css';
import p1 from '../../video/p.pendent4.avif';
import PearlCards from './PearlCards';
import new1 from '../../video/p.pendent.png';
import new2 from '../../video/p.party.jpg';
import new3 from '../../video/p.single.png';
import new4 from '../../video/p.simple3.jpg';
import { useEffect, useState } from 'react';

const Pearl = () => {
   const [pearls, setPearls] = useState([]);
   useEffect(() => {
     fetch('http://localhost:8000/pearls')
       .then((res) => res.json())
       .then((data) => setPearls(data));
   }, []);

  const handleGolds = (_id) => {
    console.log('this is id', _id);
  };
  return (
    <>
      <div className="pearl-header bg-white">
        {/* bg-base-300 */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse text-black">
            <img
              className="w-[50%]"
              // style={{
              //   border: '2px solid rgb(255, 0, 85)',
              // }}
              src={p1}
              alt=""
            />
            {/* <video className="w-[50%] h-auto" controls src={p1}></video> */}
            <div className="">
              <h1
                className="text-5xl font-bold "
                style={{
                  color: 'rgb(255, 0, 85)',
                }}
              >
                Pearls For You
              </h1>
              <p className="text-2xl py-3">
                We are providing the natural pearl, Perhaps the best-loved gems
                of all time
              </p>
              <p className="py-6">
                Natural pearls form in the bodies, or mantle tissue, of certain
                molluscs, usually around a microscopic irritant, and always
                without human help of any kind.
                <br /> Pearls—occur in a wide variety of colours. The most
                familiar colours are white and cream (a light yellowish brown).
                Black, grey and silver are also fairly common, but the palette
                of pearl colours extends to every hue.
                <br /> The main colour, or bodycolour, is often modified by
                additional colours called overtones, which are typically pink
                (sometimes called rosé), green, purple or blue. Some pearls also
                show the iridescent phenomenon known as orient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div
        style={{
          backgroundColor: 'rgb(211, 212, 211)',
        }}
      >
        <div className="container mx-auto mt-12 mb-12 pt-12 pb-12">
          <h1 className="text-center text-3xl mb-8 text-black">
            Beautiful{' '}
            <span className="text-5xl" style={{ color: 'rgb(255, 0, 85)' }}>
              Pearl
            </span>{' '}
            Collection
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {pearls.map((gold) => (
              <PearlCards
                key={gold._id}
                gold={gold}
                handleGolds={handleGolds}
              ></PearlCards>
            ))}
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className="bg-white">
        <div className="Pearl-new pt-10 pb-10 container mx-auto">
          <div className="text-center text-black">
            <h1 className="text-5xl ">
              <span
                style={{
                  color: 'rgb(255, 0, 85)',
                }}
              >
                Exclusive
              </span>{' '}
              Pearl Collection
            </h1>
            <p>
              We are always try to make someting unique and different for you{' '}
            </p>
          </div>
          <div className="Pnew-img mt-5 mb-5">
            <img src={new1} alt="" />
            <img src={new2} alt="" />
            <img src={new3} alt="" />
            <img src={new4} alt="" />
          </div>
          <button
            className="btn w-[20%] block m-auto"
            style={{
              backgroundColor: 'rgb(255, 0, 85)',
              color: 'white',
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Pearl;
