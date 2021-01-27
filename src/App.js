import React, {Component} from 'react';
import './App.scss';
import Header from "components/Header";
import Explorer from 'components/Explorer';
import Main from 'views/Main';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__content">
                    <Explorer />
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;