import React, { useState } from "react";
import { Select } from "antd";
import { Checkbox, Col, Row } from "antd";

const { Option } = Select;

const options = ["Option 1", "Option 2", "Option 3"];

const AllOptionSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  console.log("selected options", selectedOptions);

  const handleSelectChange = (values: string[]) => {
    const filterAll = values.filter((item) => item === "all");
    console.log("filter all", filterAll);
    if (!filterAll[0]) {
      setSelectedOptions(values);
      console.log("check values", values);
    } else {
    }
  };

  const handleAllOptionChange = (checked: boolean) => {
    console.log("check-----", checked);

    if (checked) {
      setSelectedOptions(options);
    } else {
      setSelectedOptions([]);
    }
  };

  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        value={selectedOptions}
        onChange={handleSelectChange}>
        <Option key="all" value="all">
          <Col span={24}>
            <Checkbox
              style={{ width: "100%" }}
              checked={selectedOptions.length === options.length}
              onChange={(e) => handleAllOptionChange(e.target.checked)}>
              Select All
            </Checkbox>
          </Col>
        </Option>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default AllOptionSelect;
