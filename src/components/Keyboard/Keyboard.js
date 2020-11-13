import React from "react";
import PropTypes from "prop-types";

import { Plus, Minus, Times, Divide, Equals, Dot } from "../Icons";

// Styles
import { Wrapper, KeyWrapper } from "./Keyboard.styles";

const Keyboard = ({ changeValue, value }) => {
  const keys = [
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "0", value: 0 },
    { label: <Dot />, value: "." },
    { label: <Equals /> },
  ];

  const icons = ["AC", "DEL", <Divide />, <Times />, <Minus />, <Plus />];

  /**
   * Insert a new value
   * @param {string} key
   */
  const handleChange = (key) => {
    if (key) {
      return changeValue(`${value}${key}`);
    }
  };

  const handleOps = (icon) => {
    if (icon === "DEL" || icon === "AC") {
      return changeValue("");
    }
  };

  return (
    <Wrapper>
      <div className="keys">
        {keys.map((key, keyIdx) => {
          const index = keyIdx;
          return (
            <KeyWrapper key={index} onClick={() => handleChange(key.value)}>
              {key.label}
            </KeyWrapper>
          );
        })}
      </div>

      <div className="functionalKeys">
        {icons.map((icon, keyIdx) => {
          const index = keyIdx;
          return (
            <KeyWrapper key={index} onClick={() => handleOps(icon)}>
              {icon}
            </KeyWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

Keyboard.propTypes = {
  changeValue: PropTypes.func,
  value: PropTypes.string,
};

Keyboard.defaulProps = {
  changeValue: () => "",
  value: "",
};

export { Keyboard };
export default Keyboard;
