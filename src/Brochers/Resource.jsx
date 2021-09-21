import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import brochersbanner from "../assets/images/brochers-banner.png";
import locationmarker from "../assets/images/location-marker.png";
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
    },
}));

const Resource = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const rep = (APIUrl.defaults.assetsURL)
    const [location, setLocation] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/get_holocations`)
        setLocation(result.data);
    }, []);

    return (
        <>
            <div className="home_page broshure-pg">
                <div className="state_list">
                   
                    <Collapse in={checked} onMouseLeave={() => setChecked(false)}>
                        <div className="state_box">
                            <h1>choose a location</h1>
                            <div onClick={() => setChecked(false)} className="clsstatelist">X</div>
                            <div className={classes.paper}>
                                {location.map(item => (
                                    <>
                                        <Link className="colwidth" style={{ backgroundImage: `url(${rep}/${item.image})` }} key={item.id} to={`${item.slug}`}>{item.location_name}</Link>
                                    </>
                                ))}
                            </div>
                        </div>
                    </Collapse>
                </div>
                <div className="top_img">
                    <img src={brochersbanner} alt=" brochers-banner" />
                </div>
                <div className="brochures-text">
                    <h1>Brochures</h1>
                </div>
                <section className="change-location-header">
                    <div className="inner">
                        <span className="big-upper"></span>
                        <span className="location">
                            <label>
                                <Switch checked={checked} onChange={handleChange} />
                                Change Location
                                <img src={locationmarker} alt=" brochers-banner" className="locationmarker" />
                            </label>
                        </span>
                    </div>
                </section>
            </div>
        </>
    )
};
export default Resource;