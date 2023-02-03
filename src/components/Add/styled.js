import styled from "styled-components";

export const StyledAdd = styled.div`
  background: orange;
  padding: 2px;
  border-radius: 5px;
  color: white;
  .btn-add {
    padding: 5px 10px;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const StyledRowModal = styled.div`
  .header {
    font-size: 22px;
    margin: 0;
    padding: 0px 40px 30px 40px;
  }

`;

export const StyledForm = styled.form`
  input {
    margin-bottom: 20px;
  }
  .btnContainer {
    text-align: center;
  }
  span {
    color: red
  }
  button {
    margin: 50px 0px 30px 20px;
    background: orange;
    border: none;
    padding: 10px 70px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }
`;
