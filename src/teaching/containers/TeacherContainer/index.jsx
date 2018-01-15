import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
import {selectorProfileData} from "../../../profile/selectors/profile.es";
import {HelloTeacher} from "../../components/HelloTeacher";
import CoursePreviewList from "src/course/components/CoursePreviewList";
import {selectorCourseDataByList} from "src/course/selectors/course.es";
import {selectorProfileCourses} from "src/profile/selectors/profile.es";

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
        const {courseData, profile} = this.props;
        console.log(courseData);
        return (
            <div className={this.block.mix('center-block')()}>
                {
                    courseData && Object.keys(courseData).length ? <CoursePreviewList posterLink="/teaching/courses" profile={profile} courseData={courseData}/> : <HelloTeacher/>
                }
            </div>
        )
    }

}

const TeacherContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Teacher));
export {
    TeacherContainer,
};
