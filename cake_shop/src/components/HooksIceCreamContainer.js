import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/IcecreamActions";

function HooksIceCreamContainer(pros) {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream) 
    const dispatch = useDispatch(); 
    return (
        <div>
          <h2>Number of icecreams using hooks - {numberOfIceCream}</h2>
          <button onClick={()=> dispatch(buyIcecream())}>Buy ice cream</button>
        </div>
      );
    }
    

export default HooksIceCreamContainer;