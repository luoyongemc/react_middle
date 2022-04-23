import React, { useRef, forwardRef, useImperativeHandle } from 'react';
 
const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  //只让父组件控制某些属性
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }), [inputRef])
 
  return <input ref={inputRef} type="text"/>
})
 
export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef();
 
  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}