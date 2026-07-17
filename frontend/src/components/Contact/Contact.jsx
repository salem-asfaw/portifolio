import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  X,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";

import styles from "./Contact.module.css";


export default function Contact() {


  const [open, setOpen] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  });


  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);



  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }





  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    setStatus("");

    try {


      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


      const response = await fetch(

        `${API_URL}/api/contact`,

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify(formData)

        }

      );



      const data = await response.json();



      if (data.success) {


        setStatus("Message sent successfully 🚀");


        setFormData({

          name: "",
          email: "",
          message: ""

        });


      } else {


        setStatus(data.message || "Something went wrong ❌");


      }



    } catch (error) {


      console.log(error);

      setStatus("Server error ❌");


    }

    finally {

      setLoading(false);

    }


  }






  return (

    <section id="contact" className={styles.contact}>


      <div className={styles.container}>


        <span className={styles.smallTitle}>
          CONTACT
        </span>



        <h2 className={styles.title}>
          Let's Build Something Amazing Together
        </h2>



        <p className={styles.description}>

          Have a project, idea, or opportunity?
          Feel free to contact me. I would love to hear from you.

        </p>





        <button

          className={styles.primaryBtn}

          onClick={() => setOpen(true)}

        >

          <Send size={18}/>

          Let's Connect

        </button>





        <div className={styles.cards}>


          <div className={styles.card}>

            <Mail size={35}/>

            <h3>Email</h3>

            <p>
              salemasfaw7@gmail.com
            </p>

          </div>




          <div className={styles.card}>

            <Phone size={35}/>

            <h3>Phone</h3>

            <p>
              +251 94 949 4521
            </p>

          </div>




          <div className={styles.card}>

            <MapPin size={35}/>

            <h3>Location</h3>

            <p>
              Tigray, Ethiopia
            </p>

          </div>


        </div>





        <div className={styles.socials}>


          <a href="https://github.com/salem-asfaw"
            target="_blank"
            rel="noreferrer">

            <FaGithub/>

          </a>



          <a href="https://linkedin.com"
            target="_blank"
            rel="noreferrer">

            <FaLinkedin/>

          </a>



          <a href="https://instagram.com"
            target="_blank"
            rel="noreferrer">

            <FaInstagram/>

          </a>



          <a href="https://t.me/Salemasfaw1"
            target="_blank"
            rel="noreferrer">

            <FaTelegram/>

          </a>


        </div>






        {open && (


          <div className={styles.overlay}>


            <div className={styles.popup}>


              <button

                className={styles.close}

                onClick={() => setOpen(false)}

              >

                <X/>

              </button>



              <h2>
                Send Me A Message
              </h2>




              <form onSubmit={handleSubmit}>


                <input

                  type="text"

                  name="name"

                  placeholder="Your Name"

                  value={formData.name}

                  onChange={handleChange}

                  required

                />



                <input

                  type="email"

                  name="email"

                  placeholder="Your Email"

                  value={formData.email}

                  onChange={handleChange}

                  required

                />



                <textarea

                  name="message"

                  placeholder="Your Message"

                  rows="5"

                  value={formData.message}

                  onChange={handleChange}

                  required

                />



                <button

                  type="submit"

                  className={styles.submit}

                  disabled={loading}

                >

                  {loading ? "Sending..." : "Send Message"}

                </button>



              </form>




              {status && (

                <p className={styles.status}>

                  {status}

                </p>

              )}



            </div>


          </div>


        )}



      </div>


    </section>

  );

}