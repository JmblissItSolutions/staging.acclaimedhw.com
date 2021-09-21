import React from "react";
import { StarFilled, CheckOutlined } from '@ant-design/icons';


const UniqueFeature = ({ uniquefeature, filterDropdown }) => {
  const features = uniquefeature
  const profeature = filterDropdown
  // const featurelist = (filterDropdown.unique_features)
  console.log(features)
  console.log(profeature)
  return (
    <>

      <section className="unique-features">
        <div>
        </div>
        <h3 className="upper text-center lato light-back">Unique Features</h3>
        <div className="container uniqufeature">
          <div className="table-cont table-cont-2 new-table-dsn">
            <div className="table-left">
              {features ? features.map(feature => {
                return (
                  <div className="in-box">
                    <div key={feature.id}>{feature.name}</div>
                  </div>
                )
              }) : null}
            </div>
            {profeature.map((item, index) => (
              <div className="table-right" key={index}>
                {item.unique_features.map((c, i) => (
                  <>
                    {c.value == "No" ? <div className="feature"></div> : <div className="feature included"><CheckOutlined className="antcheck" /></div>}
                  </>
                ))}
              </div>
            ))}
            <div data-num="5" className="table-right mobile">
              <p className="feature-text-mobile"><span>Central Vacuum</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Registers</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Free ReKey (travel fees may apply)</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Grills</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Heat Lamps</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Exterior hose bibs</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Pressure Regulator Valve</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Angle Stops, and Gate Valves</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Toilet Replacement</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Interior Hose Bibs</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Shower Heads</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Shower Arms - Faucets</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Toilet replacement</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile">
                <span>
                  <span>
                    <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                  </span>
                </span>
                <span>
                  <span>
                    <a data-toggle="modal" data-target="#forty_items_popup_utah">No Fault Coverage</a>
                  </span>
                </span>
              </p>
              <div className="feature"><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Refrigerator</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>R-22 Conversion</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>No Fault (code upgrades &amp; mismatched systems)</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile">
                <span>
                  <span>
                    <a data-toggle="modal" data-target="#no_fault_popup_utah">No Fault Coverage</a>
                  </span>
                </span>
              </p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Radiant heating/broiler</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              <p className="feature-text-mobile"><span>Washer and Dryer</span></p>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature"  ><i className="achi white-checkmark"></i></div>
              <div className="feature included"  ><i className="achi white-checkmark"></i></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default UniqueFeature