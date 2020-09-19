import React from "react";
import { Route } from "react-router-dom";
import ColletionOverview from "../../components/collection-overview/collection-overview";
import Category from "../category/category";
const ShopPage = ({ match }) => {
  console.log(match, "hi");
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ColletionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};
export default ShopPage;
