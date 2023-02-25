import React, { useState } from "react";
import ResturantContext from "./resturantContext";

const ResturantProvider = (props) => {

    const [cart , setCart] = useState([]); 

    return (
        <ResturantContext.Provider 
          value={{
            cart:cart ,
            setCart : (value) => setCart(value),
          }}
          >
            {props.children}
        </ResturantContext.Provider>
    )

}

export default ResturantProvider ; 