
import { useState,useEffect } from 'react';

const useCart = (props) => {
    const [cart,setCart] = useState([]);
    useEffect((props)=>{
       setCart(props);
    },[])
    return ( [cart] );
};

export default useCart;