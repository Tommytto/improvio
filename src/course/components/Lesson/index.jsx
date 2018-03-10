import bemCn from 'bem-cn';
import React from 'react';
import {Collapse, ListGroupItem} from "reactstrap";
import './style.less';

class Lesson extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('lesson')
    }


    /**
     * Отображение компонента
     */
    render() {
        const {name, type} = this.props;


        return (
            <ListGroupItem className={this.block()}>
                {name + " " + type}
            </ListGroupItem>
        )
    }

}

export {
    Lesson,
};