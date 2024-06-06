"use client";
import { useState, useEffect } from "react";
import "./styles.css";
import CollabCard from "../CollabCard";
import HelpUs from "../HelpUs";

function CollabForm(props: any) {
  const [popup, setPopup] = useState("");
  const [popupVolunteer, setClassPopupVolunteer] = useState("");
  const [popupPartner, setClassPopupPartner] = useState("");
  const [popupAlert, setClassPopupAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [dataAlert, setDataAlert] = useState({
    estado: "",
    cidade: "",
    logradouro: "",
    cep: "",
    referencia: "",
    descricao: "",
    idColaborador: 0,
  });
  const [callSubmitAlertForm, setCallSubmitAlertForm] = useState(false);

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

  useEffect(() => {
    if (callSubmitAlertForm) {
      submitAlertForm();
      setCallSubmitAlertForm(false); // Reset the flag after calling submitAlertForm
    }
  }, [callSubmitAlertForm]);

  const submitHelpUsForm = async () => {
    setErro("");
    setResposta("");

    const response = await fetch("http://localhost:8080/alert/email", {
      method: "post",
      headers: {
        "Content-Type": "text/plain",
      },
      body: emailAlert,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            setErro(message);
          });
        } else {
          return response.text().then((message) => {
            const idColaborador = parseInt(message, 10); // Converte a string para inteiro
            if (!isNaN(idColaborador)) {
              // Verifica se a conversão foi bem-sucedida
              setDataAlert((prevDataAlert) => ({
                ...prevDataAlert,
                idColaborador,
              }));
              setCallSubmitAlertForm(true); // Set the flag to true after updating dataAlert
            } else {
              setErro("Email inválido.");
            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };

  const submitAlertForm = async () => {
    setErro("");
    setResposta("");
    console.log(dataAlert);

    const response = await fetch("http://localhost:8080/alert/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAlert),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((message) => {
            setErro(message);
          });
        } else {
          return response.text().then((message) => {
            setResposta(message);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };

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
          return response.text().then((message) => {
            setResposta(message);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
        setErro("Erro ao fazer a requisição. Tente novamente mais tarde.");
      });
  };

  const submitVolunteerForm = async () => {
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
            return response.text().then((message) => {
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

  const setpopupAlert = () => {
    setPopupClass();
    setClassPopupAlert("popup");
  };

  const handleChangeAlert = (event: any) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setDataAlert((currentdataAlert) => {
      return {
        ...currentdataAlert,
        [fieldName]: fieldValue,
      };
    });
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
  const emailAlertChange = (event: any) => {
    setEmailAlert(event.target.value);
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
      <HelpUs click={setpopupAlert} />
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
                id="input-date"
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
              <button onClick={submitVolunteerForm}>Enviar</button>
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

            <div className="div-button">
              <button onClick={submitPartnerForm}>Enviar</button>
            </div>
            {erro && <p className="error">{erro}</p>}
            {resposta && <p className="success">{resposta}</p>}
          </div>
        </div>
        <div className={`${popupAlert ? "popup-alert" : "none"}`}>
          <div className="popup-close">
            <button onClick={removePopup}>x</button>
          </div>
          <div className="popup-content-alert">
            <h1>Insira os seguintes dados para enviar um alerta:</h1>
            <div className="form-alert">
              <div className="alert-info">
                <div>
                  <label htmlFor="email">Email cadastrado*</label>
                  <input
                    id="alert-form-email"
                    name="email"
                    type="email"
                    onChange={emailAlertChange}
                    className="border-2"
                  />
                </div>
                <div>
                  <label htmlFor="descricao">Descrição do alerta*</label>
                  <textarea
                    name="descricao"
                    onChange={handleChangeAlert}
                    className="border-2"
                  />
                </div>
              </div>
              <div className="alert-location-info">
                <p>Localização do alerta:</p>
                <div className="location-form">
                  <div>
                    <label htmlFor="estado">Estado*</label>
                    <input
                      name="estado"
                      type="text"
                      onChange={handleChangeAlert}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="cidade">Cidade*</label>
                    <input
                      name="cidade"
                      type="text"
                      onChange={handleChangeAlert}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="logradouro">Logradouro</label>
                    <input
                      name="logradouro"
                      type="text"
                      onChange={handleChangeAlert}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="cep">cep</label>
                    <input
                      name="cep"
                      type="text"
                      onChange={handleChangeAlert}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="referencia">Referência</label>
                    <input
                      name="referencia"
                      type="text"
                      onChange={handleChangeAlert}
                      className="border-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-button">
              <button onClick={submitHelpUsForm}>Enviar</button>
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
