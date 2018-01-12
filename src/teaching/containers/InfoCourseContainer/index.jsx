import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {createCourse} from "../../actions/teaching.es";
import {selectorProfileId} from "../../../profile/selectors/profile.es";

// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state) {
    return {
        profileId: selectorProfileId(state),
        // courseInfo:
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createCourse,
    }, dispatch);
}

class InfoCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            level: '0',
            description: '',
        };
        this.initBem();
    }

    initBem() {

    }

    getFormData() {
        const {name, poster, level, description} = this.state;
        return {
            name,
            poster,
            level,
            description,
        }
    }

    changeInputData = (event) => {
        const target = event.currentTarget;
        this.setState({
            [target.name]: target.value,
        });
    };

    onSubmit = (event, data) => {
        event.preventDefault();
        const {profileId, createCourse} = this.props;
        if (profileId) {
            createCourse(data, profileId);
        }
    };

    render() {
        return (
            <Form onSubmit={(event) => this.onSubmit(event, this.getFormData())}>
                <FormGroup>
                    <Label for="name">Название курса</Label>
                    <Input type="text" name="name" value={this.state.name}
                           onChange={this.changeInputData} id="course-name" placeholder="Введите название компании"/>
                </FormGroup>
                <FormGroup>
                    <Label for="poster">Главное изображение курса</Label>
                    <Input type="text" name="poster" value={this.state.poster} onChange={this.changeInputData}
                           id="course-poster" placeholder="Добавьте ссылку на изображение"/>
                </FormGroup>
                <FormGroup>
                    <Label for="level">Сложность курса</Label>
                    <Input type="select" name="level" value={this.state.level} onChange={this.changeInputData}
                           id="course-level">
                        <option value={0}>Элементарный</option>
                        <option value={1}>Средний</option>
                        <option value={2}>Профессиональный</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Описание курса</Label>
                    <Input type="textarea" name="description" value={this.state.description}
                           onChange={this.changeInputData}
                           id="course-description" placeholder="Введите ваше описание в нескольких предложениях"/>
                </FormGroup>
                <Button className="float-right" size="lg" color='success' type="submit">
                    Подтвердить
                </Button>
            </Form>
        );
    }
}

const InfoCourseContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoCourse));
export {
    InfoCourseContainer,
};