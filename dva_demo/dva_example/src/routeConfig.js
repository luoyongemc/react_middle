export default routeConfig = [
    {
        path: '/',
        component: () => import('./routes/IndexPage'),
        exact: false,
        routes: [
            {
                path:'/home',
                // component: <Home />,//普通写法
                component: () => import(/* webpackChunkName: 'Home' */'./routes/Home'),//懒加载路由
                models: () => [import(/* webpackChunkName: 'HomeModels' */'./models/home')],//懒加载models
                redirect: true
            },
            {
                path: 'user',
                component: () => import(/* webpackChunkName: 'User' */ './routes/User')
            }
        ]
    }
    
]