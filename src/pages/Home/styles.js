import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 50px 0;

  .nothing-found {
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
  }

  .list-users {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;

    li {
      padding: 0;
      width: calc(33.33% - 10px);
    }
  }
`;
