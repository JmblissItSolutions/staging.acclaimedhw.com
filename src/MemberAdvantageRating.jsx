import React, { useEffect, useState } from "react";
import APIUrl from "../src/Api";
import ReactStars from "react-rating-stars-component";
import { Carousel } from 'antd';
import smgoogle from "./assets/images/googleicon.png";

export const UtahReview = () => {
    const ratingStart = {
        size: 20,
        value: 5,
        edit: false,
        color: "yellow",
        overflow: "hidden"
    };
    const [utahreviews, setUtahReviews] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getReviews/Utah`)
        setUtahReviews(result.data);
    }, []);
    return <div className="member-ti-reviews-container">
        <Carousel autoplay>
            <div className="about-crousel-item">
                <div className="member-ti-review-item source-Google">
                    {utahreviews.map((ind) => (
                        <div className="ti-inner" key={ind.id}>
                            <div className="ti-review-header">
                                <div className="ti-profile-img">
                                    <img src={ind.image} />
                                </div>
                                <div className="ti-profile-details">
                                    <div className="ti-name">
                                        {ind.author_name}
                                    </div>
                                    <div className="ti-date">
                                        {ind.date}
                                    </div>
                                    <div className="ti-logo">
                                        <img src={smgoogle} alt="sm-google" />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-stars star-lg">
                                <div className="rating-cont" data-rating="5">
                                    <ReactStars {...ratingStart} />
                                </div>
                            </div>
                            <div className="ti-review-content">
                                {ind.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Carousel>
    </div>
}
export const IdahoReview = () => {
    const ratingStart = {
        size: 20,
        value: 5,
        edit: false,
        color: "yellow",
        overflow: "hidden"
    };
    const [idahoreviews, setIdahoReviews] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getReviews/idaho`)
        setIdahoReviews(result.data);
    }, []);
    return <div className="member-ti-reviews-container">
        <Carousel autoplay>
            <div className="member-crousel-item">
                <div className="member-ti-review-item source-Google">
                    {idahoreviews.map((ind) => (
                        <div className="ti-inner" key={ind.id}>
                            <div className="member-ti-review-header">
                                <div className="member-ti-profile-img">
                                    <img src={ind.image} />
                                </div>
                                <div className="member-ti-profile-details">
                                    <div className="member-ti-name">
                                        {ind.author_name}
                                    </div>
                                    <div className="ti-date">
                                        {ind.date}
                                    </div>
                                    <div className="ti-logo">
                                        <img src={smgoogle} alt="sm-google" />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-stars star-lg">
                                <div className="rating-cont" data-rating="5">
                                    <ReactStars {...ratingStart} />
                                </div>
                            </div>
                            <div className="ti-review-content">
                                {ind.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Carousel>
    </div>
}
export const NevadaReview = () => {
    const ratingStart = {
        size: 20,
        value: 5,
        edit: false,
        color: "yellow",
        overflow: "hidden"
    };
    const [nevadareviews, setNevadaReviews] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getReviews/nevada`)
        setNevadaReviews(result.data);
    }, []);
    return <div className="member-ti-reviews-container">
        <Carousel autoplay>
            <div className="member-crousel-item">
                <div className="member-ti-review-item source-Google">
                    {nevadareviews.map((ind) => (
                        <div className="ti-inner" key={ind.id}>
                            <div className="member-ti-review-header">
                                <div className="member-ti-profile-img">
                                    <img src={ind.image} />
                                </div>
                                <div className="member-ti-profile-details">
                                    <div className="member-ti-name">
                                        {ind.author_name}
                                    </div>
                                    <div className="ti-date">
                                        {ind.date}
                                    </div>
                                    <div className="ti-logo">
                                        <img src={smgoogle} alt="sm-google" />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-stars star-lg">
                                <div className="rating-cont" data-rating="5">
                                    <ReactStars {...ratingStart} />
                                </div>
                            </div>
                            <div className="ti-review-content">
                                {ind.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Carousel>
    </div>
}
export const TexasReview = () => {
    const ratingStart = {
        size: 20,
        value: 5,
        edit: false,
        color: "yellow",
        overflow: "hidden"
    };
    const [texasreviews, setTexasReviews] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getReviews/texas`)
        setTexasReviews(result.data);
    }, []);
    return <div className="member-ti-reviews-container">
        <Carousel autoplay>
            <div className="member-crousel-item">
                <div className="member-ti-review-item source-Google">
                    {texasreviews.map((ind) => (
                        <div className="ti-inner" key={ind.id}>
                            <div className="member-ti-review-header">
                                <div className="member-ti-profile-img">
                                    <img src={ind.image} />
                                </div>
                                <div className="member-ti-profile-details">
                                    <div className="member-ti-name">
                                        {ind.author_name}
                                    </div>
                                    <div className="ti-date">
                                        {ind.date}
                                    </div>
                                    <div className="ti-logo">
                                        <img src={smgoogle} alt="sm-google" />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-stars star-lg">
                                <div className="rating-cont" data-rating="5">
                                    <ReactStars {...ratingStart} />
                                </div>
                            </div>
                            <div className="ti-review-content">
                                {ind.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Carousel>
    </div>
}
export const ArizonaReview = () => {
    const ratingStart = {
        size: 20,
        value: 5,
        edit: false,
        color: "yellow",
        overflow: "hidden"
    };
    const [arizonareviews, setArizonaReviews] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/getReviews/arizona`)
        setArizonaReviews(result.data);
    }, []);
    return <div className="member-ti-reviews-container">
        <Carousel autoplay>
            <div className="member-crousel-item">
                <div className="member-ti-review-item source-Google">
                    {arizonareviews.map((ind) => (
                        <div className="ti-inner" key={ind.id}>
                            <div className="member-ti-review-header">
                                <div className="member-ti-profile-img">
                                    <img src={ind.image} />
                                </div>
                                <div className="member-ti-profile-details">
                                    <div className="member-ti-name">
                                        {ind.author_name}
                                    </div>
                                    <div className="ti-date">
                                        {ind.date}
                                    </div>
                                    <div className="ti-logo">
                                        <img src={smgoogle} alt="sm-google" />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-stars star-lg">
                                <div className="rating-cont" data-rating="5">
                                    <ReactStars {...ratingStart} />
                                </div>
                            </div>
                            <div className="ti-review-content">
                                {ind.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Carousel>
    </div>
}


















