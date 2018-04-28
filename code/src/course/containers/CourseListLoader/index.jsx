import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCourseList} from "src/course/actions/course.es";
import {selectorCourseList} from "src/course/selectors/course.es";


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        courseList: selectorCourseList(state),
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
        getCourseList,
    }, dispatch);
}

class CourseListLoaderWrap extends React.Component {
    componentDidMount() {
        const {getCourseList, courseList} = this.props;
        if (!courseList || !courseList.length) {
            getCourseList();
        }
    }
    render () {
        return null;
    }

}

const CourseListLoader = connect(mapStateToProps, mapDispatchToProps)(CourseListLoaderWrap);

export {
    CourseListLoader,
};