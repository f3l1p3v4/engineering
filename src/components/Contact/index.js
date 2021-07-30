import React, { useState } from "react";

import "./styles.css";

//import contactImg from "../../assets/contact.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");

  /*async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/contact", {
      name,
      email,
      assunto,
      message
    });

    setName("");
    setEmail("");
    setAssunto("");
    setMessage("");

    alert("Sua mensagem foi enviado com sucesso!!!");
  }*/

  return (
    <>
      <div id="contact">
        <div className="content">
          <section className="contact-img"></section>

          <section className="contact-form">
            <form onSubmit={""}>
              <h1>Faça seu orçamento!</h1>
              <input
                type="text"
                placeholder="Nome*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Assunto*"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
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
