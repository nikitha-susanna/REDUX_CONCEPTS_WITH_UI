import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/CakeActions";

function CakeContainer(props) {

  return (
    <div>
        <h1>Cake Shop Inventory</h1>
        <h2>Buy Cake - {props.numberOfCakes}</h2>
        <button onClick={props.buyCake}>Sell Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
