import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          services: 'Services',
          home: 'Home',
          projects: 'Projects',
          contacts: 'Contacts',
          frontendDev: 'Frontend Developer',
          reactEnthusiast: 'React Enthusiast',
          problemSolver: 'Problem Solver',
          hiMyNameIs: 'Hi, my name is',
          passionForLearning: 'with passion for learning and creating.',
          downloadCV: 'Download CV',
          location: 'Location',
          address: 'Ukraine, Odesa',
          messengers: 'Telegram / WhatsApp',
          phoneNumber: '+3 (809) 93-06-68-5*',
          email: 'Email',
          techStack: 'Tech Stack',
          myServices: 'My services',
          whyUs: 'Why us',
          forma: 'Feedback form'
        },
      },
      ru: {
        translation: {
          services: 'Услуги',
          home: 'Главная',
          projects: 'Проекты',
          contacts: 'Контакты',
          frontendDev: 'Фронтенд Разработчик',
          reactEnthusiast: 'React Энтузиаст',
          problemSolver: 'Решатель проблем',
          hiMyNameIs: 'Привет, меня зовут',
          passionForLearning: 'с увлечением учусь и создаю.',
          downloadCV: 'Скачать резюме',
          location: 'Локация',
          address: 'Украина, Одесса',
          messengers: 'Телеграм / WhatsApp',
          phoneNumber: '+3 (809) 93-06-68-5*',
          email: 'Электронная почта',
          techStack: 'Технический стек',
          myServices: 'Мои услуги',
          whyUs: 'Почему мы',
          forma: 'Форма обратной связи'
        },
      },
      uk: {
        translation: {
          services: 'Послуги',
          home: 'Головна',
          projects: 'Проекти',
          contacts: 'Контакти',
          frontendDev: 'Фронтенд Розробник',
          reactEnthusiast: 'React Ентузіаст',
          problemSolver: 'Вирішувач проблем',
          hiMyNameIs: 'Привіт, мене звати',
          passionForLearning: 'з пристрастю до навчання та створення.',
          downloadCV: 'Завантажити резюме',
          location: 'Локація',
          address: 'Україна, Одеса',
          messengers: 'Телеграм / WhatsApp',
          phoneNumber: '+3 (809) 93-06-68-5*',
          email: 'Електронна пошта',
          techStack: 'Технічний стек',
          myServices: 'Мої послуги',
          whyUs: 'Чому ми',
          forma: 'Форма зворотнього звʼязку'
      

        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
