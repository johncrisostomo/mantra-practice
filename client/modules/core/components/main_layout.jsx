import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <div className="container" >
      {content()}
    </div>
  </div>
);

export default Layout;
