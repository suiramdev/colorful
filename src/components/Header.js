import React, {Component} from 'react';
import './Header.scss';
import unknownUser from 'images/user_unknown.jpg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <h1>website</h1>
                </div>
                <div style={{flexGrow: 2}}>
                    <div className="header-search">
                        <SearchIcon />
                        <input type="text" placeholder="Search for an item, a brand…" />
                    </div>
                </div>
                <div style={{justifyContent: "flex-end"}}>
                    <a className="header-account">
                        <img src={unknownUser}></img>
                        <span>hello <b>Marius</b></span>
                        <ArrowDropDownIcon />
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;