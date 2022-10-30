import React from "react"; 
import emailjs from '@emailjs/browser'

export default function Contact(){
    const form = React.useRef();
 
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
      emailjs.sendForm('service_fbdiyzr', 'template_jt1fq7f', form.current, '8rmblELAoWc85KiFA')
        .then((result) => {
          console.log(result)
          alert(" thank for your submit i can not waite  to see it");
        }, (error) => {
            // show the user an error
            console.log(error)
        });

    };
    
    return(
        <section className="contact">
            <form ref={form} onSubmit={sendEmail}>
            <label>name</label>
            <input placeholder="name" name="user_name"></input>
            <label>email</label>
            <input placeholder="email" name="user_email"></input>
            <label>message</label>
            <textarea placeholder="I am waiting  to hear from YOU : " name="message" />
            <button type="submit">submit</button>
            </form> 
        </section>
    )

}