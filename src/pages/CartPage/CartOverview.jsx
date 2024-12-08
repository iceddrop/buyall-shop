import { useEffect, useState } from "react";
import { useIdStore } from "../../store/store";
import Extranav from "../../components/Extranav/Extranav";
import Nav from "../../components/Nav/Nav";
import Sidebarcomp from "../../components/Sidebar/Sidebar";
import "../../App.css";
import { AiFillStar } from "react-icons/ai";
import { PacmanLoader } from "react-spinners";
import { getProductsInstance } from "../../api/axiosInstance";
import { useCartStore } from "../../store/store";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const CartOverview = () => {
  const { productId } = useIdStore();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [productImg, setProductImg] = useState();
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const color = "black";
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await getProductsInstance.get(`/${productId}`);
        setProduct(response);
        setProductImg(response?.data?.thumbnail);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    getProduct();
  }, []);

  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: product?.data?.price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  
  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <>
      <Sidebarcomp />
      <div className="md:pl-20">
        <Extranav />
        <Nav />
        {loading ? (
          <div className="flex justify-center">
            <PacmanLoader
              color={color}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="">
            <h4 className="text-center header-text-font">
              {product?.data?.brand}
            </h4>
            <div className="md:flex justify-center items-center">
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-64 h-64"
                    src={productImg}
                    alt="product-thumbnail"
                  />
                </div>
                <div className="flex justify-around">
                  {product?.data?.images.map((image) => (
                    <img
                      className="w-20 h-20 object-contain bg-neutral-200 cursor-pointer "
                      src={image}
                      onClick={() => setProductImg(image)}
                      alt="product-img"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 md:mt-0 pb-16">
                <div>
                  <h6 className="small-text-font">
                    NGN{" "}
                    <span className="font-bold">{product?.data?.price}</span>
                  </h6>
                  <p className="small-text-font text-red-600">
                    {product?.data?.availabilityStatus}
                  </p>
                  <div className="flex">
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <h6 className="rating">(120)</h6>
                  </div>
                  <div className="flex flex-col justify-around h-26">
                    <div className="flex items-center justify-center mt-4 border-solid border-1 border-gray-100">
                      <FaPlus className="mx-4 cursor-pointer" />
                      <p>2</p>
                      <FaMinus className="mx-4 cursor-pointer" />
                    </div>
                    <buttton
                      onClick={() => removeFromCart(product?.data)}
                      className="border-solid border-2 border-black px-8 py-1 relative top-4 rounded-md cursor-pointer"
                    >
                      Remove from cart
                    </buttton>
                    <button onClick={() => setOpenModal(true)} className="bg-green-600 text-white py-1 rounded-sm mt-6">
                       Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4 mt-4">
              <h4 className="header-text-font">Product description</h4>
              <p className="small-text-font pt-2 ">
                {product?.data?.description}
              </p>
            </div>
          </div>
        )}
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Checkout with Flutterwave</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Name" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Phone Number" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div> 
            <div className="w-full">
              <Button> <FlutterWaveButton {...fwConfig} /></Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};

export default CartOverview;
