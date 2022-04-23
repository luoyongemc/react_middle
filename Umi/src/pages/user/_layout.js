import React from 'react';
import {Link} from 'umi';

export default function Layout(props) {
  return (
    <div>
        <ul>
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
  )
}
