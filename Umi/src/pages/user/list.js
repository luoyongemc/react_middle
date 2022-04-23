import React from 'react';
import {Link} from 'umi';

export default function UserList(props) {
  return (
    <div>
        <ul>
            <li><Link to="/user/detail/1">张三</Link></li>
            <li><Link to="/user/detail/2">李四</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
  )
}
