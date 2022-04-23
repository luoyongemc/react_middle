import React, { useEffect } from 'react';

/**
 * 自定义Hook本质上只是一种对hooks函数代码逻辑的抽取，严格意义上来说，它本身并不算React的特性
 * 
 * 需求：所有的组件在创建和销毁时都进行打印
    组件被创建：打印 组件被创建了；
    组件被销毁：打印 组件被销毁了；
 */
 
const Home = (props) => {
  useLoggingLife("Home");
  return <h2>Home</h2>
}
 
const Profile = (props) => {
  useLoggingLife("Profile");
  return <h2>Profile</h2>
}
 
export default function CustomLifeHookDemo01() {
  useLoggingLife("CustomLifeHookDemo01");
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home/>
      <Profile/>
    </div>
  )
}


//hooks函数不能在普通函数中调用(会直接报错)，但是当函数用use开头时，就成了自定义hook 便可以调用钩子函数了
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);
 
    return () => {
      console.log(`${name}组件被销毁掉了`);
    }
  }, []);
}