import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
import CoursePreview from '../CoursePreview/index';
import CoursePreviewContainer from '../../containers/CoursePreviewContainer/index';
const block = bemCn('course-preview-list');


class CoursePreviewList extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, courseIdList} = this.props;

        return (
            <div className={bemWrapper ? block.mix(bemWrapper(block())) : block()}>
                {this.renderCourseList()}
            </div>
        );
    }

    renderCourseList() {
        const {courseIdList} = this.props;
        return courseIdList.map((item) => {
            return <CoursePreviewContainer key={item} id={item}/>
        })
    }

}

export default CoursePreviewList;