import bemCn from 'bem-cn';
import {Button} from "common/components/Button/index";
import React from 'react';
import {Collapse} from "reactstrap";


class Stage extends React.Component {
    constructor() {
        super();
        this.state = {
            collapse: false,
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('stage')
    }

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    /**
     * Отображение компонента
     */
    render() {
        const {stageName, lessonsData} = this.props;

        return (
            <div className={this.block.mix("m-b-10")()}>
                <Button color="warning" block onClick={this.toggle}>{stageName}</Button>
                <Collapse isOpen={this.state.collapse}>
                    {"lolol"}
                </Collapse>
            </div>
        )
    }

}

export {
    Stage,
};