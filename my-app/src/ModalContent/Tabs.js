import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialData = {
  name: "",
  desc: "",
  webR: "",
  id: 0,
};

const baseURL = "http://localhost:3000/ImmunisationAlerts";

function TableTabs() {
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState(initialData);
  const [addedData, setAddedData] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddData({
      ...addData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      response && response.data && setData(response.data);
    });
  }, [addedData]);

  const handleClick = () => {
    axios
      .post(baseURL, {
        id: addData.id,
        name: addData.name,
        Description: addData.desc,
        WebReference: addData.webR,
      })
      .then(() => {
        setAddData(initialData);
        setAddedData(true);
      });
  };

  const handleSelectionChange = (e) => {
    setSelectedValue(e.target.value[0]);
  };

  function handleDelete() {
    axios.delete(`${baseURL}/${selectedValue}`).then(() => {
      setAddedData(true);
    });
  }

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Immunisation Alerts</Tab>
          <Tab>Lab Alerts</Tab>
          <Tab>DI Alerts</Tab>
          <Tab>Procedure Alerts</Tab>
          <Tab>RX Specific Alerts</Tab>
          <Tab>DX Specific Alerts</Tab>
          <Tab>Patient Specific Alerts</Tab>
        </TabList>

        <TabPanel>
          <div className="content">
            <div className="table-data">
              <h4 className="heading">Immunization Alerts</h4>
              <label htmlFor="searchquery" className="search">
                Find
              </label>
              <input type="search" name="searchquery"></input>
              <button type="button" className="dlt-btn" onClick={handleDelete}>
                Delete
              </button>

              <table>
                <thead>
                  <tr key={"header"}>
                    <input type="checkbox" />
                    <th>Entry No. </th>
                    <th>name </th>
                    <th>Description </th>
                    <th>Web Reference </th>
                  </tr>
                </thead>
                {data &&
                  data.map((item, i) => (
                    <tr key={i}>
                      <input
                        value={Object.values(item).map((val) => val)}
                        type="checkbox"
                        onChange={handleSelectionChange}
                      />
                      {Object.values(item).map((val) => (
                        <td>{val}</td>
                      ))}
                    </tr>
                  ))}
              </table>
            </div>

            <div className="add-info">
              <div>
                <label htmlFor="id">Entry No.</label>&nbsp;
                <input
                  value={addData.id}
                  onChange={handleChange}
                  type="text"
                  name="id"
                ></input>
              </div>
              <div>
                <label htmlFor="name">Name</label>&nbsp;
                <input
                  value={addData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                ></input>
              </div>
              <div>
                <label htmlFor="desc">Description</label>&nbsp;
                <input
                  value={addData.desc}
                  onChange={handleChange}
                  type="text"
                  name="desc"
                ></input>
              </div>
              <div>
                <label htmlFor="webR">Web Ref.</label>&nbsp;
                <input
                  value={addData.webR}
                  onChange={handleChange}
                  type="text"
                  name="webR"
                ></input>
              </div>
              <button onClick={handleClick} type="submit" className="add-btn">
                Add
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default TableTabs;
