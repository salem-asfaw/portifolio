import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaLightbulb,
  FaRocket,
  FaPalette,
  FaSearch,
  FaMobileAlt,
  FaHeadset
} from "react-icons/fa";

import styles from "./Services.module.css";


export default function Services() {


  const services = [

    {
      icon: <FaCode />,
      title: "Website Development",
      description:
      "Creating modern, fast and user-friendly websites with clean and scalable code."
    },


    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
      "Building beautiful and interactive user interfaces using modern frontend technologies."
    },


    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
      "Developing reliable APIs, server-side applications and backend systems."
    },


    {
      icon: <FaDatabase />,
      title: "Database Management",
      description:
      "Designing and managing databases for secure and organized data storage."
    },


    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
      "Analyzing problems and creating effective technology solutions."
    },


    {
      icon: <FaRocket />,
      title: "Deployment",
      description:
      "Deploying websites and applications to make them available online."
    },


    {
      icon: <FaPalette />,
      title: "Branding",
      description:
      "Creating a strong digital identity and professional online presence for businesses."
    },


    {
      icon: <FaSearch />,
      title: "SEO & Website Optimization",
      description:
      "Improving website structure and performance to help users discover your website easily."
    },


    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Design",
      description:
      "Making websites look perfect and work smoothly on phones, tablets and computers."
    },


    {
      icon: <FaHeadset />,
      title: "Custom Support",
      description:
      "Providing updates, maintenance and support after completing your project."
    }

  ];



  return (

    <section id="services" className={styles.services}>


      <div className={styles.container}>


        <h2>
          My Services
        </h2>



        <p className={styles.subtitle}>
          Professional solutions for modern digital projects
        </p>



        <div className={styles.grid}>


          {
            services.map((service,index)=>(


              <article
                key={index}
                className={styles.card}
              >


                <div className={styles.icon}>

                  {service.icon}

                </div>



                <h3>

                  {service.title}

                </h3>



                <p>

                  {service.description}

                </p>


              </article>


            ))
          }


        </div>


      </div>


    </section>

  );

}