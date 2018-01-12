import React from 'react';
import bemCn from 'bem-cn';
import './style.less'

class Header extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('header');
    }

    render () {
        const {bemWrapper, children} = this.props;

        return (
            <header className={bemWrapper ? this.block.mix(bemWrapper(this.block()))() : this.block()}>
                {children}
            </header>
        );
    }
}

export {
    Header,
};