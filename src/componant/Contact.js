import React,{useEffect,useRef,useState} from "react"; 
import emailjs from '@emailjs/browser'

const EMAIL_REGX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function Contact(){
   
    const nameRef = useRef();
    const [email,setEmail]=useState("")
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const form = React.useRef();
    useEffect(() => {
        nameRef.current.focus();
      }, []);
      useEffect(() => {
        setValidEmail(EMAIL_REGX.test(email));
      }, [email]);


      //email js 
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
            <input autoComplete="off" ref={nameRef} placeholder="name" name="user_name"></input>
            <label>email  <label style={{color:"red"}} color="red" className={emailFocus && email && !validEmail ? "visible" : "hidden"}>
            <br/> ONLY valid email
            </label> </label>
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
             placeholder="email" name="user_email"></input>
            <label>message</label>
            <textarea autoComplete="off" placeholder="I am waiting  to hear from YOU : " name="message" />
            <button type="submit">submit</button>
            </form> 
        </section>
    )

}