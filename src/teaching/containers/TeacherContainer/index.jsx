import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
import {selectorProfileData} from "../../../profile/selectors/profile.es";
import {HelloTeacher} from "../../components/HelloTeacher";
import {selectorCourseDataByList} from "src/course/selectors/course.es";
import {selectorProfileCourses} from "src/profile/selectors/profile.es";
import {CoursePreviewListContainer} from "src/course/containers/CoursePreviewListContainer";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    const courseList = selectorProfileCourses(state);
    return {
        courseData: selectorCourseDataByList(state, courseList),
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
        const {courseData, profile} = this.props;
        return (
            <div className="center-block h-100">
                {this.renderCourseList()}
            </div>
        )
    }

    renderCourseList() {
        const {courseData, profile} = this.props;
        if (courseData && Object.keys(courseData).length) {
            return <CoursePreviewListContainer title="Ваши курсы" posterLink="/teaching/courses" profile={profile} courseData={courseData}/>;
        }
        return <HelloTeacher/>

    }
}

const TeacherContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Teacher));
export {
    TeacherContainer,
};
