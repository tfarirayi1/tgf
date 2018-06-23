//packages
import React from 'react';
import {Route,Link,withRouter,Switch} from 'react-router-dom';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
//components
import {Routes} from './_routes';
import {configureAuth} from './_helpers';
import _404 from './_404';
//styles
import './styles/shell.css';
//main-code
class Shell extends React.Component{
    componentDidMount(){
        configureAuth();
    }
    render(){
        const {location}=this.props;
        const top_panel=(
            <div className="top_panel">
                <div className="social_buttons">
                    <a className="social_button" href="/facebook" target="_blank">
                        <Icon icon={['fab','facebook-f']}/>
                    </a>
                    <a className="social_button" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                        <Icon icon={['fab','behance']}/>
                    </a>
                    <a className="social_button" href="/facebook" target="_blank">
                            <Icon icon={['fab','instagram']}/>
                    </a>
                    <a className="social_button" href="/facebook" target="_blank">
                        <Icon icon={['fab','linkedin-in']}/>
                    </a>
                </div>
                <div className="navigation">
                    {
                        Routes.map((item,index)=>{
                            if(location.pathname===item.endpoint){
                                return null;
                            }
                            return(
                                <div key={index} className="navigation_link">
                                    <Link to={item.endpoint}>{item.link_name}</Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
        const view_panel=(
            <div className="view_panel">
                <Switch>
                    {
                        Routes.map((item,index)=>{
                            return(
                                <Route key={index} exact path={item.endpoint} component={item.component}/>
                            );
                        })
                    }
                    <Route component={_404}/>
                </Switch>
            </div>
        );
        const level1=(
            <div className="level1">
                {top_panel}
                {view_panel}
            </div>
        );
        return(
            <div id="Shell">
                {level1}
            </div>
        );
    }
}
export default withRouter(Shell);