import { Form, Select } from "antd";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LoadingClear from "./LoadingClear";
const { Option } = Select;

const AddressManagement = (props) => {
  // addreses

  const [provinces, setprovinces] = useState([]);
  const [districts, setdistricts] = useState([]);
  const [districtid, setdistrictid] = useState("");
  const [communes, setcommunes] = useState([]);
  const [communid, setcommunid] = useState("");
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
    setcommunes([]);
    // props.getAddress("");
    // props.getDistrict("");
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
    // var districtO = districts.filter((district) => {
    //   return district.code === value;
    // });
    // setdistrict(districtO[0].name);
    setcommunid(value);
    console.log(value);
    // props.getAddress("");
    // props.getDistrict(districtO[0]);
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
    console.log(value);
  };

  const onSearchcommune = (value) => {
    console.log(value);
  };

  // adresses

  return (
    <>
      {loadingProvince ? (
        <LoadingClear />
      ) : (
        <Form.Item name="province" label="Province" style={{ width: "100%" }}>
          <Select
            showSearch
            placeholder="Select province"
            optionFilterProp="children"
            mode="multiple"
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
        <Form.Item style={{ width: "100%" }} name="district" label="District">
          <Select
            mode="multiple"
            showSearch
            placeholder="Select distrist"
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
          </Select>{" "}
        </Form.Item>
      )}

      {loadingCommune ? (
        <LoadingClear />
      ) : (
        <Form.Item name="commune" style={{ width: "100%" }} label="Commune">
          <Select
            mode="multiple"
            showSearch
            placeholder="Select communes"
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
      )}
      {/* addresses */}
    </>
  );
};

export default AddressManagement;
