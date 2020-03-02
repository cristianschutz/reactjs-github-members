import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  float: right;
  padding: 0;
  width: auto;
  flex-wrap: nowrap;

  small {
    font-size: 12px;
    margin-right: 5px;
  }

  ol {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    width: auto;

    li {
      font-size: 0;
    }
  }

  a {
    background: #222;
    border: 1px solid #222;
    display: block;
    font-size: 12px;
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    color: #fff;
    width: 25px;
    margin: 0 1px 0;

    &.current {
      background: transparent;
      color: #222;
    }
  }

  li:first-child,
  li:last-child {
    width: 30px;
    a {
      background: none;
      padding: 0;
      color: #000;
      border-color: transparent;

      svg {
        width: 15px;
      }
    }
  }
`;
