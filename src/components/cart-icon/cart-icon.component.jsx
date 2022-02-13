import React from "react";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer className="cart-icon">
    <ShoppingIconContainer
      className="shopping-icon"
      onClick={toggleCartHidden}
    />
    <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

export default CartIcon;
