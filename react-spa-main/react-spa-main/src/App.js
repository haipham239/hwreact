import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import "./styles/main.scss";
import { Layout } from 'antd';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './containers/HomePage';
import PostPage from "./containers/PostPage";
import PostDetailPage from "./containers/PostDetailPage";
import LoginPage from "./containers/LoginPage";
import ProfilePage from "./containers/ProfilePage";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/posts" component={PostPage} />
            <Route exact path="/posts/:postId" component={PostDetailPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </Layout>
  );
}

export default App;
