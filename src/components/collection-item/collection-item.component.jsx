import React from "react";

import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  AddtoCartButton,
  ImageContainer,
  CollectionItemContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <ImageContainer
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <AddtoCartButton invertedAndCollection onClick={() => addItem(item)}>
      Add to cart
    </AddtoCartButton>
  </CollectionItemContainer>
);
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
