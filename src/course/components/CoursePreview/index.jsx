import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
import {Link} from "react-router-dom";
const block = bemCn('course-preview');


class CoursePreview extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    static defaultProps = {
        link: '#',
    };

    initBem() {
        this.bemPosterWrapper = block('poster-wrapper');
        this.bemPoster = block('poster');
        this.bemContent = block('content');
        this.bemHeader = block('header');
        this.bemAuthor = block('author');
        this.bemRating = block('rating');
        this.bemPrice = block('price');
    }

    render () {
        const {bemWrapper, course, link} = this.props;
        return (
            <div className={bemWrapper ? block.mix(bemWrapper(block())) : block()}>
                <Link to={`${link}/${course.id}`}>
                    <div className={this.bemPosterWrapper()} style={{backgroundImage: `url(${course.poster})`}}>
                        {/*<img className={this.bemPoster()} src={course.poster}/>*/}
                    </div>
                </Link>
                <div className={this.bemContent()}>
                    <header className={this.bemHeader()}>
                        {course.name}
                    </header>
                    <div className={this.bemAuthor()}>
                        {course.author}
                    </div>
                    {/*<div className={this.bemRating()}>*/}
                        {/*Оценили {course.rating.count} раз!*/}
                    {/*</div>*/}
                    {/*<div className={this.bemPrice()}>*/}
                        {/*Всего за {course.price} рублей!*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

}

export default CoursePreview;