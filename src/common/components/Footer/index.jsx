import React from 'react';
import bemCn from 'bem-cn';



class Footer extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('footer');
    }

    render () {
        const {className} = this.props;

        return (
            <footer className={this.block.mix(className)()}>
                Footer
            </footer>
        );
    }

}

export {
    Footer,
};