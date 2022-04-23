import React, { Component } from 'react';
import './index.css'

export default class TabControl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    itemClick = (index) => {
        this.setState({
            currentIndex:index
        })
        this.props.itemClick(index);
    }


    render() {

      const {titles} = this.props;
      const {currentIndex} = this.state;

      return (
        <div className='tabs'>
            {
                titles.map((item,index) => {
                    return (
                      <div key={item} 
                          className={'tab_item ' + (index === currentIndex ? 'active' : '')}
                          onClick={e => this.itemClick(index)} >
                          <span>{item}</span>
                      </div>
                    )
                })
            }
        </div>
      )
    }
}
