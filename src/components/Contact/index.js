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
      <div className="contact-container">
        <div className="content">
          <section className="contact-img">
            <img
              src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Contato Imagem"
            />
          </section>

          <section className="contact-form">
            <form onSubmit={""}>
              <h1>Fale conosco!</h1>
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
