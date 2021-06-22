import styled from "styled-components";

export const ContactListWrapper = styled.div`
  .contactListItem {
    display: flex;
    align-items: center;
  }
  .contactListItem::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    margin-right: 10px;
  }
  .contactListDeleteButton {
    width: 80px;
    height: 30px;
    margin-left: 20px;
  }
`;
