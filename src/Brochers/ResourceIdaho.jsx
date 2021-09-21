import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import APIUrl from "../Api"
import Resource from "./Resource"
import brochersbanner from "../assets/images/brochers-banner.png";
import locationmarker from "../assets/images/location-marker.png";
import pdf from "../assets/images/pdf.png";
import video1 from "../assets/images/vid-1.jpg";
import video2 from "../assets/images/vid-2.jpg";
import video3 from "../assets/images/vid-3.jpg";
import video4 from "../assets/images/vid-4.jpg";
import play from "../assets/images/play.png";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import Carousel from 'react-bootstrap/Carousel';

const ResourceIdaho = () => {
    let location_id = 5
    const [pdfitems, setPdfItems] = useState([]);
    useEffect(async () => {
        const url = "/getLocationBrochures/" + `${location_id}`
        const result = await APIUrl.get(`${url}`)
        setPdfItems(result.data);
    }, []);
    const brocherlist = (pdfitems.brochures);
    const videolist = (pdfitems.videos);

    // pdf
    const [isPdf, setIsPdf] = useState(false);
    const [pdfID, setpdfID] = useState(false);
    const showpdf = (e) => {
        setIsPdf(true);
        setpdfID(e.target.id)
    }
    const handleOk = () => {
        setIsPdf(false);
    };
    const handleCancel = () => {
        setIsPdf(false);
    };
    // Modal
    const [isModalVisible, setisModalVisible] = useState(false);
    const [modalID, setModalID] = useState();
    const showModal = (e) => {
        setisModalVisible(true);
        setModalID(e.target.id)
    }
    const handleOk1 = () => {
        setisModalVisible(false);
    };
    const handleCancel1 = () => {
        setisModalVisible(false);
    };
    console.log(videolist)
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <Resource />
            <section className="location-header-name">
                <div className="inner">
                    <span className="big-upper">Idaho Resources</span>
                </div>
            </section>
            <section className="documents-light-back">
                <div className="container">
                    <h2>Documents</h2>
                    <div className="doc-cont">
                        {brocherlist ?
                            brocherlist.map((item) => {
                                return (
                                    <div className="doc" key={item.id}>
                                        <i className="achi-pdf">
                                            <img src={pdf} alt="pdf" className="pdf_img" id={item.file_name} onClick={showpdf} /></i>
                                        <p className="name">{item.title}</p>
                                        <Modal style={{ width: "680px", height: "400px" }} onOk={handleOk} visible={isPdf}
                                            onCancel={handleCancel}
                                            okButtonProps={{ disabled: true }}
                                            cancelButtonProps={{ disabled: true }}>
                                            <button className="clsbtn" onClick={handleCancel}>x</button>
                                            <iframe className="pdf_iframe" src={pdfID}></iframe>
                                        </Modal>
                                    </div>
                                );
                            })
                            : null
                        }
                    </div>
                </div>
            </section>
            <section className="videos-light-back">
                <div className="container">
                    <h2>videos</h2>
                    <div className="video-img">
                        {videolist ?
                            videolist.map((item) => {
                                return (
                                    <div className="vid-cont" key={item.id}>
                                        <div className="video">
                                            <div className="img-cont">
                                                <img src={item.thumb_nail} id={item.file_name} onClick={showModal} alt="video1" className="video1" />
                                                <p className="name">{item.title}</p>
                                                <Modal style={{ width: "680px", height: "400px" }} visible={isModalVisible} onOk={handleOk1}
                                                    onCancel={handleCancel1}
                                                    okButtonProps={{ disabled: true }}
                                                    cancelButtonProps={{ disabled: true }}>
                                                    <button className="clsbtn" onClick={handleCancel1}>x</button>
                                                    <iframe 
                                                    allow="accelerometer;
                                                    autoplay;
                                                    encrypted-media;
                                                    gyroscope;
                                                    picture-in-picture"
                                                    allowFullScreen
                                                    data-interval="false" className="pdf_iframe" src={modalID}></iframe>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : null}
                    </div>
                </div>
            </section>
        </>
    )
};
export default ResourceIdaho;