import { React } from "react";
import { Collapse } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';

const Contractorsform = () => {
    const { Panel } = Collapse;
   
    return (
        <>
            <div className="white-back">
                <h4 className="blueText">How do I join?</h4>
                <p>We want to make sure you’re a great fit for our team. Fill out this application and we’ll reach out to you to learn more about your organization.</p>
                <div className="everest-forms">
                    <div className="form">
                        <form>
                            <label><input type="text" placeholder="Company Name*" name="Companyname" /></label>
                            <label><input type="text" placeholder="Contact Name*" name="contactname" /></label>
                            <label><input type="text" placeholder="Contact Number*" name="contactnumber" /></label>
                            <label><input type="text" placeholder="Contact Email*" name="contactemail" /></label>
                            <label>
                                <Collapse
                                    bordered={true}
                                    defaultActiveKey={['']}
                                    expandIcon={({ isActive }) => <CaretLeftOutlined rotate={isActive ? 90 : 0} />}
                                    className="site-collapse-custom-collapse"
                                >
                                    <Panel header="Trade Services" key="1" className="site-collapse-custom-panel">
                                        <p className="formlabel">
                                            <label><input type="checkbox" name="Appliance" value="Appliance" />Appliance</label>
                                            <label><input type="checkbox" name="HVAC" value="HVAC" />HVAC</label>
                                            <label><input type="checkbox" name="Plumbing" value="Plumbing" />Plumbing</label>
                                            <label><input type="checkbox" name="Septic" value="Septic" />Septic</label>
                                            <label><input type="checkbox" name="Pool/Spa" value="Pool/Spa" />Pool/Spa</label>
                                            <label><input type="checkbox" name="Roof" value="Roof" />Roof</label>
                                            <label><input type="checkbox" name="Electrical" value="Electrical" />Electrical</label>
                                            <label><input type="checkbox" name="Garage Systems" value="Garage Systems" />Garage Systems</label>
                                            <label><input type="checkbox" name="Water Softener" value="Water Softener" />Water Softener</label>
                                            <label><input type="checkbox" name="Other" value="Other" />Other</label>
                                        </p>
                                    </Panel>
                                </Collapse>
                            </label>
                            <label>
                                <Collapse
                                    bordered={true}
                                    defaultActiveKey={['']}
                                    expandIcon={({ isActive }) => <CaretLeftOutlined rotate={isActive ? 90 : 0} />}
                                    className="site-collapse-custom-collapse"
                                >
                                    <Panel header="Services Areas" key="1" className="site-collapse-custom-panel">
                                        <p className="formlabel">
                                            <label><input type="checkbox" name="Utah" value="Utah" />Utah</label>
                                            <label><input type="checkbox" name="Nevada" value="Nevada" />Nevada</label>
                                            <label><input type="checkbox" name="Texas" value="Texas" />Texas</label>
                                        </p>
                                    </Panel>
                                </Collapse>
                            </label>
                            <label><input type="number" placeholder="Hourly Rate*" name="email" /></label>
                            <input type="submit" value="SUBMIT APPLICATION" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contractorsform;