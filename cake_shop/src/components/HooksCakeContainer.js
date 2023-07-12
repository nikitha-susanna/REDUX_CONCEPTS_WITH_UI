import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/CakeActions";

function HooksCakeContainer() {
const numberOfCakes = useSelector(state => state.cake.numberOfCakes) 
const dispatch = useDispatch(); 
return (
    <div>
      <h2>Number of cakes using hooks - {numberOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
