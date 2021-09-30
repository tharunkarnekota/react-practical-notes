import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5f06mjg', 'template_0ookrto', form.current, 'user_6hee1zgDTaxyGLfKgsO37')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <center>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br /><br />
      <label>Email</label>
      <input type="email" name="user_email" /><br /><br />
      <label>Message</label>
      <textarea name="message" /><br /><br />
      <input type="submit" value="Send" />
    </form>
    </center>
    </div>
  );
};

export default App