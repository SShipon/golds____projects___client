import { useEffect, useState } from "react";
import Diamond from "./Diamond";


const Diamonds = () => {
    const [diamonds, setDiamonds] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/diamonds')
        .then((res) => res.json())
        .then((data) => setDiamonds(data));
    }, []);

    const handleGolds = (_id) => {
      console.log('this is id', _id);
    };
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {diamonds.slice(0, 4).map((diamond) => (
          // {diamonds.slice(0, 4).map((diamond) => (
            <Diamond
              key={diamond._id}
              diamond={diamond}
              handleGolds={handleGolds}
            ></Diamond>
          ))}
        </div>
      </div>
    );
};

export default Diamonds;