import "./Test.css";
import TabTitle from "../TapTitle";
import { Form, Select } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const { Option } = Select;

const TestPick = () => {
  TabTitle("Register");

  // addreses

  const [Pickprovinces, setPickprovinces] = useState([]);
  const [Pickdistricts, setPickdistricts] = useState([]);
  const [Pickdistrictid, setPickdistrictid] = useState("");
  const [Pickdistrict, setPickdistrict] = useState("");
  const [Pickcommunes, setPickcommunes] = useState([]);
  const [Pickcommunid, setPickcommunid] = useState("");
  const [Pickcommune, setPickcommune] = useState("");
  const [Pickaddress, setPickaddress] = useState("");

  console.log(Pickprovinces);
  console.log(Pickdistricts);
  console.log(Pickcommunes);

  // provinces
  useEffect(() => {
    var provinceApi = {
      method: "get",
      url: "https://api.mysupership.vn/v1/partner/areas/province",
      headers: {},
    };

    axios(provinceApi)
      .then(function (response) {
        setPickprovinces(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangePickprovince = (value) => {
    console.log(`selected ${value}`);
    setPickdistrictid(value);
    setPickdistrict("");
    setPickcommune("");
    setPickaddress("");
    setPickcommunes([]);
  };

  const onSearchPickprovince = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    var PickdistrictApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/district?province=${Pickdistrictid}`,
      headers: {},
    };
    axios(PickdistrictApi)
      .then(function (response) {
        setPickdistricts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Pickdistrictid]);

  //district

  const onChangePickdistrict = (value) => {
    var PickdistrictO = Pickdistricts.filter((Pickdistrict) => {
      return Pickdistrict.code === value;
    });
    setPickdistrict(PickdistrictO[0].name);
    setPickcommunid(value);
    setPickcommune("");
    setPickaddress("");
  };

  const onSearchPickdistrict = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    var PickdistrictApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/commune?district=${Pickcommunid}`,
      headers: {},
    };
    axios(PickdistrictApi)
      .then(function (response) {
        setPickcommunes(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Pickcommunid]);
  //commun

  const onChangePickcommune = (value) => {
    var PickcommunsO = Pickcommunes.filter((commune) => {
      return commune.code === value;
    });
    console.log(PickcommunsO[0]);
    setPickcommune(PickcommunsO[0].name);

    var Pickaddresscode = PickcommunsO[0];
    delete Pickaddresscode.code;
    setPickaddress(Pickaddresscode);
  };

  const onSearchPickcommune = (value) => {
    console.log(value);
    console.log(Pickaddress);
  };

  // adresses

  return (
    <>
      {/* addresses */}
      <div className="boxfake">
        <p>*</p>
        <Form.Item
          label="province"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Select
            showSearch
            placeholder="Select a province"
            optionFilterProp="children"
            onChange={onChangePickprovince}
            onSearch={onSearchPickprovince}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {Pickprovinces === undefined
              ? ""
              : Pickprovinces.map((province, key) => {
                  return (
                    <Option key={key} value={province.code}>
                      {province.name}
                    </Option>
                  );
                })}
          </Select>
        </Form.Item>
      </div>

      <div className="boxfake">
        <p>*</p>
        <Form.Item
          style={{ width: "100%" }}
          label="District"
          rules={[{ required: true }]}
        >
          <Select
            value={Pickdistrict}
            showSearch
            placeholder="Select a distrist"
            optionFilterProp="children"
            onChange={onChangePickdistrict}
            onSearch={onSearchPickdistrict}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {Pickdistricts === undefined
              ? ""
              : Pickdistricts.map((district, key) => {
                  return (
                    <Option key={key} value={district.code}>
                      {district.name}
                    </Option>
                  );
                })}
          </Select>
        </Form.Item>
      </div>
      <div className="boxfake">
        <p>*</p>
        <Form.Item
          style={{ width: "100%" }}
          label="Commune"
          rules={[{ required: true }]}
        >
          <Select
            value={Pickcommune}
            showSearch
            placeholder="Select a distrist"
            optionFilterProp="children"
            onChange={onChangePickcommune}
            onSearch={onSearchPickcommune}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {Pickcommunes === undefined
              ? ""
              : Pickcommunes.map((commune, key) => {
                  return (
                    <Option key={key} value={commune.code}>
                      {commune.name}
                    </Option>
                  );
                })}
          </Select>
        </Form.Item>
      </div>
      {/* addresses */}
    </>
  );
};

export default TestPick;
