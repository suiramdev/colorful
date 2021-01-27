import React, {Component} from 'react';
import './Header.scss';
import unknownUser from 'images/user_unknown.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <h1>website</h1>
                </div>
                <div style={{flexGrow: 2}}>

                </div>
                <div style={{justifyContent: "flex-end"}}>
                    <a className="header-account">
                        <img src={unknownUser}></img>
                        <span>hello <b>Marius</b></span>

                    </a>
                </div>
            </div>
        );
    }
}

export default Header;