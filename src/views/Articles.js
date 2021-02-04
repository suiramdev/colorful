import React, {Component} from 'react';
import './Articles.scss';
import hoodie from 'images/hoodie_01.png';

class Articles extends Component {
    render() {
        return (
            <div className="articles">
                <div className="articles-header"></div>
                <div className="articles-content">
                    <a className="article">
                        <div className="article-showcase">
                            <img src={hoodie} />
                        </div>
                        <span className="article-name">Item name</span>
                        <span className="article-price">39.99 €</span>
                    </a>
                    <a className="article">
                        <div className="article-showcase">
                            <img src={hoodie} />
                        </div>
                    </a>
                    <a className="article">
                        <div className="article-showcase">
                            <img src={hoodie} />
                        </div>
                    </a>
                    <a className="article">
                        <div className="article-showcase">
                            <img src={hoodie} />
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Articles;