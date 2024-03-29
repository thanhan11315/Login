import { Select, Form } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
const { Option } = Select;

function Warehouse(props) {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    var warehousesApi = {
      method: "get",
      url: "https://api.mysupership.vn/v1/partner/warehouses?",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMGU5NTI2Nzc5Y2Y3Nzk2ZTY3ZjllNGQzZmNkZDg0Yzk0OWY4M2IxOTQxMzM1YTQwODQ2NGQwMDU4NzNiMDM3NDAwMDM1MjRhZTZlMjJhIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwZTk1MjY3NzljZjc3OTZlNjdmOWU0ZDNmY2RkODRjOTQ5ZjgzYjE5NDEzMzVhNDA4NDY0ZDAwNTg3M2IwMzc0MDAwMzUyNGFlNmUyMmEiLCJpYXQiOjE2NjAwMzY1NDgsIm5iZiI6MTY2MDAzNjU0OCwiZXhwIjoxNjkxNTcyNTQ4LCJzdWIiOiI0MTMxMSIsInNjb3BlcyI6W119.01rKRfFAVw-3G-8FLNo2TGvNVjdNZE1LaxjRqKJ7FKL2NT-s2iZS-oRnYetm3wZPVc-dDPiG3b1ptPXyN0noOcBiT5VFQaP2T_jEFZdLJeas-mL9bOtqmWnseyP6wtqjfFEI3HBSZLCgIZDSYZY8XRZdCCwq5zxXocHywfpXVoDrAPJSa64YY-nD6YJo6FThtBh_LHfdGQ51j_qH8OChyF3O0TiCUmlDD8G0K_91wtw1KgvAmn6XM5H3oCqCWZEmKqaukkXh_4rI5hlAQN-0CarkLbU0wKMmnkr_hPqdjvBeGOaCYwzB9yRGlTLf-YBBqprpvNNs4FBi1cBp7oTag___KPifAP_kyjbtn853yh05t2mdw62HnKHX4PdrUBjuR68zrBOnORXqd5ft5djdC_REbfonojqUpVhK51IOmx6RMcl13DUIlUisb3T4shJrm66lzVTSzH_tqyhqxxx7_v1vWKydQBVRYPxnoiA3P5fHPYk-KH_FMJa0IAxNojjhtl6O8u9myfYLlF-htHYjNlsn3syEKGkpfKgMEhIj9FQzHvHvgxOyVvhmK30lePZ_WvIWXOdn42vhSfNjy7p3wOqwY4fHoAiNrqnJgMRAWFJUFNcHL4Xi_zQ8f4u10sNvyg8jyA7uK-bVfGR8ghT8WKcKLPlR-6FMFoTBGpxmPyo",
      },
    };

    axios(warehousesApi)
      .then(function (response) {
        console.log(response.data.results);
        setWarehouses(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(warehouses);

  const onChange = (value) => {
    console.log(value);
    const pickupAddress = value.split(", ");
    console.log(pickupAddress);
    props.getwarehouses(pickupAddress);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {loading ? <Loading /> : ""}
        <Form.Item
          name="warehouse"
          label="Kho Hàng"
          rules={[{ required: true, message: "Please Input" }]}
          style={{ width: "100%" }}
        >
          <Select
            showSearch
            placeholder="Select a province"
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
            {warehouses === undefined
              ? ""
              : warehouses.map((warehouse, key) => {
                  return (
                    <Option key={key} value={warehouse.formatted_address}>
                      {`${warehouse.name} - ${warehouse.formatted_address}`}
                    </Option>
                  );
                })}
          </Select>
        </Form.Item>
      </div>
    </>
  );
}

export default Warehouse;
