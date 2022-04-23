import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


import {discoverMenu} from '@/common/local-data.js';
import request from '../../services/axios';

import { DiscoverWrapper,TopMenu } from './style';
import { useEffect } from 'react';

const HYDiscover = memo((props) => {
  const {route} = props;

  useEffect(() => {
    request({
        url: "/banner"
    }).then(res => {
        console.log(res);
    })
  },[])

  return (
    <DiscoverWrapper>
        <div className='top'>
            <TopMenu className='wrap-v1'>
                {
                    discoverMenu.map((item,index) => {
                        return (
                            <div className='item' key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })
                }
            </TopMenu>
        </div>
        {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default HYDiscover