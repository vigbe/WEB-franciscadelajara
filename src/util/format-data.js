export default (data) => {
  return(
    {
      builderId: data._id ? data._id : "5fb2a5f3ea262c2e14e462ad",
      typeId: data.user ? "user" : "office",
      officeId: data.user ? data.user : data.office,
      primaryColor: data.primaryColor ? data.primaryColor : "#FF605B",
      //#1691DE - azul
      address: data.address ? data.address : "Badajoz 100, oficina 523 , las Condes",
      email: data.email ? data.email : "gerencia@2cpropiedades.cl",
      facebook: data.facebook ? data.facebook : "https://facebook.com",
      twitter: data.twitter ? data.twitter : "https://twitter.com",
      instagram: data.instagram ? data.instagram : "https://instagram.com",
      favicon: data.favicon ? data.favicon : require("../images/icon.png"),      
      lat: data.lat ? data.lat : "-33.40807316856108", 
      lng: data.lng ? data.lng : "-70.57273730238288",
      logo: data.logo ? data.logo : require("../images/logo-light.svg"),
      logoDark: data.logoDark ? data.logoDark : require("../images/logo-dark.svg"),
      movil: data.movil ? data.movil : "+56 9 2259 2692",
      phone: data.phone ? data.phone : "+56 9 2259 2692",
      footerText: data.footerText ? data.footerText : "Somos una empresa con mas de 25 años en el rubro del corretaje inmobiliario",
      home:{
        hero: {
          background: data.home && data.home.hero && data.home.hero.background ? data.home.hero.background : require("../images/template-home-hero-background.jpg"),
          title: data.home && data.home.hero && data.home.hero.title ? data.home.hero.title : "Tu inmobiliaria de confianza"
        },        
        properties: {
          title: data.home && data.home.properties && data.home.properties.title ? data.home.properties.title : "Contamos con una selección exclusiva de propiedades.",
          maxProperties: data.home && data.home.properties && data.home.properties.maxProperties ? data.home.properties.maxProperties : 9,
          footer: data.home && data.home.properties && data.home.properties.footer ? data.home.properties.footer : "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
          buttonText: data.home && data.home.properties && data.home.properties.buttonText ? data.home.properties.buttonText : "Ver más"
        },        
        about: {
          banner: {
            image: data.home && data.home.about && data.home.about.banner && data.home.about.banner.image ? data.home.about.banner.image : require("../images/template-home-about-hero-background.jpg"),
            title: data.home && data.home.about && data.home.about.banner && data.home.about.banner.title ? data.home.about.banner.title : "Somos una empresa con mas de 20 años en el rubro del corretaje inmobiliario",
            subTitle: data.home && data.home.about && data.home.about.banner && data.home.about.banner.subTitle ? data.home.about.banner.subTitle : "Esto nos permite entender mejor que nadie las necesidades de nuestros clientes, por eso ponemos el foco en que la experienca de compra o arriendo sea única",
            buttonText: data.home && data.home.about && data.home.about.banner && data.home.about.banner.buttonText ? data.home.about.banner.buttonText : "Conózcanos"
          }
        },  
        services: {
          items: data.home && data.home.services && data.home.services.items.length ? data.home.services.items : [
            {
              title: "Compra",
              description: "¿Buscas propiedad? Gestionamos esa busqueda con rapidéz y eficacia, cuenta con nosotros."
            },
            {
              title: "Venta",
              description: "Asesoría en todo el proceso de venta, desde la publicidad a la entrega material del bien inmueble."
            },
            {
              title: "Arriendo",
              description: "Buscamos el arrendatario conm el perfil óptimo para tu propiedad en el menor tiempo posible."
            }
          ]
        },  
        reviews: {
          items: data.home && data.home.reviews && data.home.reviews.items.length ? data.home.reviews.items : [
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 1"
            },
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 2"
            },
            {
              id: null,
              review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.",
              author: "Cliente 3"
            }
          ]
        }                    
      },
      about:{
        hero: {
          background: data.about && data.about.hero && data.about.hero.background ? data.about.hero.background : require("../images/template-about-hero-background.jpg"),
          title: data.about && data.about.hero && data.about.hero.title ? data.about.hero.title : "Un equipo de profesionales especializados en el sector inmobiliario."
        },
        history: {
          background: data.about && data.about.history && data.about.history.background ? data.about.history.background : require("../images/template-about-history-background.jpg"),
          description: data.about && data.about.history && data.about.history.description ? data.about.history.description : "<p>Somos 2cpropiedades, una empresa con varios años de trayectoria en el dinámico mercado inmobiliario, reconocidos por un servicio altamente personalizado y eficiente.</p><p>Nuestra gran fortaleza es el profundo conocimiento comercial inmobiliario que nos permite agregar valor a todos los proyectos que emprendemos y servicios que entregamos.<p/>",
          title: data.about && data.about.history && data.about.history.title ? data.about.history.title : "Nuestra Historia"
        },
        description: {
          items: data.about && data.about.description && data.about.description.items.length ? data.about.description.items : [
            {
              title: "Misión",
              description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
            },
            {
              title: "Visión",
              description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
            },
            {
              title: "Valores",
              description: "En el ámbito de todo negocio inmobiliario, que nuestros clientes nos reconozcan como la mejor opción para exigir el máximo provecho a sus recursos inmobiliario."
            }
          ]
        },
        stats: {
          proffesionals: data.about && data.about.stats && data.about.stats.proffesionals ? data.about.stats.proffesionals : 70,
          properties: data.about && data.about.stats && data.about.stats.properties ? data.about.stats.properties : 1000,
          years: data.about && data.about.stats && data.about.stats.years ? data.about.stats.years : 50,
          transactions: data.about && data.about.stats && data.about.stats.transactions ? data.about.stats.transactions : 500
        },
        team: {
          visible: true,
          items: data.about && data.about.team && data.about.team.items.length ? data.about.team.items : [
            {
              avatar: require("../images/template-team-member-1.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
              email: "usuario1@example.com",
              fullName: "Usuario 1",
              phone: "+56 9 5555 5555"
            },
            {
              avatar: require("../images/template-team-member-2.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca.",
              email: "usuario2@example.com",
              fullName: "Usuario 2",
              phone: "+56 9 5555 5555"
            },
            {
              avatar: require("../images/template-team-member-3.jpg"),
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
              email: "usuario3@example.com",
              fullName: "Usuario 3",
              phone: "+56 9 5555 5555"
            },
            {
              //avatar: require("../images/template-team-member-4.jpg"),
              avatar: "",
              cv: "Ingeniero Comercial, Master en Finanzas. Inversor inmobiliario, con 6 años de experiencia en Banca, Mesa de Dinero. 6 años en el corretaje de propiedades, especializado en el manejo de cartera de propiedades. ",
              email: "usuario4@example.com",
              fullName: "Usuario 4",
              phone: "+56 9 5555 5555"
            }                          
          ]
        },
        ubication: {
          title:  data.about && data.about.ubication && data.about.ubication.title ? data.about.ubication.title : "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto"
        }
      },
      contact: {
        map: {
          title: data.contact && data.contact.map && data.contact.map.title ? data.contact.map.title : "Encuéntranos en Sucursal Chicureo Camino a Chicureo 2 km. esquina Los Ingleses Colina - Santiago",
          subTitle: data.contact && data.contact.map && data.contact.map.subTitle ? data.contact.map.subTitle : "234"
        },
        title: data.contact && data.contact.title ? data.contact.title : "¿Dudas? ¿Consultas? Estamos aquí para ayudarlo.",
        subTitle: data.contact && data.contact.subTitle ? data.contact.subTitle : "Envienos un mensaje y uno de nuestros asesores se pondra en contacto a la brevedad"        
      },
    }
  )
}