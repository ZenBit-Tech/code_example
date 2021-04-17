import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import PublicRoute from 'Utils/PublicRoute';
import { Home } from 'Pages/Home/Home';
import { Layout } from 'antd';
import { Header } from 'Components/Header/index';
function App() {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header />
        <Content>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
