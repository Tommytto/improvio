import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
import {selectorCourseData} from "src/course/selectors/course.es";
import CoursePreviewList from "src/course/components/CoursePreviewList";


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps (state) {
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
function mapDispatchToProps (dispatch) {
    return bindActionCreators({

    }, dispatch);
}

class UserMain extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('user-main');
    }

    render () {
        const {courseData} = this.props;
        return (
            <div className={this.block.mix('center-block')()}>
                <h1>All courses</h1>
                {courseData ? <CoursePreviewList courseData={courseData}/> : null}
            </div>
        );
    }

}

const UserMainContainer = connect(mapStateToProps, mapDispatchToProps)(UserMain);
export {
    UserMainContainer,
};