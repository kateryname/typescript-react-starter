import * as React from 'react';
import './App.css';
import Hello from "./containers/Hello";
// import StatefulHello from "./StatefulHello";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Hello/>
                {/*<StatefulHello name={'Katty'}/>*/}
            </div>
        );
    }
}

export default App;
