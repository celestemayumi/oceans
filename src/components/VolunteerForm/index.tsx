"use client";
import { useState } from "react";
import "./styles.css";
import CollabCard from "../CollabCard";

function VolunteerForm(props: any) {
  const [popup, setPopup] = useState("");
  const [popupView, setClassPopupView] = useState("");
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    dataDeNascimento: "",
    email: "",
  });
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const submitForm = async () => {
    setErro("");
    setResposta("");
    console.log(values);
    if (values.dataDeNascimento == "") {
      setErro("Selecione uma data de nascimento");
    } else {
      const response = await fetch("http://localhost:8080/volunteer", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
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
    }
  };

  const setPopupClass = () => {
    setPopup("popup-wrapper");
  };
  const removePopup = () => {
    setErro("");
    setPopup("");
    setClassPopupView("");
  };
  const setPopupView = () => {
    setPopupClass();
    setClassPopupView("popup");
  };
  const handleChange = (event: any) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <div className="">
      <CollabCard
        title="VOLUNTÁRIO"
        desc="Participe dos nossos eventos!"
        source="/ipanema.png"
        char="/LIA.png"
        click={setPopupView}
      />
      <div className={`${popup ? "popup-wrapper" : "none"}`}>
        <div className={`${popupView ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                onChange={handleChange}
                className="border-2"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                name="telefone"
                type="text"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="dataDeNascimento">Data de nascimento</label>
              <input
                name="dataDeNascimento"
                type="date"
                onChange={handleChange}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="border-2"
              />
            </div>

            <div className="div-button">
              <button onClick={submitForm}>
                Enviar
              </button>
            </div>
            {erro && <p className="error">{erro}</p>}
            {resposta && <p className="success">{resposta}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerForm;
