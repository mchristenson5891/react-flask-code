import React from 'react';
import { Link }from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
      <Header>
        <List>
          <List.Item><Link to ='/'>Home</Link></List.Item>
          <List.Item><Link to='/dogs'>dog</Link></List.Item>
        </List>
      </Header>
    )
};

export default HeaderComponent;
