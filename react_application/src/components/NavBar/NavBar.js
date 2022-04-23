import React, { Component } from 'react';
import './style.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
         <div className='nav-item nav-left'>{this.props.leftSlot}</div> 
         <div className='nav-item nav-center'>{this.props.centerSlot}</div> 
         <div className='nav-item nav-right'>{this.props.rightSlot}</div> 
      </div>
    )
  }
}
