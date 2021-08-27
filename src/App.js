import React from "react";
import Quiz from "./Quiz";
import Login from "./Login";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";
function App()
{
    return (
        <Router>
            <div className="App">
                
                <Switch>
                    <ProtectedRoute path="/quiz" exact component={Quiz}/>
                    <Route path="/" exact><Login/></Route>
                    <Route path="/unauthorized" exact>
                        <h1>Unauthorized access,please enter right information</h1>
                        <Login/>
                    </Route>
                    <Route path="*" component={()=>"404 NOT FOUND"}/>
                </Switch>
            </div>
        </Router>
    )
}
export default App;