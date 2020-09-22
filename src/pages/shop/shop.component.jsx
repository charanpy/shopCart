import React from "react";
import { Route } from "react-router-dom";
import CategoryPageContainer from "../category/category.container";
import { connect } from "react-redux";

import { updateLoading } from "../../redux/spinner/spinner.action";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { fetchCollectionAsync } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollectionAsync();
    console.log(fetchCollectionAsync());
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />

        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateLoading: () => dispatch(updateLoading()),
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
