import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import {Layout} from 'antd';
import NavBar from '../components/NavBar';

const {Content} = Layout;


function IndexPage() {
  return (
    <Layout>
      <NavBar />
      <Content>content</Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
