import LoadingClear from "./LoadingClear";
import { Select, Form } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const { Option } = Select;

function Status(props) {
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    var statusApi = {
      method: "get",
      url: "https://api.mysupership.vn/v1/partner/orders/status",
      headers: {},
    };

    axios(statusApi)
      .then(function (response) {
        console.log(response.data.results);
        setStatus(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChange = (value) => {
    console.log(value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      {loading ? (
        <LoadingClear />
      ) : (
        <Form.Item name="status" label="Trạng Thái">
          <Select
            showSearch
            mode="multiple"
            placeholder="Select"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {status === undefined
              ? " "
              : status.map((status) => {
                  console.log(status);
                  return (
                    <Option key={status.key} value={status.value}>
                      {status.value}
                    </Option>
                  );
                })}
          </Select>
        </Form.Item>
      )}
    </>
  );
}

export default Status;
