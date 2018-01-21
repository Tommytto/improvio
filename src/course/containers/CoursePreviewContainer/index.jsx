import React from 'react';
import bemCn from 'bem-cn';

import {connect} from "react-redux";
import {selectorUser} from "src/user/selectors/user.es";
import {getUser} from "src/user/actions/user.es";
import {bindActionCreators} from "redux";
import CoursePreview from "src/course/components/CoursePreview";


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state, props) {
    return {
        author: selectorUser(state, props.course.author),
        authorId: props.course.author,
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
        getUser,
    }, dispatch);
}

class CoursePreviewWrap extends React.Component {

    componentDidMount() {
        const {getUser, author, authorId} = this.props;
        if (!author) {
            getUser(authorId);
        }
    }

    render () {
        const {course, link, author} = this.props;
        return <CoursePreview course={course} link={link} author={author}/>
    }

}

const CoursePreviewContainer = connect(mapStateToProps, mapDispatchToProps)(CoursePreviewWrap);

export {
    CoursePreviewContainer,
};
