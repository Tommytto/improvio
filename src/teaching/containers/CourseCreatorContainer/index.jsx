import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import bemCn from "bem-cn";
import {Button, Input} from "reactstrap";
import './style.less';
import {selectorProfileId} from "../../../profile/selectors/profile.es";
import {createCourse} from "src/course/actions/course.es";

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

class CourseCreator extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('course-creator');
    }

    changeInputData = (event) => {
        const target = event.currentTarget;
        this.setState({
            [target.name]: target.value,
        });
    };

    onClickCreate = async () => {
        const {history, profileId, createCourse} = this.props;
        const name = this.state.name;
        console.log(name);
        const courseId = await createCourse({name, author: profileId});
        history.push(`/teaching/courses/${courseId}`);
    };

    /**
     * Отображение компонента
     */
    render() {
        return (
            <div className={this.block.mix('center-block')()}>
                <div className="col-xs-12 col-md-6 col-lg-4 m-t-40">
                    <h1>Придумай название!</h1>
                    <Input
                        type="text"
                        name="name"
                        className="m-t-20"
                        value={this.state.name}
                        onChange={this.changeInputData}
                        id="course-name"
                        placeholder="Введите название курса"
                    />
                    <Button
                        className="m-t-10"
                        size="lg"
                        block
                        color="primary"
                        onClick={this.onClickCreate}
                    >
                        Продолжить
                    </Button>
                </div>
            </div>
        )
    }

}

const CourseCreatorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CourseCreator));
export {
    CourseCreatorContainer,
};
