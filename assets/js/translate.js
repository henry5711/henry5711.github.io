document.addEventListener("DOMContentLoaded", function() {
    let idiomaActual = "en";

    const tituloElement = document.getElementById("titulo");
    const checkboxIdioma = document.getElementById("checkbox-idioma");
    const checkboxText = document.getElementById("checkbox-text");

    //Menu

    const homeElement = document.getElementById("menu_home");
    const aboutElement = document.getElementById("menu_about");
    const resumeElement = document.getElementById("menu_resume");
    const servicesElement = document.getElementById("menu_services");
    const portfolioElement = document.getElementById("menu_portfolio");
    const contactElement = document.getElementById("menu_contact");

    const mobileHomeElement = document.querySelector('.mobile-nav a[href="#header"]');
    const mobileAboutElement = document.querySelector('.mobile-nav a[href="#about"]');
    const mobileResumeElement = document.querySelector('.mobile-nav a[href="#resume"]');
    const mobileServicesElement = document.querySelector('.mobile-nav a[href="#services"]');
    const mobilePortfolioElement = document.querySelector('.mobile-nav a[href="#portfolio"]');
    const mobileContactElement = document.querySelector('.mobile-nav a[href="#contact"]');

    //About
    const sectionaboutElement = document.getElementById("section_about");
    const section_about_element = document.getElementById("section_about_me");
    const section_section_Software_Element = document.getElementById("section_Software");
    const about_me_Element = document.getElementById("about_me");
    const birthdate_Element = document.getElementById("birthdate");
    const birthdate2_Element = document.getElementById("birthdate2");
    const website_Element = document.getElementById("website");
    const phone_Element = document.getElementById("phone");
    const city_Element = document.getElementById("city");
    const age_Element = document.getElementById("age");
    const degree_Element = document.getElementById("degree");
    const degree2_Element = document.getElementById("degree2");
    const email_Element = document.getElementById("email");
    const languages_Element = document.getElementById("languages");
    const languages2_Element = document.getElementById("languages2");
    const clients_Element = document.getElementById("clients");
    const projects_Element = document.getElementById("projects");
    const support_Element = document.getElementById("support");
    const collaborators_Element = document.getElementById("collaborators");
    const skills_Element = document.getElementById("skills");
    const interests_Element = document.getElementById("interests");
    const programing_Element = document.getElementById("programing");
    const games_Element = document.getElementById("games");
    const training_Element = document.getElementById("training");
    const soccer_Element = document.getElementById("soccer");
    const volleyball_Element = document.getElementById("volleyball");
    const travel_Element = document.getElementById("travel");
    const astronomy_Element = document.getElementById("astronomy");
    const oceanography_Element = document.getElementById("oceanography");
    const music_Element = document.getElementById("music");
    const technology_Element = document.getElementById("technology");
    const animals_Element = document.getElementById("animals");
    const testimonials_Element = document.getElementById("testimonials");
    const testimonials_one_Element = document.getElementById("testimonials_one");
    const testimonials_two_Element = document.getElementById("testimonials_two");
    const testimonials_three_Element = document.getElementById("testimonials_three");
    const testimonials_four_Element = document.getElementById("testimonials_four");
    const testimonials_five_Element = document.getElementById("testimonials_five");
    const name1Element = document.getElementById("name1");
    const name2Element = document.getElementById("name2");
    const name3Element = document.getElementById("name3");
    const name4Element = document.getElementById("name4");
    
    //Resume
    const resume_title_resume_Element = document.getElementById("resume_title_resume");
    const resume_title_Element = document.getElementById("resume_title");
    const resume_title_resume2_Element = document.getElementById("resume_title_resume2");
    const resume_about_me_Element = document.getElementById("resume_about_me");
    const resume_title_education_Element = document.getElementById("resume_title_education");
    const resume_education_Element = document.getElementById("resume_education");
    const resume_about_education = document.getElementById("resume_about_education");
    const resume_Experience_title_Element = document.getElementById( "resume_Experience_title");
    const resume_proyect_Xelergo_Element = document.getElementById("resume_proyect_Xelergo");
    const resume_time_Element = document.getElementById("resume_time_Xelergo");
    const resume_experience_with_Xelergo = document.getElementById ("resume_experience_with_Xelergo");
    const resume_title_UPHBLUEGROUP_Element = document.getElementById ("resume_title_UPHBLUEGROUP");
    const resume_time_UPHBLUEGROUP_Element = document.getElementById("resume_time_UPHBLUEGROUP");
    const reino_unido_Element = document.getElementById("reino_unido");
    const resume_experience_UPHBLUEGROUP_Element = document.getElementById("resume_experience_UPHBLUEGROUP");
    const resume_proyect_Zippyttech_Element = document.getElementById("resume_proyect_Zippyttech");
    const resume_time_Zippyttech_Element = document.getElementById("resume_time_Zippyttech");
    const resume_experience_with_Zippyttech_Element = document.getElementById("resume_experience_with_Zippyttech");
    const panama_Element = document.getElementById("panama");
    const resume_proyect_Pangea_Element = document.getElementById("resume_proyect_Pangea");
    const resume_time_Pangea_Element = document.getElementById("resume_time_Pangea");
    const panama2_Element = document.getElementById("panama2");
    const resume_experience_with_Pangea_Element = document.getElementById("resume_experience_with_Pangea");
    const resume_proyect_Romeral_Element = document.getElementById("resume_proyect_Romeral");
    const resume_time_Romeral_Element = document.getElementById("resume_time_Romeral");
    const resume_experience_with_Romeral_Element = document.getElementById("resume_experience_with_Romeral");
    const resume_proyect_3d_Element = document.getElementById("resume_proyect_3d");
    const resume_time_3d_Element = document.getElementById("resume_time_3d");
    const resume_experience_with_3d_Element = document.getElementById("resume_experience_with_3d");
    
    //Services

    const services_title_Element = document.getElementById("services_title");
    const services_subtitle_Element = document.getElementById("services_subtitle");
    const services_card1_Element = document.getElementById("services_card1");
    const services_card2_Element = document.getElementById("services_card2");
    const services_card3_Element = document.getElementById("services_card3");
    const services_card4_Element = document.getElementById("services_card4");
    const services_card5_Element = document.getElementById("services_card5");
    const services_card6_Element = document.getElementById("services_card6");
    const services_card3_title_Element = document.getElementById("services_card3_title");
    const services_card4_title_Element = document.getElementById("services_card4_title");
    const services_card5_title_Element = document.getElementById("services_card5_title");
    const services_card6_title_Element = document.getElementById("services_card6_title");

    //Portfolio
    const portfolio_title_Element = document.getElementById("portfolio_title");
    const portfolio_subtitle_Element = document.getElementById("portfolio_subtitle");
    const portfolio_subtitle1_Element = document.getElementById("portfolio_subtitle1");
    const portfolio_subtitle3_Element = document.getElementById("portfolio_subtitle3");
    const portfolio_name_model1_Element = document.getElementById("portfolio_name_model1");
    const portfolio_name_model2_Element = document.getElementById("portfolio_name_model2");
    const portfolio_name_model3_Element = document.getElementById("portfolio_name_model3");
    const portfolio_model2_Element = document.getElementById("portfolio_model2");
    const portfolio_model3_Element = document.getElementById("portfolio_model3");

    //Contact

    const contact_title_Element = document.getElementById("contact_title");
    const contact_subtitle_Element = document.getElementById("contact_subtitle");
    const contact_address_Element = document.getElementById("contact_address");
    const contact_profiles_Element = document.getElementById("contact_profiles");
    const contact_email_Element = document.getElementById("contact_email");
    const contact_call_Element = document.getElementById("contact_call");

    //Footer

    const footer_Element = document.getElementById("footer");
    
    // Cambiamos el elemento del botón por el enlace

    function cambiarIdioma() {
        if (idiomaActual === "es") {
            checkboxText.textContent = "Es"; // Cambiamos "Eng" a "En"
            tituloElement.textContent = "I'm a passionate developer from Venezuela.";

            //Menu

            homeElement.textContent = idiomaActual === "es" ? "Home" : "Inicio";
            aboutElement.textContent = idiomaActual === "es" ? "About" : "Sobre mí";
            resumeElement.textContent = idiomaActual === "es" ? "Resume" : "Resumen";
            servicesElement.textContent = idiomaActual === "es" ? "Services" : "Servicios";
            portfolioElement.textContent = idiomaActual === "es" ? "Portfolio" : "Portafolio";
            contactElement.textContent = idiomaActual === "es" ? "Contact" : "Contacto";
            
            //Actualizar textos del menú móvil clonado

            mobileHomeElement.textContent = idiomaActual === "es" ? "Home" : "Inicio";
            mobileAboutElement.textContent = idiomaActual === "es" ? "About" : "Sobre mí";
            mobileResumeElement.textContent = idiomaActual === "es" ? "Resume" : "Resumen";
            mobileServicesElement.textContent = idiomaActual === "es" ? "Services" : "Servicios";
            mobilePortfolioElement.textContent = idiomaActual === "es" ? "Portfolio" : "Portafolio";
            mobileContactElement.textContent = idiomaActual === "es" ? "Contact" : "Contacto";  

            //About
            sectionaboutElement.textContent = "About";
            section_about_element.textContent = "Learn more about me";
            section_section_Software_Element.textContent = "Software Developer";
            about_me_Element.textContent = 'I am a proactive developer with a strong desire for continuous improvement both personally and professionally. I am responsible and honest, and I am committed to working hard to achieve goals. With a solid experience in software development, I am ready to solve complex problems and make informed decisions.';
            birthdate_Element.textContent = "Birthdate:";
            birthdate2_Element.textContent = "November 7, 1998";
            website_Element.textContent = "Website:";
            phone_Element.textContent = "Phone:";
            city_Element.textContent = "City:";
            age_Element.textContent = "Age:";
            degree_Element.textContent = "Degree:";
            degree2_Element.textContent = "Systems Engineer";
            email_Element.textContent = "Email:";
            languages_Element.textContent = "Languages:";
            languages2_Element.textContent = "Spanish | English (B1) | German (A2)";
            clients_Element.textContent = "Happy Clients";
            projects_Element.textContent = "Projects";
            support_Element.textContent = "Hours of Support";
            collaborators_Element.textContent = "Collaborators";
            skills_Element.textContent = "Skills";
            interests_Element.textContent = "Interests";
            programing_Element.textContent = "Programing";
            games_Element.textContent = "Video Game";
            training_Element.textContent = "Training";
            soccer_Element.textContent = "Soccer";
            volleyball_Element.textContent = "Volleyball";
            travel_Element.textContent = "Travel";
            astronomy_Element.textContent = "Astronomy";
            oceanography_Element.textContent = "Oceanography";
            music_Element.textContent = "Music";
            technology_Element.textContent = "Technology";
            animals_Element.textContent = "Animals";
            testimonials_Element.textContent = "Testimonials";
            testimonials_one_Element.textContent =
                'I have worked with Henry on several projects and I have always been impressed with his work. He is a talented, dedicated, and reliable programmer. He always meets deadlines, and his projects are of high quality. I highly recommend him to anyone looking for a reliable and experienced programmer.';
            testimonials_two_Element.textContent =
                'I took a programming course with Henry and it was an amazing experience. He is a passionate and dedicated teacher who truly cares about his students learning. He taught me a lot about programming and helped me develop the skills I needed to succeed in my career.';
            testimonials_three_Element.textContent =
                'I have had the privilege of mentoring Henry for the past few years. He is a brilliant young programmer with a bright future ahead of him. He is hardworking, quick to learn, and always looking for new challenges. I am confident he will succeed in whatever he does.';
            testimonials_four_Element.textContent =
                'Henry is an invaluable asset to our team. He is a talented and dedicated programmer who is always willing to go the extra mile. He is a great team player and always willing to help others. I highly recommend him to anyone looking for a reliable and experienced programmer.';
            testimonials_five_Element.textContent =
                'Henry is not only a great programmer but also a great friend. He is an honest, reliable person who is always willing to help. I am very grateful to have him as a friend and colleague.';
            name1Element.textContent = "CEO & Founder";
            name2Element.textContent = "Developer & Engineer";
            name3Element.textContent = "Project Manager & Technical Leader";
            name4Element.textContent = "CEO & Founder";

            //Resume
            resume_title_resume_Element.textContent = "Resume";
            resume_title_Element.textContent = "Review my resume";
            resume_title_resume2_Element.textContent = "Resume";
            resume_about_me_Element.textContent = "Innovative and deadline-focused developer with over 5 years of experience in the design and development of systems.";
            resume_title_education_Element.textContent = "Education";
            resume_education_Element.textContent = "System Engineering";
            resume_about_education.textContent =
                "Highly skilled Systems Engineer with a solid academic background and practical experience in the design, development, and management of computer systems.";
            resume_Experience_title_Element.textContent = "Professional Experience";
            resume_proyect_Xelergo_Element.textContent = "Back-End Developer Xeler Go";
            resume_time_Element.textContent = "May 2023 - January 2024";
            resume_experience_with_Xelergo.textContent = "In charge of developing an API for the use and management of Xeler Go.";
            resume_title_UPHBLUEGROUP_Element.textContent = "Back-End Developer UPH&BLUE GROUP";
            resume_time_UPHBLUEGROUP_Element.textContent = "April 2022 - July 2023";
            reino_unido_Element.textContent = "United Kingdom";
            resume_experience_UPHBLUEGROUP_Element.textContent = "In charge of the development of various APIs and applications.";
            resume_proyect_Zippyttech_Element.textContent = "Back-End Developer Zippyttech";
            resume_time_Zippyttech_Element.textContent = "January 2021 - January 2024";
            resume_experience_with_Zippyttech_Element.textContent = "In charge of the development of various APIs and applications.";
            panama_Element.textContent = "Panama";       
            resume_proyect_Pangea_Element.textContent = "Back-End Developer at Pangea";
            resume_time_Pangea_Element.textContent = "March 2023 - May 2023";
            panama2_Element.textContent = "Panama";  
            resume_experience_with_Pangea_Element.textContent = "In charge of the development of various interfaces.";
            resume_proyect_Romeral_Element.textContent = "FullStack Developer at Chacinos el Romeral";    
            resume_time_Romeral_Element.textContent = "February 2022 - February 2023 ";
            resume_experience_with_Romeral_Element.textContent = 'In charge of the development of a management and control system for the company.';
            resume_proyect_3d_Element.textContent = "Modeler and 3D Printer 3dpulpodin";
            resume_time_3d_Element.textContent = "October 2023 - Present";
            resume_experience_with_3d_Element.textContent = "In charge of the design of 3D models for printing.";

            //Services

            services_title_Element.textContent = "Services";
            services_subtitle_Element.textContent = "My Services";
            services_card1_Element.textContent = 'API Developer with 5 years of experience in the design, development, and implementation of scalable and secure RESTful APIs.';
            services_card2_Element.textContent = 'Development of pages to attract clients.';
            services_card3_Element.textContent = 'Design, modeling, and 3D printing.';
            services_card4_Element.textContent = 'Systems Analysis and Audit.';
            services_card5_Element.textContent = 'Design: Conceptual, Logical, and Physical Database.';
            services_card6_Element.textContent = 'Character modeling, world building, development.';
            services_card3_title_Element.textContent = "3D Modeling & Printing";
            services_card4_title_Element.textContent = "Systems Analysis";
            services_card5_title_Element.textContent = "Databases";
            services_card6_title_Element.textContent = "Video Games";

            //Portfolio

            portfolio_title_Element.textContent = "Portfolio";
            portfolio_subtitle_Element.textContent = "My Works";
            portfolio_subtitle1_Element.textContent = "All";
            portfolio_subtitle3_Element.textContent = "Modeling";
            portfolio_name_model1_Element.textContent = "Model";
            portfolio_name_model2_Element.textContent = "Model"
            portfolio_name_model3_Element.textContent = "Model";
            portfolio_model2_Element.textContent = "Rose Bear";   
            portfolio_model3_Element.textContent = "King and Queen"; 

            //Contact

            contact_title_Element.textContent = "Contact";
            contact_subtitle_Element.textContent = "Contact me";
            contact_address_Element.textContent = "My Address";
            contact_profiles_Element.textContent = "Social Profiles";
            contact_email_Element.textContent = "Email me";
            contact_call_Element.textContent = "Call me";

            //Footer

            footer_Element.textContent = "Designed by ";

            idiomaActual = "es";
        } else {
            checkboxText.textContent = "Eng"; // Cambiamos "Es" a "En"
            tituloElement.textContent = "Soy un desarrollador apasionado de Venezuela.";

            //Menu
            homeElement.textContent = idiomaActual === "en" ? "Inicio" : "Home";
            aboutElement.textContent = idiomaActual === "en" ? "Sobre mí" : "About";
            resumeElement.textContent = idiomaActual === "en" ? "Resumen" : "Resume";
            servicesElement.textContent = idiomaActual === "en" ? "Servicios" : "Services";
            portfolioElement.textContent = idiomaActual === "en" ? "Portafolio" : "Portfolio";
            contactElement.textContent = idiomaActual === "en" ? "Contacto" : "Contact";
            
             // Actualizar textos del menú móvil clonado

            mobileHomeElement.textContent = idiomaActual === "en" ? "Inicio" : "Home";
            mobileAboutElement.textContent = idiomaActual === "en" ? "Sobre mí" : "About";
            mobileResumeElement.textContent = idiomaActual === "en" ? "Resumen" : "Resume";
            mobileServicesElement.textContent = idiomaActual === "en" ? "Servicios" : "Services";
            mobilePortfolioElement.textContent = idiomaActual === "en" ? "Portafolio" : "Portfolio";
            mobileContactElement.textContent = idiomaActual === "en" ? "Contacto" : "Contact";

            //About
            sectionaboutElement.textContent = "Sobre mí";
            section_about_element.textContent = "Conoce más sobre mí";
            section_section_Software_Element.textContent = "Desarrollador de Software";
            about_me_Element.textContent =
                'Soy un desarrollador proactivo con un fuerte deseo de mejorar continuamente tanto a nivel personal como profesional. Soy responsable y honesto, y estoy comprometido a trabajar duro para alcanzar los objetivos. Con una sólida experiencia en el desarrollo de software, estoy preparado para resolver problemas complejos y tomar decisiones informadas.';
            birthdate_Element.textContent = "Fecha de Nacimiento:";
            birthdate2_Element.textContent = "7 de Noviembre de 1998";
            website_Element.textContent = "Sitio web:";
            phone_Element.textContent = "Teléfono:";
            city_Element.textContent = "Ciudad:";
            age_Element.textContent = "Edad:";
            degree_Element.textContent = "Título:";
            degree2_Element.textContent = "Ingeniero de Sistemas";
            email_Element.textContent = "Correo:";
            languages_Element.textContent = "Idiomas:";
            languages2_Element.textContent = "Español | Ingles (B1) | Alemán (A2)";
            clients_Element.textContent = "Clientes Felices";
            projects_Element.textContent = "Proyectos";
            support_Element.textContent = "Horas de Soporte";
            collaborators_Element.textContent = "Colaboradores";
            skills_Element.textContent = "Habilidades";
            interests_Element.textContent = "Intereses";
            programing_Element.textContent = "Programación";
            games_Element.textContent = "Video Juegos";
            training_Element.textContent = "Entrenamiento";
            soccer_Element.textContent = "Fútbol";
            volleyball_Element.textContent = "Voleibol";
            travel_Element.textContent = "Viajar";
            astronomy_Element.textContent = "Astronomía";
            oceanography_Element.textContent = "Oceanografía";
            music_Element.textContent = "Música";
            technology_Element.textContent = "Tecnología";
            animals_Element.textContent = "Animales";
            testimonials_Element.textContent = "Testimonios";
            testimonials_one_Element.textContent =
                'He trabajado con Henry en varios proyectos y siempre he quedado impresionado con su trabajo. Es un programador talentoso, dedicado y confiable. Siempre cumple con los plazos y sus proyectos son de alta calidad. Lo recomiendo encarecidamente a cualquiera que busque un programador confiable y con experiencia.';
            testimonials_two_Element.textContent =
                'Tomé un curso de programación con Henry y fue una experiencia increíble. Es un profesor apasionado y dedicado que realmente se preocupa por que sus alumnos aprendan. Me enseñó mucho sobre programación y me ayudó a desarrollar las habilidades que necesitaba para tener éxito en mi carrera.';
            testimonials_three_Element.textContent =
                'He tenido el privilegio de ser mentor de Henry durante los últimos años. Es un joven programador brillante con un gran futuro por delante. Es trabajador, aprende rápido y siempre está buscando nuevos desafíos. Estoy seguro de que tendrá éxito en todo lo que haga.';
            testimonials_four_Element.textContent =
                'Henry es un activo invaluable para nuestro equipo. Es un programador talentoso y dedicado que siempre está dispuesto a hacer un esfuerzo adicional. Es un gran jugador de equipo y siempre está dispuesto a ayudar a los demás. Lo recomiendo encarecidamente a cualquiera que busque un programador confiable y con experiencia.';
            testimonials_five_Element.textContent =
                'Henry no solo es un gran programador, sino también un gran amigo. Es una persona honesta, confiable y siempre está dispuesto a ayudar. Estoy muy agradecido de tenerlo como amigo y como colega.';
            name1Element.textContent = "CEO & Fundador";
            name2Element.textContent = "Desarrolladora e Ingeniera";
            name3Element.textContent = "Gerente de Proyectos & Líder Técnico";
            name4Element.textContent = "CEO & Fundador";

            //Resume
            resume_title_resume_Element.textContent = "Resumen";
            resume_title_Element.textContent = "Revisa mi Currículum";
            resume_title_resume2_Element.textContent = "Resumen";
            resume_about_me_Element.textContent =
                'Desarrollador innovador y centrado en los plazos con más de 5 años de experiencia en el diseño y desarrollo de sistemas.';
            resume_title_education_Element.textContent = "Educación";
            resume_education_Element.textContent = "Ingeniería de Sistemas";
            resume_about_education.textContent =
                'Ingeniero de Sistemas altamente calificado con una sólida formación académica y experiencia práctica en el diseño, desarrollo y gestión de sistemas informáticos.';
            resume_Experience_title_Element.textContent = "Experiencia Profesional";
            resume_proyect_Xelergo_Element.textContent = "Desarrollador Back-End Xeler go";
            resume_time_Element.textContent = "Mayo de 2023 - Enero de 2024";
            resume_experience_with_Xelergo.textContent = "Encargado del desarrollo de una API para el uso y manejo de Xeler Go.";
            resume_title_UPHBLUEGROUP_Element.textContent = "Desarrollador Back-End UPH&BLUE GROUP";
            resume_time_UPHBLUEGROUP_Element.textContent = "Abril de 2022 - Julio de 2023";
            reino_unido_Element.textContent = "Reino Unido";
            resume_experience_UPHBLUEGROUP_Element.textContent = "Encargado del desarrollo de diversas APIs y aplicaciones.";
            resume_proyect_Zippyttech_Element.textContent = "Desarrollador Back-End Zippyttech";
            resume_time_Zippyttech_Element.textContent = "Enero de 2021 - Enero de 2024";
            resume_experience_with_Zippyttech_Element.textContent = "Encargado del desarrollo de diversas APIs y aplicaciones.";
            panama_Element.textContent = "Panamá";
            resume_proyect_Pangea_Element.textContent = "Desarrollador Back-End Pangea";
            resume_time_Pangea_Element.textContent = "Marzo de 2023 - Mayo de 2023 ";
            panama2_Element.textContent = "Panamá";  
            resume_experience_with_Pangea_Element.textContent = "Encargado del desarrollo de diversas interfaces.";
            resume_proyect_Romeral_Element.textContent = "Desarrollador FullStack Chacinos el Romeral";    
            resume_time_Romeral_Element.textContent = "Febrero de 2022 - Febrero de 2023 ";
            resume_experience_with_Romeral_Element.textContent =
            "Encargado del desarrollo de un sistema de gestión y control para la empresa.";
            resume_proyect_3d_Element.textContent = "Modelador y Printer 3d 3dpulpodin";
            resume_time_3d_Element.textContent = "Octubre 2023 - Presente ";
            resume_experience_with_3d_Element.textContent = "Encargado del diseño de modelos 3d para impresión.";

            //Services

            services_title_Element.textContent = "Servicios";
            services_subtitle_Element.textContent = "Mis Servicios";
            services_card1_Element.textContent = 'Desarrollador de APIs con 5 años de experiencia en el diseño, desarrollo e implementación de APIs RESTful escalables y seguras.';
            services_card2_Element.textContent = 'Desarrollo de páginas para captar clientes.';
            services_card3_Element.textContent = 'Diseño, modelados e impresiones 3D.';
            services_card4_Element.textContent = 'Análisis de Sistemas y Auditoría.';
            services_card5_Element.textContent = 'Diseño: Conceptual, Lógico y Físico de Base de datos.';
            services_card6_Element.textContent = 'Modelado de personajes, construcción de mundos, desarrollo.';
            services_card3_title_Element.textContent = "Modelado e Impresión 3D";
            services_card4_title_Element.textContent = "Análisis de Sistemas";
            services_card5_title_Element.textContent = "Bases de datos";
            services_card6_title_Element.textContent = "Video Juegos";

            //Portfolio

            portfolio_title_Element.textContent = "Portafolio";
            portfolio_subtitle_Element.textContent = "Mis Trabajos";
            portfolio_subtitle1_Element.textContent = "Todo";
            portfolio_subtitle3_Element.textContent = "Modelados";
            portfolio_name_model1_Element.textContent = "Modelo";
            portfolio_name_model2_Element.textContent = "Modelo";
            portfolio_name_model3_Element.textContent = "Modelo";;
            portfolio_model2_Element.textContent = "Oso de Rosas";   
            portfolio_model3_Element.textContent = "Rey y Reina"; 

            //Contact

            contact_title_Element.textContent = "Contacto";
            contact_subtitle_Element.textContent = "Contáctame";
            contact_address_Element.textContent = "Mi Dirección";
            contact_profiles_Element.textContent = "Redes Sociales";
            contact_email_Element.textContent = "Envíame un correo electrónico";
            contact_call_Element.textContent = "Llámame";

            //Footer

            footer_Element.textContent = "Diseñado por ";

            console.log("Idioma cambiado")

            idiomaActual = "en";
        }
         // Destruye el carrusel de testimonios actual
        $(".testimonials-carousel").trigger('destroy.owl.carousel');

        // Vuelve a inicializar el carrusel de testimonios con el nuevo contenido
        $(".testimonials-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: false,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        });
    }

    // Manejamos el cambio del checkbox
    checkboxIdioma.addEventListener("change", function() {
        idiomaActual = checkboxIdioma.checked ? "es" : "en";
        cambiarIdioma();
    });

    // Llamamos a la función para inicializar el texto del checkbox
    cambiarIdioma();

    // Obtener el switch original y su contenedor
    var originalSwitchContainer = document.getElementById("checkbox-container");

    // Clonar el switch y su contenido (incluyendo el slider)
    var clonedSwitchContainer = originalSwitchContainer.cloneNode(true);
    // Asignar un nuevo ID al switch clonado (opcional)
    clonedSwitchContainer.id = "cloned-checkbox-container";
    // Agregar el switch clonado al contenedor deseado en el DOM
    var mobileNav = document.querySelector('.mobile-nav');
    mobileNav.appendChild(clonedSwitchContainer);

    // Manejar el cambio de idioma para el switch clonado
    var clonedSwitch = clonedSwitchContainer.querySelector("input[type='checkbox']");
    var clonedSwitchText = clonedSwitchContainer.querySelector("#checkbox-text");
    clonedSwitch.addEventListener("change", function() {
        idiomaActual = clonedSwitch.checked ? "es" : "en";
        cambiarIdioma(); // Asegúrate de que esta función maneje el cambio de idioma correctamente
        // Actualizar el texto del switch clonado
        if (clonedSwitch.checked) {
            clonedSwitchText.textContent = "Es"; // Cambiar texto a "Esp" si el switch está activado
        } else {
            clonedSwitchText.textContent = "Eng"; // Cambiar texto a "Eng" si el switch está desactivado
        }
    });

    
});