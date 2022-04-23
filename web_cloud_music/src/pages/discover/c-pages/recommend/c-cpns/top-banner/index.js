import React, { memo } from 'react';

import { useEffect,useRef,useCallback,useState} from 'react';
import {useDispatch, useSelector,shallowEqual} from 'react-redux';
import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/actionCreators';

import { BannerControl,BannerLeft,BannerRight,BannerWrapper } from './style';

const HYTopBanner = memo((props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    //组件和redux关联：获取数据进行操作
    const {topBanners} = useSelector(state => ({
        topBanners: state.getIn(["recommend","topBanners"])
    }),shallowEqual)
    const dispatch = useDispatch();

    const {getBanners} = props;

    //其它的hooks
    const bannerRef = useRef();
    useEffect(() => {
        dispatch(getTopBannerAction())
    },[dispatch]);

    const bannerChange = useCallback((from,to) => {
        console.log(from,to,111);
        setTimeout(() => {
            setCurrentIndex(to);
        },0);
    },[])

    //其它业务逻辑
    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + 
                        "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
        <div className='banner wrap-v2'>
            <BannerLeft>
            <Carousel effect="fade" autoplay={true} ref={bannerRef} beforeChange={bannerChange}>
                {
                    topBanners.map((item,index) => {
                        return (
                            <div className='banner-item' key={item.imageUrl}>
                                <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                            </div>
                        )
                    })
                }
            </Carousel>
            </BannerLeft>
            <BannerRight></BannerRight>
            <BannerControl>
                <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                <button className='btn right' onClick={e => bannerRef.current.next()}></button>
            </BannerControl>
        </div>
    </BannerWrapper>
  )
})

export default HYTopBanner