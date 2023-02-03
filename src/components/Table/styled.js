import styled from "styled-components";

export const TableStyled = styled.table`
  margin-top: 20px;
  cursor: pointer;
  .light:hover {
    .delete {
      display: block;
      margin: 0px;
      font-weight: normal;
      color: #ecb448;
    }
  }
  .description {
    padding: 25px 30px;
  }
  .delete {
    display: none;
  }
`;

export const TableThStyled = styled.th`
  padding-right: 200px !important;
`;

export const AvatarStyled = styled.div`
  font-weight: bold;
  margin-top: 9px;
  .row {
    padding: 10px 0px;
  }
  .name {
    font-weight: bold;
    margin-top: 22px;
    margin-bottom: 0px;
  }
`;
