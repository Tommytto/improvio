import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
const block = bemCn('btn');


class Button extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, onClick, type} = this.props;
        const btnProps = {
            type,
            onClick,
            className: bemWrapper ? block.mix(bemWrapper(block())) : block(),
        };
        return (
            <button {...btnProps}>
                {this.props.children}
            </button>
        );
    }

}

export default Button;