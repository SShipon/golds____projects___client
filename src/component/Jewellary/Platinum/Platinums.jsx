
import { useEffect, useState } from 'react';
import Platinum from './Platinum';

const Platinums = () => {
     const [platinums, setPlatinums] = useState([]);
     useEffect(() => {
       fetch('http://localhost:8000/platinums')
         .then((res) => res.json())
         .then((data) => setPlatinums(data));
     }, []);

    
  return (
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-[repeat(auto-fit, minmax(200px, 1fr))]"> */}
        <div className=" platinum-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {platinums.slice(0, 4).map((platinum) => (
          <Platinum key={platinum._id} platinum={platinum}></Platinum>
        ))}
      </div>
    </div>
  );
};

export default Platinums;
