import React from 'react';
import bemCn from 'bem-cn';
import './style.less'
import {Link} from "react-router-dom";

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
                <Link to="/"><span className="m-l-20">I M P </span></Link>
                {children}
            </header>
        );
    }
}

export {
    Header,
};