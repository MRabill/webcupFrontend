import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const ColumnSearchProp = ({ value, onChange }) => {
  return {
    filterIcon: () => (
      <SearchOutlined
        style={{
          color: value ? "#002C6E" : undefined,
        }}
      />
    ),
    filterDropdown: () => {
      const [searchVal, setSearchVal] = useState(null);

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            placeholder={`Enter a value to search`}
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
              onChange(e.target.value);
            }}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          />
          <Button
            type="link"
            style={{ margin: 0 }}
            onClick={() => {
              setSearchVal(null);
              onChange(null);
            }}
          >
            Clear
          </Button>
        </div>
      );
    },
  };
};

export default ColumnSearchProp;
