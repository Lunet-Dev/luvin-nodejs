import React, { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import { useRecoilState } from 'recoil';
import { Layout, Menu, Breadcrumb, Avatar, Popover } from 'antd';
import {
  NotificationOutlined,
  FacebookOutlined,
  ApiOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { useHistory, Link } from 'react-router-dom';

import authState from '../../atoms/auth';
import { ROLE_ADMIN_FANPAGE, ROLE_ADMIN } from '../../configs';
import Authendication from '../../utils/authendication';

// import './style.css';

const { Header, Content, Footer, Sider } = Layout;

const LayoutComponent = ({ children }) => {
  const [auth, setAuthState] = useRecoilState(authState);
  const [collapsed, updateCollapsed] = useState(false);
  const history = useHistory();

  const onCollapse = (_collapsed) => {
    updateCollapsed(_collapsed);
  };

  return (
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            {/* <!-- LOGO --> */}
            <div class="navbar-brand-box">
              <Link class="logo logo-dark" href="/">
                <span class="logo-sm">
                  <img src="/assets/images/logo.png" alt="" height="22" />
                </span>
                <span class="logo-lg">
                  <img src="/assets/images/logo.png" alt="" height="17" />
                </span>
              </Link>
              <Link class="logo logo-light" href="/">
                <span class="logo-sm">
                  <img src="/assets/images/logo.png" alt="" height="22" />
                </span>
                <span class="logo-lg">
                  <img src="/assets/images/logo.png" alt="" height="19" />
                </span>
              </Link>
            </div>

            {/* <button
              type="button"
              class="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button> */}

            {/* <!-- App Search--> */}
            {/* <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form> */}
          </div>

          <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ml-2"></div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="rounded-circle header-profile-user"
                  src={
                    auth.avatar ||
                    'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'
                  }
                  alt="Header Avatar"
                />

                <span class="d-none d-xl-inline-block ml-1" key="t-henry">
                  {auth.name}
                </span>
                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                {/* <!-- item--> */}
                {/* <a class="dropdown-item" href="#">
                  <i class="bx bx-user font-size-16 align-middle mr-1"></i>{' '}
                  <span key="t-profile">Profile</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-wallet font-size-16 align-middle mr-1"></i>{' '}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a class="dropdown-item d-block" href="#">
                  <span class="badge badge-success float-right">11</span>
                  <i class="bx bx-wrench font-size-16 align-middle mr-1"></i>{' '}
                  <span key="t-settings">Settings</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-lock-open font-size-16 align-middle mr-1"></i>{' '}
                  <span key="t-lock-screen">Lock screen</span>
                </a> */}
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item text-danger"
                  onClick={() => {
                    Authendication.logout();
                    setAuthState({});
                    history.push('/');
                  }}
                >
                  <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>{' '}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div class="vertical-menu">
        <div data-simplebar class="h-100">
          {/* <!--- Sidemenu --> */}
          <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul class="metismenu list-unstyled" id="side-menu">
              <li class="menu-title" key="t-menu">
                Menu
              </li>
              <li>
                <a
                  onClick={() => history.push('/users')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bxs-user-detail"></i>
                  <span key="t-contacts">Thành viên</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/vouchers')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-gift"></i>
                  <span key="t-contacts">Voucher</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/products')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-store"></i>
                  <span key="t-projects">Sản phẩm</span>
                </a>
              </li>

              <li>
                <a
                  onClick={() => history.push('/orders')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-task"></i>
                  <span key="t-tasks">Đơn hàng</span>
                </a>
              </li>

              <li>
                <a
                  onClick={() => history.push('/categories')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-list-ol"></i>
                  <span key="t-contacts">Chuyên mục sản phẩm</span>
                </a>
              </li>

              <li>
                <a
                  onClick={() => history.push('/posts')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-news"></i>
                  <span key="t-contacts">Bài viết</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/feedbacks')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-message-rounded"></i>
                  <span key="t-contacts">Phản hồi</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/pages')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-detail"></i>
                  <span key="t-contacts">Trang</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/tasty')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bxs-hourglass-bottom"></i>
                  <span key="t-contacts">Tasty</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/about-us')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bxs-hourglass-bottom"></i>
                  <span key="t-contacts">About Us</span>
                </a>
              </li>

              <li>
                <a
                  onClick={() => history.push('/settings')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-cog"></i>
                  <span key="t-contacts">Trang chủ</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => history.push('/pos')}
                  class="waves-effect"
                  aria-expanded="false"
                >
                  <i class="bx bx-wifi"></i>
                  <span key="t-contacts">POS</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Sidebar --> */}
        </div>
      </div>
      {/* <!-- Left Sidebar End --> */}

      {/* <!-- ============================================================== --> */}
      {/* <!-- Start right Content here --> */}
      {/* <!-- ============================================================== --> */}
      <div class="main-content">
        {children}
        <div id="modal-container"></div>
        <footer class="footer" style={{ position: 'unset' }}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">2020 © eComviet.</div>
              <div class="col-sm-6">
                <div class="text-sm-right d-none d-sm-block">
                  Design & Develop by eComviet
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* {<!-- end main content-->} */}
    </div>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
