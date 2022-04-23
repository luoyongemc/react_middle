// export function patchRoutes({routes}) {
//     console.log(routes);
//     // routes.unshift({
//     //     path: 'login',
//     //     exact: true,
//     //     component: requestAnimationFrame('./login').default
//     // })  把login放到src外面
// }


//有些时候路由是后台通过权限配置或者返回的  动态的

let extraRoutes;

export function modifyClientRenderOpts(opts) {
    //渲染钱会把路由进行合并
    opts.routes.unshift(...extraRoutes);
    return opts;
}

export function render(oldRender) {
    fetch('/api/routes').then(res => {console.log(res,'resJson'); return res.json()})
    .then(res => {
        console.log(res,222);
        extraRoutes = res.map(item => {
            let component = item.component;
            component = require(`./components/${component}`).default;
            return {...item,component}
        })
        oldRender()
    })
}