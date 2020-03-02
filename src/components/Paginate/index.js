import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Paginate({ currentPage, totalPages }) {
  function list() {
    let html = [];
    for (let index = 1; index <= totalPages; index++) {
      html.push(
        <li key={index}>
          <Link
            to={`/${index}`}
            className={currentPage === index ? "current" : ""}
          >
            {index}
          </Link>
        </li>
      );
    }
    return html;
  }

  return totalPages ? (
    <Container>
      <small>Página</small>
      <ol>
        <li>
          <Link to={`/1`}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-double-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z"
              ></path>
            </svg>
          </Link>
        </li>
        {list()}
        <li>
          <Link to={`/${totalPages}`}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"
              ></path>
            </svg>
          </Link>
        </li>
      </ol>
    </Container>
  ) : (
    ""
  );
}
