"use client";
import { useState } from "react";
import "./styles.css";
import CollabCard from "../CollabCard";

function CollabForm(props: any) {
  const [popup, setPopup] = useState("");
  const [popupVolunteer, setClassPopupVolunteer] = useState("");
  const [popupPartner, setClassPopupPartner] = useState("");
  const [dataVolunteer, setDataVolunteer] = useState({
    nome: "",
    telefone: "",
    dataDeNascimento: "",
    email: "",
  });
  const [dataPartner, setDataPartner] = useState({
    nome: "",
    telefone: "",
    cnpj: "",
    email: "",
  });
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const submitPartnerForm = async () => {
    setErro("");
    setResposta("");
    const response = await fetch("http://localhost:8080/partner", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPartner),
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
  };
  const submitCollabForm = async () => {
    setErro("");
    setResposta("");
    console.log(dataVolunteer);
    if (dataVolunteer.dataDeNascimento == "") {
      setErro("Selecione uma data de nascimento");
    } else {
      const response = await fetch("http://localhost:8080/volunteer", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataVolunteer),
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
    setClassPopupVolunteer("");
    setClassPopupPartner("");
    setErro("");
    setResposta("");
  };
  const setPopupVolunteer = () => {
    setPopupClass();
    setClassPopupVolunteer("popup");
  };
  const setPopupPartner = () => {
    setPopupClass();
    setClassPopupPartner("popup");
  };
  const handleChangeVolunteer = (event: any) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setDataVolunteer((currentdataVolunteer) => {
      return {
        ...currentdataVolunteer,
        [fieldName]: fieldValue,
      };
    });
  };
  const handleChangePartner = (event: any) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setDataPartner((currentdataPartner) => {
      return {
        ...currentdataPartner,
        [fieldName]: fieldValue,
      };
    });
  };

  return (
    <div>
      <div className="px-22 py-10 flex w-full justify-around">
        <CollabCard
          title="VOLUNTÁRIO"
          desc="Participe dos nossos eventos!"
          source="/ipanema.png"
          char="/LIA.png"
          click={setPopupVolunteer}
        />
        <CollabCard
          title="PARCEIRO"
          desc="Receba o selo VitaliSea!"
          source="/oceano.png"
          char="/edificio.png"
          click={setPopupPartner}
        />
      </div>
      <div className={`${popup ? "popup-wrapper" : "none"}`}>
        <div className={`${popupVolunteer ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                onChange={handleChangeVolunteer}
                className="border-2"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                name="telefone"
                type="text"
                onChange={handleChangeVolunteer}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="dataDeNascimento">Data de nascimento</label>
              <input
                name="dataDeNascimento"
                type="date"
                onChange={handleChangeVolunteer}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChangeVolunteer}
                className="border-2"
              />
            </div>

            <div className="div-button">
              <button onClick={submitCollabForm}>Enviar</button>
            </div>
            {erro && <p className="error">{erro}</p>}
            {resposta && <p className="success">{resposta}</p>}
          </div>
        </div>
        <div className={`${popupPartner ? "popup" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                onChange={handleChangePartner}
                className="border-2"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                name="telefone"
                type="text"
                onChange={handleChangePartner}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="cnpj">cnpj</label>
              <input
                name="cnpj"
                type="text"
                onChange={handleChangePartner}
                className="border-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChangePartner}
                className="border-2"
              />
            </div>

            <div className="div-button-update">
              <button className="button-update" onClick={submitPartnerForm}>
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

export default CollabForm;
