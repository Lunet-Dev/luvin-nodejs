import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import toastr from 'toastr';
import includes from 'lodash/includes';

import 'toastr/build/toastr.min.css';

import { RouterRequireAuth, RouterRequireUnAuth } from './components/Route';

import Login from './containers/LoginPage';
import Users from './containers/UsersPage';
import Categories from './containers/CategoriesPage';
import Products from './containers/ProductsPage';
import Orders from './containers/OrdersPage';
import CreatePost from './containers/CreatePost';
import Settings from './containers/SettingsPage';
import Posts from './containers/PostsPage';
import EditPages from './containers/EditPages';
import Feedbacks from './containers/FeedbacksPage';
import Tasty from './containers/TastyPage';
import AboutUs from './containers/AboutUsPage';
import Vouchers from './containers/VouchersPage';
import Pos from './containers/PosPage';

import { getUserInfo } from './apis/auth';
import authState from './atoms/auth';

import { ROLE_ADMIN, ROLE_STAFF, USER_ROLES } from './configs';

import Authendication from './utils/authendication';

// import 'antd/dist/antd.css';

function App() {
  const [loading, setLoading] = useState(true);
  const setAuthState = useSetRecoilState(authState);
  // eslint-disable-next-line
  const _getUserInfo = async () => {
    if (Authendication.getToken()) {
      try {
        setLoading(true);
        const response = await getUserInfo();
        if (includes(USER_ROLES, response.data.role)) {
          setAuthState(response.data);
        } else {
          Authendication.logout();
        }
        setLoading(false);
      } catch (error) {
        toastr['error'](error.message);
      }
    }
  };

  useEffect(() => {
    _getUserInfo();

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      onclick: null,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
  }, []);

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         height: '100vh',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <img src="./loading.svg" alt="loading" />
  //     </div>
  //   );
  // }

  return (
    <Router>
      <Switch>
        <RouterRequireUnAuth exact path="/" component={Login} />
        <RouterRequireAuth path="/users" component={Users} role={ROLE_STAFF} />
        <RouterRequireAuth
          path="/categories"
          component={Categories}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/vouchers"
          component={Vouchers}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/products"
          component={Products}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/orders"
          component={Orders}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/create-post"
          component={CreatePost}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/settings"
          component={Settings}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth path="/posts" component={Posts} role={ROLE_STAFF} />
        <RouterRequireAuth
          path="/post/:postSlug"
          component={CreatePost}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/pages"
          component={EditPages}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/feedbacks"
          component={Feedbacks}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth path="/pos" component={Pos} role={ROLE_STAFF} />
        <RouterRequireAuth path="/tasty" component={Tasty} role={ROLE_STAFF} />
        <RouterRequireAuth
          path="/about-us"
          component={AboutUs}
          role={ROLE_STAFF}
        />
        {/* <RouterRequireAuth
          path="/fanpage"
          component={Fanpage}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/widget"
          component={Widget}
          role={ROLE_ADMIN}
        />
        <RouterRequireAuth
          exact
          path="/event"
          component={Event}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/event/new"
          component={CreateEvent}
          role={ROLE_STAFF}
        />
        <RouterRequireAuth
          path="/event/:eventId"
          component={CreateEvent}
          role={ROLE_STAFF}
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
