import React, { useEffect, useRef } from 'react';
 
class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>
  }
}
 
function TestCpn2(props) {
  return <h2>TestCpn2</h2>
}
 
export default function RefHookDemo01() {
 
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();
 
  function changeDOM() {
    titleRef.current.innerHTML = "Hello World";
    inputRef.current.focus();
    console.log(testRef.current);
    console.log(testRef2.current);
  }
 
  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text"/>
      <TestCpn ref={testRef}/>
      {/* <TestCpn2 ref={testRef2}/>  对于函数式组件，不能传ref过去（类组件可以），
      会直接报错  除非函数式组件使用forwardRef包裹forwardRef(CPN(props,ref)) 然后再通过ref绑定到某个元素上去*/}
 
      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}