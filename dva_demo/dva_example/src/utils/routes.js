import {Route, Redirect} from 'dva/router';
// import dynamic from 'dva/dynamic';

/**
 * 这是一个加载动态组件的方法，它会返回一个懒加载组件
 * @param {*} app dva()
 * @param {*} models models
 * @param {*} loadComponent loadComponent
 * @returns 
 */
function dynamic(app, models, loadComponent) {
    class DynamicComponent extends React.Component{
        state = {Component: null}

        componentDidMount() {
            Promise.all(
                [
                    Promise.all(models()),
                    loadComponent()
                ]
            ).then(([models,Component]) => {
                models.map(item => item.default).forEach(model => app.model(model))
                this.setState({Component});
            })
        }

        render() {
            const {Component} = this.state;
            return Component && <Component {...this.props} />
        }
    }
    return DynamicComponent;
}



/**
 * 把一个普通的路由配置对象变成Route组件
 */
// const app = dva();
function renderRoutes(routeConfig,app) {
    return routeConfig.map(({path,component,exact=false,routes=[],models= () => []}) => {
        return (
            <Route path={path} key={path} exact={exact} 
            // render={(routeProps) => {
            //     return <RouteComponent {...routeProps} routes={routes}/>
            // }} 普通路由加载
            //懒加载路由和models
            component={
                dynamic({
                    app,
                    models,
                    component: () => {
                        component().then((result) => {
                            let RouteComponent = result.default || result;
                            return (routeProps) => <RouteComponent {...routeProps} routes={routes}/>
                        })
                    }
                })
            }
            />  
        )
    })
}

/**
 * 子路由渲染模板
 * <Switch>
 *  {recderRoutes(props.routes)}
 * {renderRedirect('/',true,props.routes)}
 * </Switch>
 * 
 * @param {*} from 
 * @param {*} exact 
 * @param {*} routeConfig 
 * @returns 
 */
export function renderRedirect(from, exact, routeConfig) {
    let {path} = routeConfig.find(item => item.redirect) || routeConfig[0];
    return <Redirect exact={exact} from={from} to={path}/>
}