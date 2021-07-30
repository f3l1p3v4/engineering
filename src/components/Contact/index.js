import React, { useState } from "react";

import "./styles.css";

export default function Contact() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");

  const listServices = [
    { id: 1, name: "Selecione um serviço" },
    { id: 2, name: "Limpeza e conservação predial" },
    { id: 3, name: "Manutenção de grupos geradores" },
    { id: 4, name: "Manutenção em sistemas de climatização" },
    { id: 5, name: "Implantação e manutenção de sistemas de energia AC/DC" },
    { id: 6, name: "Serviços de manutenção e reparos civil" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, service);

    if (name === "" && (service === "" || service === "Selecione um serviço")) {
      alert("Favor selecione um nome e tipo de serviço️ ☺️");
      setName("");
      setService("");
    } else if (
      name !== "" &&
      (service === "" || service === "Selecione um serviço")
    ) {
      alert("Favor selecione um tipo de serviço️ ☺️");
      setName("");
      setService("");
    } else if (
      name === "" &&
      (service !== "" || service !== "Selecione um serviço")
    ) {
      alert("Favor selecione um nome ☺️");
      setName("");
      setService("");
    } else {
      console.log(name, service);
      let message = encodeURI(
        `Olá, meu nome é ${name} gostaria de fazer um orçamento a respeito do serviço (${service})`
      );

      window.location.replace(`https://wa.me/+5567992656801?text=${message}`);

      setName("");
      setService("");
    }
  };

  return (
    <>
      <div id="contact">
        <div className="content">
          <section className="contact-img"></section>

          <section className="contact-form">
            <form onSubmit={handleSubmit}>
              <h1>Faça seu orçamento!</h1>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {listServices.map((item, index) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Nome*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button className="button" type="submit">
                Enviar
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
