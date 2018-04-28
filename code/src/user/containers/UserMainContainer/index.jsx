import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
import {selectorCourseData} from "src/course/selectors/course.es";
import CoursePreviewList from "src/course/components/CoursePreviewList";
import {CoursePreviewListContainer} from "src/course/containers/CoursePreviewListContainer";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps(state) {
    return {
        courseData: selectorCourseData(state),
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

class UserMain extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('user-main');
    }

    render() {
        return (
            <div className={this.block.mix('center-block clearfix')()}>
                {this.renderCourseData()}
            </div>
        );
    }

    renderCourseData() {
        const {courseData} = this.props;
        if (courseData && Object.keys(courseData).length) {
            return (
                <div className={this.block()}>
                    <CoursePreviewListContainer title="Все курсы" courseData={courseData}/>
                </div>
            )
        }
        return <h3>Извините курсов еще нет, скорее регистрируйтесь и станьте первым преподавателем</h3>
    }

}

const UserMainContainer = connect(mapStateToProps, mapDispatchToProps)(UserMain);
export {
    UserMainContainer,
};