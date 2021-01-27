import React, {Component} from 'react';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main-stories">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121">
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="60.5" cy="60.5" r="60.5" fill="#eaabc8"/>
                        </svg>
                        <span>New</span>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121">
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="60.5" cy="60.5" r="60.5" fill="#eaabc8"/>
                        </svg>
                        <span>New</span>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="121" viewBox="0 0 121 121">
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="60.5" cy="60.5" r="60.5" fill="#eaabc8"/>
                        </svg>
                        <span>New</span>
                    </a>
                </div>
                <div className="main-showcases">
                    <div>
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                    <a className="showcase-tall"></a>
                </div>
            </div>
        );
    }
}

export default Main;