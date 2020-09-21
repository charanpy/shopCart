import React from "react";
import { Route } from "react-router-dom";
import ColletionOverview from "../../components/collection-overview/collection-overview";
import Category from "../category/category";
import { connect } from "react-redux";
import { selectSpinnerLoading } from "../../redux/spinner/spinner.selector";
import { updateCollection } from "../../redux/shop/shop.action";
import { updateLoading } from "../../redux/spinner/spinner.action";
import { createStructuredSelector } from "reselect";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner";

const CollectionOverviewWithSpinner = WithSpinner(ColletionOverview);
const CollectionPageWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      this.props.updateCollection(collectionsMap);
      this.props.updateLoading();
    });
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
              isLoading={this.props.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.props.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollection: (item) => dispatch(updateCollection(item)),
  updateLoading: () => dispatch(updateLoading()),
});
const mapStateToProps = createStructuredSelector({
  loading: selectSpinnerLoading,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
