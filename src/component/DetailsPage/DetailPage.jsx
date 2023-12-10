/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { useContext, useState} from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Hooks/AuthProvider';
import './DetailPage.css';
const DetailPage = () => {

  const Navigate = useNavigate();
  const [cart, setCart] = useState([]);


  const allGoldsData = useLoaderData();
  console.log(allGoldsData);

  const { user } = useContext(AuthContext);
  console.log('user', user);

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      id: user?._id,
      displayName: user?.displayName,
      email: user?.email,
      jewellaryName: allGoldsData.title,
      price: allGoldsData.price,
      phone: event.target.phone.value,
      image: allGoldsData.image,
      quantity:allGoldsData.quantity
    };
    fetch('http://localhost:8000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleAddToCart = (allGoldsData) => {
    // console.log(allGoldsData);
    // cart.push.allGoldsData;
    if (allGoldsData) {
      const newCart = [...cart, allGoldsData];
      setCart(newCart);
    }
    // Navigate('/cart')
 
    

  };

  return (
    <div className="pt-20 pb-20 text-black  ">
      {/* <div className="detail-content flex justify-center align-items-center container mx-auto pt-12 pb-10"> */}

      {/* detail 2 */}
      <div className="detail-card flex justify-center align-items-center max-w-screen-xl  mx-auto basis-3/6 p-10 gap-10">
        {/* detail-img */}
        <div className="detail-img basis-5/12" id="Dimg">
          <img className="w-[100%] rounded" src={allGoldsData.image}></img>
        </div>
        {/* details-text */}
        <div className="details-text basis-3/6 mr-5 " id="Dtext">
          <h1 className="text-4xl mb-4 font-medium text-[#949494] ">
            {allGoldsData.title}
          </h1>
          <div className="flex align-items-center gap-5">
            <h2 className="text-3xl font-bold  mb-5">
              {allGoldsData.price} $
            </h2>
            <h2 className="text-xl mb-5 font-bold text-[#949494] line-through">
              {allGoldsData.price + 50} $
            </h2>
          </div>
        
          <hr className="mt-5 border-black" />
          <div className="mt-5">
            <p className="mb-4 ">{allGoldsData.description}</p>
            <p>
              Fabrilife Men's Premium Quality t-shirt offers a much smoother,
              silky feel and more structured, mid-weight fit than regular
              t-shirts. The t-shirts are made with the finest quality Combed
              Compact Cotton, which features astonishing ~175 GSM on just 26's
              cotton, giving a smooth and compact construction.
            </p>
            <h1 className="font-bold mt-4">Detailed Specification:</h1>
            <ul>
              <li>Organic Ringspun Combed Compact Cotton</li>
              <li>100% Cotton</li>
              <li>Regular fit, Crew Neck Mid-weight, 5.16 oz/yd2(~175GSM)</li>
              <li>Reactive Dye, enzyme, and silicon washed</li>
              <li>Preshrunk to minimize shrinkage</li>
              <li>Cut N Sew ( No Print)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* detail 1 */}
      <form
        onSubmit={handleBooking}
        className="max-w-screen-md mx-auto bg-black pt-12 pb-12 detail-input flex justify-center align-items-center  basis-5/12 flex-col gap-5 "
      >
        <input
          type="text"
          value={user?.displayName}
          className="input w-full "
        />
        <input type="email" value={user?.email} className="input w-full " />

        <input
          type="text"
          name="phone"
          placeholder="Type PhoneNumber"
          className="input w-full "
        />
        <input
          type="text"
          defaultValue={allGoldsData.title}
          placeholder="Type here"
          className="input w-full"
        />
        <input
          type="text"
          defaultValue={allGoldsData.price  + ' $'}
          placeholder="Type here"
          className="input w-full bg-transparent"
        />
        <input
          type="text"
          defaultValue={allGoldsData.image}
          disabled
          className="input w-full bg-transparent"
        />
        <input
          type="text"
          defaultValue={allGoldsData.quantity}
          disabled
          className="input w-full"
        />
      
          <button
            onClick={() => handleAddToCart(allGoldsData)}
            className=" btn detail-btn w-full"
          >
         Add to Cart{' '} 
          </button>
       
      </form>

      {/* </div> */}
    </div>
  );
};

export default DetailPage;
