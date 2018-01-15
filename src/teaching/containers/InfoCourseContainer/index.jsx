import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {selectorProfileId} from "../../../profile/selectors/profile.es";
import {selectorCourse} from "../../../course/selectors/course.es";
import {updateCourse, getCourse} from "src/course/actions/course.es";
import './style.less';
import bemCn from 'bem-cn';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state, props) {
    const courseId = props.match.params.courseId;
    return {
        profileId: selectorProfileId(state),
        courseId,
        courseInfo: selectorCourse(state, courseId),
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
        updateCourse,
        getCourse,
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
            isChanged: false,
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('info-editor');
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
        if (!this.state.isChanged) {
            this.setState({
                isChanged: true,
            });
        }
        if ('file' === target.type) {
            console.log(target.files[0]);
            this.setState({
                [target.name]: target.files[0],
            });
        } else {
            this.setState({
                [target.name]: target.value,
            });
        }
    };

    onSubmit = async (event, data) => {
        event.preventDefault();
        const {updateCourse, match} = this.props;
        await updateCourse(data, match.params.courseId);
        this.setState({
            isChanged: false,
        })
    };

    async componentDidMount() {
        const {getCourse, courseId, courseInfo} = this.props;
        if (!courseInfo) {
            await getCourse(courseId);
        }
        const {name, poster, level, description} = this.props.courseInfo;
        this.setState({
            name,
            poster: poster || '',
            level: level || '0',
            description: description || '',
        });
    }

    render() {
        return (
            <Form onSubmit={(event) => this.onSubmit(event, this.getFormData())}>
                <FormGroup>
                    <Label for="name">Название курса</Label>
                    <Input type="text" name="name" value={this.state.name}
                           onChange={this.changeInputData} id="course-name" placeholder="Введите название компании"/>
                </FormGroup>
                <FormGroup>
                    <Label className="w-100" for="poster">Главное изображение курса</Label>
                    <img className={this.block('poster-preview').mix('m-b-10')()} src={this.state.poster}/>
                    <Input type="file" name="poster" onChange={this.changeInputData}
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
                <Button className="float-right" disabled={!this.state.isChanged} size="lg" color='success' type="submit">
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