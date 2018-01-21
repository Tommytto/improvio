import React from 'react';
import bemCn from 'bem-cn';
import './style.less'
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    static defaultProps = {
        className: '',
    };

    initBem() {
        this.block = bemCn('header');
    }

    render () {
        const {className, children} = this.props;

        return (
            <header className={this.block.mix(className)()}>
                <Link to="/">
                    <span>IMPROVIO</span>
                </Link>
                {children}
            </header>
        );
    }
}

export {
    Header,
};