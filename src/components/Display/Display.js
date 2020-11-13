import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Display.styles";

const Display = ({ value, result }) => {
  return (
    <Wrapper>
      <input name="value" id="value" type="text" readOnly value={value} />
      <input name="result" id="result" type="text" readOnly value={result} />
    </Wrapper>
  );
};

Display.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
};

Display.defaultProps = {
  value: "123456x14",
  result: "1,728,384",
};

export { Display };
export default Display;
