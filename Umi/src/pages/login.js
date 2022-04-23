import React from 'react';
import {history} from 'umi';

export default function Login(props) {

  const handleLogin = (e) => {
      localStorage.setItem('isLogin','true');
      if(props.location.state && props.location.state.from) {
          history.push(props.location.state.from)
      }else {
          history.push('/');
      }
  }

  return (
    <div>
        <button onClick={handleLogin}>登录</button>
    </div>
  )
}
