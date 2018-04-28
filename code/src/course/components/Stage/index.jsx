import bemCn from 'bem-cn';
import {Button} from "common/components/Button/index";
import {Lesson} from "course/components/Lesson/index";
import React from 'react';
import {Collapse, ListGroupItem} from "reactstrap";
import './style.less';

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

    editStage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert(":wwef");
    };

    /**
     * Отображение компонента
     */
    render() {
        const {stageName, lessonsData} = this.props;
        const data = {
            1: {
                name: "first",
                type: 'lesson',
            },
            2: {
                name: "second",
                type: 'test',
            }
        };


        return (
            <div className={this.block.mix("m-b-10")()}>
                <ListGroupItem onClick={this.toggle}>
                    <span className={this.block('toggle')()} >
                        <i className={`fa fa-angle-${this.state.collapse ? 'up' : 'down'}`}/>
                    </span>
                    {stageName}
                    <span className={this.block('edit').mix("float-right")()} onClick={this.editStage}>
                        <i className="fa fa-pencil-alt"/>
                    </span>
                </ListGroupItem>
                <Collapse className={this.block('lesson-list').mix('m-t-10')()} isOpen={this.state.collapse}>
                    {
                        Object.values(data).map((lesson, key) => {
                            const {name, type} = lesson;
                            return <Lesson name={name} type={type} key={key}/>
                        })
                    }
                </Collapse>
            </div>
        )
    }

}

export {
    Stage,
};