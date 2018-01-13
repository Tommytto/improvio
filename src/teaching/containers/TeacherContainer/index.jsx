import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {Button, Jumbotron} from "reactstrap";
import bemCn from 'bem-cn';
// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';
import './style.less';
import {selectorProfileData} from "../../../profile/selectors/profile.es";
import {HelloTeacher} from "../../components/HelloTeacher";
import CoursePreviewList from "../../../profile/components/CoursePreviewList";
/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        courseList: selectorProfileData(state).courses,
        profile: selectorProfileData(state),
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        // exampleSimple,
        // exampleGet,
        // exampleCreate,
        // exampleUpdate,
        // exampleDelete,
    }, dispatch);
}

class Teacher extends React.Component {
    constructor() {
        super();

        this.initBem();
    }

    initBem() {
        this.block = bemCn('teaching');
    }

    /**
     * Отображение компонента
     */
    render () {
        const {courseList, profile} = this.props;
        return (
            <div className={this.block()}>
                {
                    courseList && courseList.length ? <CoursePreviewList posterLink="/teaching/courses" profile={profile} courseList={courseList}/> : <HelloTeacher/>
                }
            </div>
        )
    }

}

const TeacherContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Teacher));
export {
    TeacherContainer,
};
