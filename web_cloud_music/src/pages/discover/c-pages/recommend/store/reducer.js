import {Map} from 'immutable';

import * as actionType from './constants';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    albums: [],
    topUpList: {},
    topNewList: {},
    topOriginList: {},

    settleSings: [],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_TOP_BANNERS:
            return state.set("topBanners",action.topBanners);//返回一个新的对象
        case actionType.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends",action.hotRecommends);
        case actionType.CHANGE_NEW_ALBUM:
            return state.set("albums",action.newAlbums);
        case actionType.CHANGE_UP_LIST:
            return state.set("topUpList", action.topUpList);
            case actionType.CHANGE_NEW_LIST:
            return state.set("topNewList", action.topNewList);
            case actionType.CHANGE_ORIGIN_LIST:
            return state.set("topOriginList", action.topOriginList);
            case actionType.CHANGE_SETTLE_SONGER:
            return state.set("settleSings", action.settleSings)
        default:
            return state;
    }
}

export default reducer;