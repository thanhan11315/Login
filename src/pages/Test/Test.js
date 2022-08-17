import "./Test.css";
import TabTitle from "../TapTitle";
import { Form, Select } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const { Option } = Select;

const Test = () => {
  TabTitle("Register");

  // addreses

  const [provinces, setprovinces] = useState([]);
  const [districts, setdistricts] = useState([]);
  const [districtid, setdistrictid] = useState("");
  const [district, setdistrict] = useState("");
  const [communes, setcommunes] = useState([]);
  const [communid, setcommunid] = useState("");
  const [commune, setcommune] = useState("");
  const [address, setaddress] = useState("");

  console.log(provinces);
  console.log(districts);
  console.log(communes);

  // provinces
  useEffect(() => {
    var provinceApi = {
      method: "get",
      url: "https://api.mysupership.vn/v1/partner/areas/province",
      headers: {},
    };

    axios(provinceApi)
      .then(function (response) {
        setprovinces(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangeprovince = (value) => {
    console.log(`selected ${value}`);
    setdistrictid(value);
    setdistrict("");
    setcommune("");
    setaddress("");
    setcommunes([]);
  };

  const onSearchprovince = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    var districtApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/district?province=${districtid}`,
      headers: {},
    };
    axios(districtApi)
      .then(function (response) {
        setdistricts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [districtid]);

  //district

  const onChangedistrict = (value) => {
    var districtO = districts.filter((district) => {
      return district.code === value;
    });
    setdistrict(districtO[0].name);
    setcommunid(value);
    setcommune("");
    setaddress("");
  };

  const onSearchdistrict = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    var districtApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/commune?district=${communid}`,
      headers: {},
    };
    axios(districtApi)
      .then(function (response) {
        setcommunes(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [communid]);
  //commun

  const onChangecommune = (value) => {
    var communsO = communes.filter((commune) => {
      return commune.code === value;
    });
    console.log(communsO[0]);
    setcommune(communsO[0].name);

    var addresscode = communsO[0];
    delete addresscode.code;
    setaddress(addresscode);
  };

  const onSearchcommune = (value) => {
    console.log(value);
  };

  // adresses

  return (
    <>
      {/* addresses */}
      <div className="boxfake">
        <p>*</p>
        <Form.Item
          label="Province"
          rules={[{ required: true }]}
          style={{ width: "100%" }}
        >
          <Select
            showSearch
            placeholder="Select a province"
            optionFilterProp="children"
            onChange={onChangeprovince}
            onSearch={onSearchprovince}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {provinces === undefined
              ? ""
              : provinces.map((province, key) => {
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
            value={district}
            showSearch
            placeholder="Select a distrist"
            optionFilterProp="children"
            onChange={onChangedistrict}
            onSearch={onSearchdistrict}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {districts === undefined
              ? ""
              : districts.map((district, key) => {
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
            value={commune}
            showSearch
            placeholder="Select a distrist"
            optionFilterProp="children"
            onChange={onChangecommune}
            onSearch={onSearchcommune}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {communes === undefined
              ? ""
              : communes.map((commune, key) => {
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

export default Test;
