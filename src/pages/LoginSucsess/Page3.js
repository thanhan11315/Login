import React from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Form, Select } from "antd";
import axios from "axios";
import { useState } from "react";
const { Option } = Select;

function Page3() {
  const [provinces, setprovinces] = useState([]);
  const [province, setprovince] = useState("");
  const [districts, setdistricts] = useState([]);
  const [districtid, setdistrictid] = useState("01");
  const [district, setdistrict] = useState("");
  const [communes, setcommunes] = useState([]);
  const [communid, setcommunid] = useState("767");
  const [commune, setcommune] = useState("");

  console.log(provinces);
  console.log(districts);
  console.log(communes);

  // province
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
    setprovince(districts.province);
    setdistrictid(value);
    setdistrict("");
    setcommune("");
  };

  const onSearchprovince = (value) => {
    console.log("search:", value);
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
    setdistrict(communes.district);
    setcommunid(value);
    setcommune("");
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
    // var communcode = value
    var communsO = communes.filter((commune) => {
      return commune.code === value;
    });
    console.log(communsO);
    setcommune(communsO.name);
  };

  const onSearchcommune = (value) => {
    console.log(value);
  };

  // // autoLogin
  // const navigate = useNavigate();
  // const refreshPagechild = () => {
  //   const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
  //   console.log(getLocalUsername);
  //   if (getLocalUsername !== "zndkeadeeqwrmf") {
  //     navigate("/");
  //   }
  // };
  // useEffect(() => {
  //   refreshPagechild();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // // autoLogin

  return (
    <>
      <Form.Item
        label="Province"
        name="province"
        rules={[{ required: true }]}
      >
        <Select
          value={province}
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a province"
          optionFilterProp="children"
          onChange={onChangeprovince}
          onSearch={onSearchprovince}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {provinces.map((province, key) => {
            return (
              <Option key={key} value={province.code}>
                {province.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="District"
        name="distrist"
        rules={[{ required: true }]}
      >
        <Select
          value={district}
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a distrist"
          optionFilterProp="children"
          onChange={onChangedistrict}
          onSearch={onSearchdistrict}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {districts.map((district, key) => {
            return (
              <Option key={key} value={district.code}>
                {district.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="Commune"
        name="commune"
        rules={[{ required: true }]}
      >
        <Select
          style={{ width: "100%" }}
          value={commune}
          showSearch
          placeholder="Select a distrist"
          optionFilterProp="children"
          onChange={onChangecommune}
          onSearch={onSearchcommune}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {communes.map((commune, key) => {
            return (
              <Option key={key} value={commune.code}>
                {commune.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </>
  );
}

export default Page3;
