import React, { useState, useEffect } from 'react';
import {Layout, Menu, Image, message} from 'antd';
import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, ProfileOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'

const { Header } = Layout;

function SpaHeader() {
  const location = useLocation();
  const userId = localStorage.getItem('user-id');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (userId) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [userId]);

  const logout = () => {
    setAuth(false);
    localStorage.removeItem('user-id');
    message.info('Logout success !')
  };

  return (
    <Header id="header">
      <div className="logo">
        <NavLink to="/">
          <Image
            width={64}
            preview={false}
            src={Logo}
          />
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        disabledOverflow
        defaultSelectedKeys={[location.pathname.substr(1) === "" ? 'home' : location.pathname.substr(1)]}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="posts" icon={<ProfileOutlined />}>
          <NavLink to="/posts">Posts</NavLink>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          <NavLink to="/profile">Profile</NavLink>
        </Menu.Item>
        {
          auth ?
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              <NavLink to="/login" onClick={logout}>Logout</NavLink>
            </Menu.Item>
            :
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <NavLink to="/login">Login</NavLink>
            </Menu.Item>
        }
      </Menu>
    </Header>
  );
}

export default SpaHeader;
