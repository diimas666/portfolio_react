const WhyUs = () => {
    const whyDate = [
        {
            id: 1,
            title: 'Уникальность в каждом решении',
            desc: 'Мы создаём сайты, которые отражают ваш стиль, выделяют бренд и гармонично сочетают красоту с удобством.'
        },
        {
            id: 2,
            title: 'Скорость, которая цепляет',
            desc: 'Мгновенная загрузка и безупречная работа — ваш сайт захватывает внимание и удерживает клиентов с первого клика.'
        },
        {
            id: 3,
            title: 'Результаты, что вдохновляют',
            desc: 'От первых идей до вершин поисковиков — мы превращаем проекты в источник вашей прибыли.'
        },
        {
            id: 4,
            title: 'Технологии нового уровня',
            desc: 'Инновационные решения делают ваш сайт не просто актуальным, а лидером завтрашнего дня.'
        }
    ];
    return ( 
        <section className="whyUs">
            <div className="container">
            <div className="flex-whyUs">
                {whyDate.map((item) => (
                    <div className="whyUs-item" key={item.id}>
                        <h4 className="h4-item">{item.title}</h4>
                        <p className="p-item">{item.desc}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
     );
}
 
export default WhyUs;