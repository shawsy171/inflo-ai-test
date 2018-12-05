import React from 'react';

import Layout from '../Layout/layout';
import ApiBrowser from '../containers/ApiBrowser/ApiBrowser';
import ApiProvider from '../context/ApiContext/ApiContext';

const IndexPage = () => (
  <Layout>
    <ApiProvider>
      <ApiBrowser />
    </ApiProvider>
  </Layout>
)

export default IndexPage
