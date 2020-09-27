import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";
import { connect } from "react-redux";

import { updateLoading } from "../../redux/spinner/spinner.action";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { fetchCollectionAsync } from "../../redux/shop/shop.action";
const CategoryPageContainer = lazy(() =>
  import("../category/category.container")
);
const ShopPage = ({ fetchCollectionAsync, match }) => {
  useEffect(() => {
    fetchCollectionAsync();
  }, [fetchCollectionAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Suspense fallback={<Spinner />}>
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateLoading: () => dispatch(updateLoading()),
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
