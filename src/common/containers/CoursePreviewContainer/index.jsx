import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';

import {getCourse} from 'src/common/actions/course-list';
import CoursePreview from 'src/common/components/CoursePreview'
import {selectorCourse} from '../../selectors/course-list.es';

const block = bemCn('course');

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps (state, {id}) {
    const course = selectorCourse(state, id)
    return {
        course,
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps (dispatch, {id}) {
    return bindActionCreators({
        // getCourse: (id) => dispatch(getCourse(id)),
    }, dispatch);
}

// class CoursePreviewContainer extends React.Component {
//     constructor() {
//         super();
//         this.initBem();
//     }
//
//     initBem() {
//         this.content = block('content');
//     }
//
//     render () {
//         const {courseIdList} = this.props;
//         return (
//             <div className={block()}>
//             </div>
//         );
//     }
//
// }

const CoursePreviewContainer = connect(mapStateToProps, mapDispatchToProps)(CoursePreview);
export default CoursePreviewContainer;