import React from 'react'
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import App from './App'

import Login from './pages/login'
import Admin from './admin'
import Button from './pages/ui/buttons'
import Loading from './pages/ui/loading'
import NoMatch from './pages/ui/nomatch'
import Gallery from './pages/ui/gallery'
import City from './pages/city/index'
import Order from './pages/order'
import Common from './common'

export default class IRouter extends React.Component{
     render() {
         return (
             <Router>
                <App>
                    <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                            <Route exact path="/ui/buttons" component={Button}/>
                            <Route exact path="/ui/loadings" component={Loading}/>
                            <Route exact path="/ui/gallery" component={Gallery}/>
                            <Route exact path="/city" component={City}/>
                            <Route exact path="/order" component={Order}/>
                            <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/details/:orderId" component={Login}/>
                        </Common>
                    }/>

                    <Route component={NoMatch}></Route>
                    </Switch>
                </App>
             </Router>
         )
     }
}
