import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const handleSearch = (confirm) => {
  confirm();
};

const handleReset = (clearFilters, confirm) => {
  clearFilters();
  confirm();
};

const TableSearchByText = (dataIndex) => ({
  filterDropdown: ({
    setSelectedKeys,
    confirm,
    clearFilters,
    selectedKeys,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        value={selectedKeys[0]}
        onChange={(e) => {
          setSelectedKeys(e.target.value ? [e.target.value] : []);
        }}
        style={{ width: 188, marginBottom: 8, display: "block" }}
        onPressEnter={() => handleSearch(confirm)}
      />
      <Button type="primary" onClick={() => handleSearch(confirm)} size="small">
        Search
      </Button>

      <Button onClick={() => handleReset(clearFilters, confirm)} size="small">
        Reset
      </Button>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : "",
});

export default TableSearchByText;
