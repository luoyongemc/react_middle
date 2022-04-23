import React, { Component } from 'react';
import NavBar from './NavBar';
import { Button } from 'antd';

export default class index extends Component {
  render() {
    return (
      <div>
          {/* <NavBar>
              <span>aaa</span>
              <span>bbb</span>
              <span>ccc</span>
          </NavBar> */}
          <Button type="primary">Primary Button</Button>
          <NavBar leftSlot={<span>aaa</span>} centerSlot={<span>bbb</span>} rightSlot={<span>ccc</span>}>
          </NavBar>
          {/* <NavBar />
          <NavBar /> */}
      </div>
    )
  }
}
