import React from 'react';
import bemCn from 'bem-cn';

import './style.less'

class Button extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('btn');
    }

    render () {
        const {bemWrapper, onClick, type} = this.props;

        const btnProps = {
            type,
            onClick,
            className: bemWrapper ? this.block.mix(bemWrapper(this.block()))() : this.block(),
        };
        return (
            <button {...btnProps}>
                {this.props.children}
            </button>
        );
    }

}

export {
    Button,
};