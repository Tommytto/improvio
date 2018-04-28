import React from 'react';
import bemCn from 'bem-cn';
import {Button as BootstrapButton} from 'reactstrap';

class Button extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('btn');
    }

    render () {
        return (
            <BootstrapButton {...this.props}>
                {this.props.children}
            </BootstrapButton>
        );
    }

}

export {
    Button,
};