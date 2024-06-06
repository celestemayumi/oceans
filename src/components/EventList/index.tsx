"use client";
import React, { useState, useEffect } from "react";
import EventCard from "../EventCard";
import "./styles.css";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
  const [idEvent, setIdEvent] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const [email, setemail] = useState("");

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/event/");
      const data = await response.json();
      setEvents(data);

      console.log(data);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const submitForm = async () => {
    setErro("");
    setResposta("");
    console.log(email);
    const response = await fetch(
      "http://localhost:8080/eventsvolunteers/" + idEvent,
      {
        method: "post",
        headers: {
          "Content-Type": "text/plain",
        },
        body: email,
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            setErro(message);
          });
        } else {
          const message = response.text().then((message) => {
            setResposta(message);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };
  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setErro("");
    setPopup("");
    setClassPopupView("");
    setIdEvent("");
    setErro("");
    setResposta("");
  };
  const setPopupView = (id: string) => {
    setPopupClass();
    setClassPopupView("popup");
    setIdEvent(id);
  };
  const handleChange = (event: any) => {
    const fieldValue = event.target.value;
    setemail(fieldValue);
  };
  return (
    <div>
      {events.map((event: any) => {
        let local = `${event.cidade}, ${event.estado}`;

        if (event.logradouro) {
          local = `${event.logradouro}, ${local}`;
        }

        if (event.cep) {
          local = `${local} - CEP: ${event.cep}`;
        }
        const data = event.data.toString("dd/mm/yyyy");
        return (
          <EventCard
            key={event.id}
            title={event.titulo}
            desc={event.descricao}
            local={local}
            data={data}
            click={() => setPopupView(event.id)}
          />
        );
      })}
      <div className={`${popup ? "popup-wrapper" : "none"}`}>
        <div className={`${popupView ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="email">Insira seu email cadastrado</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div className="div-button">
              <button onClick={submitForm}>Enviar</button>
            </div>
            {erro && <p className="error">{erro}</p>}
            {resposta && <p className="success">{resposta}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
