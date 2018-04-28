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
        const {bemWrapper, course} = this.props;
        return (
            <div className={block()}>
                {this.renderPoster()}
                <div className={this.bemContent()}>
                    <header className={this.bemHeader()}>
                        {course.name}
                    </header>
                    {this.renderAuthor()}
                    <div className={this.bemRating()}>
                        {course.description}
                    </div>
                    {/*<div className={this.bemPrice()}>*/}
                        {/*Всего за {course.price} рублей!*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

    renderPoster() {
        const {course, link} = this.props;
        if (link) {
            return (
                <Link to={`${link}/${course.id}`}>
                    <div className={this.bemPosterWrapper()} style={{backgroundImage: `url(${course.poster})`}}/>
                </Link>
            )
        }
        return <div className={this.bemPosterWrapper()} style={{backgroundImage: `url(${course.poster})`}}/>;
    }

    renderAuthor() {
        const {author} = this.props;
        if (author) {
            return (
                <div className={this.bemAuthor()}>
                    {`${author.lastName} ${author.firstName}`}
                </div>
            )
        }
        return null;
    }

}

export default CoursePreview;