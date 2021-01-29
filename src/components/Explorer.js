import React, {Component} from 'react';
import './Explorer.scss';

class Explorer extends Component {
    render() {
        return (
            <div className="explorer">
                <h1>Explore</h1>
                <ul>
                    <li><span>✨</span>New articles</li>
                    <li><span>💕</span>Trendings</li>
                    <li><span>👕</span>T-Shirts & hoodies</li>
                    <li><span>👖</span>Pants</li>
                    <li><span>👞</span>Shoes</li>
                    <li><span>💎</span>Accessories</li>
                </ul>
            </div>
        );
    }
}

export default Explorer;