
export default {

  namespace: 'home',

  state: {
    title: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  
      //在此监听路径的变化，当路径发生变化后进入回调
      // history.listen(({pathname}) => {
      //   if(pathname === '/home') {
      //     dispatch({type: 'save',payload: {title: '我是首页'}});
      //   }
      // })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
