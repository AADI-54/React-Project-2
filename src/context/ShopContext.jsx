import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState([]);
    const [showsearch,setShowsearch] = useState(false);
    const [cartitems, setCartItems] = useState({});
    const navigate = useNavigate();

const addToCart = async (itemId,size) => {
        if(!size) {
            toast.error('Select Poduct Size');
        }

        let cartData = structuredClone(cartitems);
        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
    }
    else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
}

const getCartCount = () => {
    let totalcount = 0;
    for(const items in cartitems){
        for(const item in cartitems[items]){
            try{
                if(cartitems[items][item]>0){
                    totalcount += cartitems[items][item];
                }
            }
            catch(error){
                console.log(error);
                
            }
        }
    }
    return totalcount;
}
const updateQuantity = async (itemId,size,quantity) => {
    let cartdata = structuredClone(cartitems);
    cartdata[itemId][size] =quantity;
    setCartItems(cartdata);
}

const getCartAmount = () => {
    let totalAmount = 0 ;
    for(const items in cartitems){
        let iteminfo = products.find((product)=>product._id===items);
        for(const item in cartitems[items]){
            try{
                if(cartitems[items][item]>0){
                    totalAmount += iteminfo.price * cartitems[items][item];
                }
            }
            catch(error){
                console.log(error);
                
            }
        }
    }
    return totalAmount;
}


useEffect(()=>{

},[cartitems])

    const value = {
      products,
      currency,
      delivery_fee,
      search,
      setSearch,
      showsearch,
      setShowsearch,
      cartitems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;