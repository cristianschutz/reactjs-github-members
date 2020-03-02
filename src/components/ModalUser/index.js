import React, { useEffect, useState, useCallback, useContext } from "react";
import { toast } from "react-toastify";

import api, { params } from "../../services/api";
import { Context } from "../../store/";

import InfoBox from "../../styles/InfoBox";
import { Container } from "./styles";

export default function ModalUser() {
  const [content, setContent] = useState("");
  const { openModal, modal: login } = useContext(Context);

  function format(data) {
    const y = data.slice(0, 4),
      m = data.slice(5, 7),
      d = data.slice(8, 10),
      hour = data.slice(11, 13),
      min = data.slice(14, 16);
    return `${hour}:${min} - ${d}/${m}/${y}`;
  }

  const fetch = useCallback(async () => {
    await api
      .get("/users/" + login, params)
      .then(({ data }) => {
        setContent(data);
      })
      .catch(err => {
        openModal("");
        toast.error("Erro na consulta à api do GitHub!");
      });
  }, [login, openModal]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return content ? (
    <Container>
      <div className="ModalBackdrop" onClick={e => openModal("")}></div>
      <div className="ModalContent">
        <button className="close" onClick={e => openModal("")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
          </svg>
        </button>
        <InfoBox>
          <figure>
            <img src={content.avatar_url} alt={content.login} />
          </figure>
          <h6>
            {content.name}
            <time>{content.created_at && format(content.created_at)}</time>
          </h6>
          <ul>
            <li>
              {content.public_repos} <small>Repositórios</small>
            </li>
            <li>
              {content.followers} <small>Seguidores</small>
            </li>
          </ul>
        </InfoBox>
      </div>
    </Container>
  ) : (
    ""
  );
}
