import React from "react";
import { Route } from "react-router-dom";
import ColletionOverview from "../../components/collection-overview/collection-overview";
import Category from "../category/category";
import { connect } from "react-redux";
import { selectSpinnerLoading } from "../../redux/spinner/spinner.selector";
//import { updateCollection } from "../../redux/shop/shop.action";
import { updateLoading } from "../../redux/spinner/spinner.action";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner";
import { fetchCollectionAsync } from "../../redux/shop/shop.action";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

const CollectionOverviewWithSpinner = WithSpinner(ColletionOverview);
const CollectionPageWithSpinner = WithSpinner(Category);

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
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.props.isFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!this.props.isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateLoading: () => dispatch(updateLoading()),
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});
const mapStateToProps = createStructuredSelector({
  loading: selectSpinnerLoading,
  isFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
