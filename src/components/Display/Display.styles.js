import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: display;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;

  background-color: ${(props) => props.theme.colors.main};
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 3;

  input {
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
    font-size: 2rem;
    border: 0;
    padding: 0;

    &:focus {
      border: 0;
      outline: 0;
    }

    &#value {
      font-size: 2rem;
    }

    &#result {
      font-size: 3.5rem;
      text-align: end;
    }
  }
`;

export { Wrapper };
export default Wrapper;
