import "./Test.css";
import TabTitle from "../TapTitle";
import { Form, Select } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LoadingProvince from "../../compoments/GlobalStyles/LoadingProvince";
import LoadingDistrict from "../../compoments/GlobalStyles/LoadingDistrict";
import LoadingCommune from "../../compoments/GlobalStyles/LoadingCommune";
const { Option } = Select;

const Test = (props) => {
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
  const [loadingDistrict, setLoadingDistrict] = useState(false);
  const [loadingCommune, setLoadingCommune] = useState(false);
  const [loadingProvince, setLoadingProvince] = useState(false);
  console.log(provinces);
  console.log(districts);
  console.log(communes);

  // provinces
  useEffect(() => {
    setLoadingProvince(true);
    var provinceApi = {
      method: "get",
      url: "https://api.mysupership.vn/v1/partner/areas/province",
      headers: {},
    };

    axios(provinceApi)
      .then(function (response) {
        setprovinces(response.data.results);
        setLoadingProvince(false);
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
    props.getAddress("");
    props.getDistrict("");
  };

  const onSearchprovince = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    setLoadingDistrict(true);
    var districtApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/district?province=${districtid}`,
      headers: {},
    };
    axios(districtApi)
      .then(function (response) {
        setdistricts(response.data.results);
        setLoadingDistrict(false);
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
    props.getAddress("");
    props.getDistrict(districtO[0]);
  };

  const onSearchdistrict = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    setLoadingCommune(true);
    var districtApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/commune?district=${communid}`,
      headers: {},
    };
    axios(districtApi)
      .then(function (response) {
        setcommunes(response.data.results);
        console.log(response.data.results);
        setLoadingCommune(false);
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
    // delete addresscode.code;
    setaddress(addresscode);
    console.log(address);
    props.getAddress(communsO[0]);
  };

  const onSearchcommune = (value) => {
    console.log(value);
  };

  // adresses

  return (
    <>
      {loadingProvince ? <LoadingProvince /> : ""}
      <Form.Item
        name="province"
        label="Province"
        rules={[{ required: true, message: "Please Input" }]}
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

      <div className="boxfake">
        {loadingDistrict ? <LoadingDistrict /> : ""}
        <p>*</p>
        <Form.Item
          // name={"district"}
          style={{ width: "100%" }}
          label="District"
          rules={[{ required: true, message: "sasdasd" }]}
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
        {loadingCommune ? <LoadingCommune /> : ""}
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
