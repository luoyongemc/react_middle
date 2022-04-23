import React from 'react';
import {Link} from 'umi';

export default function UserDetail(props) {
  return (
    <div>
        <p>ID:{props.match.params.id}</p>
    </div>
  )
}
