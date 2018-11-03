import * as React from 'react';

interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    currentEnthusiasm: number
}

class StatefulHello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currentEnthusiasm: this.props.enthusiasmLevel || 1}
    }

    onIncrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
    };

    onDecrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm - 1)
    };

    render() {
        return (
            <div className='hello'>
                <div className='greeting'>
                    Hello + {name + getExlamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({currentEnthusiasm});
    }
}

export default StatefulHello;

function getExlamationMarks(numChar: number) {
    return Array(numChar + 1).join('!');
}