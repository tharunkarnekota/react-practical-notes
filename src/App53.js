import React,{useState}from 'react'
import emailjs from 'emailjs-com'

const App = () => {
  
  const [data,setData] = useState ({
    subject : '',
    email : '',
    message : ''
  })
  const {subject,email,message} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler = e =>{
    e.preventDefault();
  }
  

  emailjs.sendForm('service_5f06mjg', 'template_0ookrto', form.current , 'user_6hee1zgDTaxyGLfKgsO37')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  form.current.restart()
  return (
    <div>
      <center>
      <form onSubmit={submitHandler} autoComplete="off">
        <label > subject:</label>
        <input type="text" name="subject" value={subject} onChange={changeHandler} /><br/>
        <label > email:</label>
        <input type="email" name="email" value={email} onChange={changeHandler} /><br />
        <label > message:</label>
        <input type="text" name="message" value={message} onChange={changeHandler} /><br />
        <input type="submit" name="submit" />
      </form>
      </center>
    </div>
  )
}

export default App
