import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import { setCurrentUser } from './redux/user/user.action'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
import Checkout from './pages/checkout/checkout';

class App extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //   // 
    //   if (user) {
    //     const userRef = await createUserProfileDocument(user);
    //     userRef.onSnapshot(snapShot => {

    //       this.props.setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       }, () => {
    //         console.log(this.state);
    //       })
    //     })

    // }
    //     this.props.setCurrentUser(user)


    //   })
    console.log('empty')
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);