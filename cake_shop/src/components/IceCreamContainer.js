import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/icecream/IcecreamActions";

function IceCreamContainer(props) {

  return (
    <div>
        <h2>Buy Icecream - {props.numberOfIceCream}</h2>
        <button onClick={props.buyIcecream}>Sell Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
