import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from '../../containers/Landing/Landing';
import Taxa from '../../containers/Taxa/Taxa';
import Samples from '../../containers/Samples/Samples';

const Main = (props) => {
    return (
        <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/taxa" component={Taxa} />
            <Route path="/samples" component={Samples} />
            <Route path="/samples-groups" render={() => <h1>Samples Groups</h1>} />
            <Route path="/mapseq" render={() => <h1>MAPseq</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Redirect from="/" to="/landing" />
            {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        </Switch>
    )
}

export default Main;