import React from 'React';
import { Link } from 'gatsby';
import Layout from '../components/layout';
export default () => {
  return (
    <Layout>
      <h1>This is about page</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>lorem10</p>
    </Layout>
  );
};
