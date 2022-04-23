import React, { Component } from 'react';

import TabControl from './TabControl';

const nums = ['新款','精选','流行'];

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTitle: '新款'
        }
    }
    itemClick = (index) => {
        this.setState({
            currentTitle: nums[index]
        })
    }

    render() {

        const {currentTitle} = this.state;

        return (
        <div>
            <TabControl itemClick = {(index) => {this.itemClick(index)}} titles={nums}/>
            <div>{currentTitle}</div>
        </div>
        )
    }
}
