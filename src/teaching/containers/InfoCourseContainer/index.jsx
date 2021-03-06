import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {selectorProfileId} from "../../../profile/selectors/profile.es";
import {selectorCourse} from "../../../course/selectors/course.es";
import {updateCourse, getCourse} from "src/course/actions/course.es";
import './style.less';
import bemCn from 'bem-cn';
import {updatePoster} from "../../../course/actions/course.es";

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
        updatePoster,
        getCourse,
    }, dispatch);
}

class InfoCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
        const {name, level, description} = this.state;
        return {
            name,
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
        this.setState({
            [target.name]: target.value,
        });
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
        const {name, level, description} = this.props.courseInfo;
        this.setState({
            name,
            level: level || '0',
            description: description || '',
        });
    }

    onChangePoster = (event) => {
        const {updatePoster, match} = this.props;
        const target = event.currentTarget;
        updatePoster({
            [target.name]: target.files[0],
        }, match.params.courseId);
    };

    render() {
        const {courseInfo} = this.props;

        return (
            <Form onSubmit={(event) => this.onSubmit(event, this.getFormData())}>
                <FormGroup>
                    <Label for="name">Название курса</Label>
                    <Input type="text" name="name" value={this.state.name}
                           onChange={this.changeInputData} id="course-name" placeholder="Введите название компании"/>
                </FormGroup>
                <FormGroup>
                    <Label className="w-100" for="poster">Главное изображение курса</Label>
                    <img className={this.block('poster-preview').mix('m-b-10')()}
                         src={courseInfo ? courseInfo.poster : ''}/>
                    <Input type="file" name="poster" onChange={this.onChangePoster}
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
                {this.renderButton()}
            </Form>
        );
    }

    renderButton() {
        if (this.state.isChanged) {
            return (
                <Button className="float-right" size="lg" color='success'
                        type="submit">
                    Подтвердить
                </Button>
            )
        }
        // else return (
        //     <Button tag={Link} to={} size="lg" color='success'
        //             type="submit">
        //         Подтвердить
        //     </Button>
        // )
    }
}

const InfoCourseContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoCourse));
export {
    InfoCourseContainer,
};