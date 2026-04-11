import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      header: {
        about: "Sobre mim",
        services: "Serviços",
        projects: "Projetos",
        contact: "Entre em contato"
      },
      home: {
        scrollDown: "ROLE PARA BAIXO"
      },
      hero: {
        title1: "Projetando interfaces ",
        title2: "modernas",
        title3: " que ",
        title4: "impulsionam",
        title5: " o ",
        title6: "crescimento",
        title7: " do seu negócio",
        punctuation: ".",
        subtitleHtml: "Especialista na criação de interfaces de <strong className='non-bold'>alta performance</strong> que conectam sua marca ao público e transformam a presença digital da sua empresa em <strong className='non-bold'>resultados reais</strong>.",
        viewProjects: "Ver Projetos"
      },
      aboutMe: {
        title: "Sobre Mim",
        descriptionHtml: "Sou João Gnoatto, sou UI/UX Designer e Desenvolvedor de Software. Atualmente cursando Engenharia de Software na FAG, transformo desafios complexos em interfaces <strong>modernas</strong> e <strong>eficientes</strong>. Meu trabalho vai além da estética: foco no crescimento empresarial através de Design Systems escaláveis e interfaces de alta performance, como demonstram meus projetos em ecossistemas bancários e comerciais."
      },
      services: {
        title: "Serviços",
        items: {
          modern_interfaces: "Interfaces modernas",
          mobile_interfaces: "Interfaces mobile",
          web_systems: "Sistemas WEB",
          landing_pages: "Landing Pages"
        }
      },
      projectsSec: {
        title: "Projetos",
        viewProject: "Ver projeto →"
      },
      ctaContact: {
        title: "Se interessou pelo meu trabalho?",
        subtitle: "Entre em contato pelo Whatsapp",
        button: "Enviar mensagem"
      },
      projectPage: {
        notFound: "Projeto não encontrado",
        backToHome: "Voltar para Home",
        aboutProject: "Sobre o Projeto",
        mainScreens: "Principais telas"
      },
      projectData: {
        precoCertoDesc: "Projeto de e-commerce focado em oferecer uma experiência de compra rápida e intuitiva, com um design moderno e responsivo.",
        metalBankDesc: "O MetalBank foi desenvolvido como um projeto acadêmico para o curso de Engenharia de Software na FAG, com o objetivo de simular a interface e a lógica de um sistema bancário moderno. Minha missão foi unir a formalidade e a segurança exigidas por instituições financeiras a uma usabilidade fluida e intuitiva. Durante o desenvolvimento, atuei como UI/UX Designer e desenvolvedor Front-End, focando na criação de uma interface limpa que prioriza as ações essenciais do usuário, como saques, depósitos e visualização de saldo.",
        metalBankLpDesc: "Landing page criada para promover o projeto do MetalBank e apresentar suas funcionalidades e recursos, com um design moderno e focado em converter visitantes em leads."
      }
    }
  },
  en: {
    translation: {
      header: {
        about: "About me",
        services: "Services",
        projects: "Projects",
        contact: "Get in touch"
      },
      home: {
        scrollDown: "SCROLL DOWN"
      },
      hero: {
        title1: "Designing ",
        title2: "modern",
        title3: " interfaces that ",
        title4: "drive",
        title5: " your business ",
        title6: "growth",
        title7: "",
        punctuation: ".",
        subtitleHtml: "Specialist in creating <strong className='non-bold'>high-performance</strong> interfaces that connect your brand to your audience and turn your company's digital presence into <strong className='non-bold'>real results</strong>.",
        viewProjects: "View Projects"
      },
      aboutMe: {
        title: "About Me",
        descriptionHtml: "I'm João Gnoatto, a UI/UX Designer and Software Developer. Currently studying Software Engineering at FAG, I transform complex challenges into <strong>modern</strong> and <strong>efficient</strong> interfaces. My work goes beyond aesthetics: I focus on business growth through scalable Design Systems and high-performance interfaces, as demonstrated by my projects in banking and commercial ecosystems."
      },
      services: {
        title: "Services",
        items: {
          modern_interfaces: "Modern interfaces",
          mobile_interfaces: "Mobile interfaces",
          web_systems: "WEB Systems",
          landing_pages: "Landing Pages"
        }
      },
      projectsSec: {
        title: "Projects",
        viewProject: "View project →"
      },
      ctaContact: {
        title: "Interested in my work?",
        subtitle: "Get in touch via Whatsapp",
        button: "Send message"
      },
      projectPage: {
        notFound: "Project not found",
        backToHome: "Back to Home",
        aboutProject: "About the Project",
        mainScreens: "Main screens"
      },
      projectData: {
        precoCertoDesc: "E-commerce project focused on providing a fast and intuitive shopping experience, with a modern and responsive design.",
        metalBankDesc: "MetalBank was developed as an academic project for the Software Engineering course at FAG, aiming to simulate the interface and logic of a modern banking system. My mission was to unite the formality and security required by financial institutions with fluid and intuitive usability. During development, I acted as UI/UX Designer and Front-End developer, focusing on creating a clean interface that prioritizes essential user actions, such as withdrawals, deposits, and balance viewing.",
        metalBankLpDesc: "Landing page created to promote the MetalBank project and present its features and resources, with a modern design focused on converting visitors into leads."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // default language
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
