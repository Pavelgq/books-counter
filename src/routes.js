import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Library from './pages/library/library'

const Routes = () => {

    return (
        <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/library' component={Library} />
        </Switch>
    )
}

export default Routes