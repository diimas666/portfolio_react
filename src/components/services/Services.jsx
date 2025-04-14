import Service from '../service/Service';
const servicesData = [
  {
    title: 'Лендинги',
    desc: 'Одностраничные сайты, заточенные на высокую конверсию. Идеальны для продвижения продуктов, услуг или мероприятий благодаря яркому дизайну и четкому call-to-action.',
    bg: '#37FECA',
    num: 1
  },
  {
    title: 'Интернет-магазины',
    desc: 'Функциональные и быстрые платформы для онлайн-продаж. Простая навигация, удобный каталог и интеграция с платежными системами — все для легкого шопинга.',
    bg: '#0095FF',
    num: 2
  },
  {
    title: 'Сайты-визитки',
    desc: 'Минималистичные и стильные сайты для представления бизнеса. Компактно рассказывают о компании, услугах и контактах, создавая сильное первое впечатление.',
    bg: '#0095FF',
    num: 3
  },
  {
    title: 'React-приложения',
    desc: 'Динамичные веб-приложения на React. Быстрые, адаптивные и современные интерфейсы для сложных сервисов — от дашбордов до интерактивных платформ.',
    bg: '#37FECA',
    num: 4
  },
  {
    title: 'Дизайн сайтов',
    desc: 'Уникальный UI/UX-дизайн с акцентом на тренды и удобство. Продуманные макеты, анимации и адаптивность помогают выделить бренд и удерживать внимание пользователей.',
    bg: '#37FECA',
    num: 5
  },
  {
    title: 'SEO',
    desc: 'Оптимизация для повышения видимости в поисковых системах (Optimization for improved search engine visibility)',
    bg: '#0095FF',
    num: 6
  },
];
const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <Service
              key={service.num}
              title={service.title}
              desc={service.desc}
              bg={service.bg}
              num={service.num}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
