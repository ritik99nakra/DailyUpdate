import React from "react";
import emailjs from "emailjs-com"
import { email1 } from "./Login";

const Aemail = () => {

   const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6o1yjzi","template_8kulac4",e.target,"yqyXxBVGFH38tGe2e")
    .then(res=>{
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
   }


  return (
    <div>
      <form onSubmit={SendEmail}>
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Enter your name"
          type="text"
        />
        <br />

        <label for="email">email</label>
        <input  id="email" name="email" defaultValue={email1} placeholder="email" type="email" />
        <br />

        <label for="message">message</label>
        <input
          id="message"
          name="message"
          placeholder="Enter your message"
          type="text"
        />
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Aemail;
