import "./Test.css";
import { Form, Select, Button } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LoadingClear from "../../compoments/GlobalStyles/LoadingClear";
const { Option } = Select;

const TestNew = (props) => {
  // addreses

  const [provinces, setprovinces] = useState([]);
  const [districts, setdistricts] = useState([]);
  const [districtid, setdistrictid] = useState("");
  const [communes, setcommunes] = useState([]);
  const [communid, setcommunid] = useState("");
  const [loadingDistrict, setLoadingDistrict] = useState(false);
  const [loadingCommune, setLoadingCommune] = useState(false);
  const [loadingProvince, setLoadingProvince] = useState(false);
  const [commune, setcommune] = useState("");
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
  };

  const onSearchprovince = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    setLoadingDistrict(true);
    setLoadingCommune(true);
    var districtApi = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/areas/district?province=${districtid}`,
      headers: {},
    };
    axios(districtApi)
      .then(function (response) {
        setdistricts(response.data.results);
        setLoadingDistrict(false);
        setLoadingCommune(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [districtid]);

  //district

  const onChangedistrict = (value) => {
    setcommunid(value);
    setaddress("");
  };

  const onSearchdistrict = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    setLoadingCommune(true);
    setcommune("");
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

    var addresscode = communsO[0];
    // delete addresscode.code;
    setaddress(addresscode);
  };

  const onSearchcommune = (value) => {
    console.log(value);
  };

  // adresses

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {loadingProvince ? (
          <LoadingClear />
        ) : (
          <Form.Item
            name="provinceT"
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
        )}

        {loadingDistrict ? (
          <LoadingClear />
        ) : (
          <Form.Item
            name="districtT"
            style={{ width: "100%" }}
            label="District"
            rules={[{ required: true, message: "Please Input !" }]}
          >
            <Select
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
        )}

        {loadingCommune ? (
          <LoadingClear />
        ) : (
          <Form.Item
            name="communeT"
            style={{ width: "100%" }}
            label="Commune"
            rules={[{ required: true, message: "Please Input !" }]}
          >
            <Select
              showSearch
              placeholder="Select a distrist"
              optionFilterProp="children"
              value={commune}
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
        )}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          s
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loadingDistrict || loadingProvince || loadingCommune}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* addresses */}
    </>
  );
};

export default TestNew;
