import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-area: keyboard;
  grid-template-areas: "keys keys keys functionalKeys";
  grid-gap: 1rem;
  background-color: ${(props) => props.theme.colors.grayTwo};
  padding: 1rem;
  z-index: 1;
  font-size: 1.5rem;

  .keys {
    display: grid;
    grid-area: keys;
    grid-gap: 1rem;
    grid-template-columns: auto auto auto;
  }

  .functionalKeys {
    display: grid;
    grid-area: functionalKeys;
    grid-gap: 1rem;
    grid-template-columns: auto;
    border-left: 1px solid ${(props) => props.theme.colors.grayOne};
  }

  svg {
    color: ${(props) => props.theme.colors.main};
    width: 32px;
    height: 32px;
  }
`;

const KeyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Wrapper, KeyWrapper };
