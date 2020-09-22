import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import { setCurrentUser } from './redux/user/user.action'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import Checkout from './pages/checkout/checkout';
import Category from './pages/category/category'
import WithSpinner from './components/with-spinner/with-spinner';
import { selectIsCollectionFetching } from './redux/shop/shop.selector'

//const CollectionOverviewWithSpinner = WithSpinner(ColletionOverview);
const CollectionPageWithSpinner = WithSpinner(Category);

class App extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // 
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {

          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
        })

      }
      this.props.setCurrentUser(user)


    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route path="/shop/:categoryId" render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.props.isFetching}
              {...props}
            />)} />
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
          } />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isFetching: selectIsCollectionFetching
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);