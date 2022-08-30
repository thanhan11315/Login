import React from "react";
import Status from "../../compoments/GlobalStyles/Status";
import AddressManagement from "../../compoments/GlobalStyles/AddressManagement";
import WarehouseManagement from "../../compoments/GlobalStyles/WarehouseManagement";
import CodeShopManagement from "../../compoments/GlobalStyles/CodeShopManagement";
import CodeDownManagement from "../../compoments/GlobalStyles/CodeDownManagement";
import NameManagement from "../../compoments/GlobalStyles/NameManagement";
import CounterCode from "../../compoments/GlobalStyles/CounterCode";
import PhoneManagement from "../../compoments/GlobalStyles/PhoneManagement";
import AddressDetaiManagement from "../../compoments/GlobalStyles/AddressDetailManagement";
import SortManagerment from "../../compoments/GlobalStyles/SortManagerment";

function OrderManagement() {
  return (
    <>
      <Status />
      <AddressManagement />
      <WarehouseManagement />
      <CodeShopManagement />
      <NameManagement />
      <CodeDownManagement />
      <CounterCode />
      <PhoneManagement />
      <AddressDetaiManagement />
      <SortManagerment />
    </>
  );
}

export default OrderManagement;
