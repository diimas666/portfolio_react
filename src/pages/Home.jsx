import { useTranslation } from 'react-i18next';
import Services from '../components/services/Services';
import { Header } from '../components/header/Header';
import TechGrid from '../components/TechGrid/TechGrid';
import WhyUs from '../components/WhyUs';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-2">{t('techStack')}</h2>
          <TechGrid />
          <h2 className="title-2">{t('myServices')}</h2>
          <Services />
          <h2 className="title-2">{t('whyUs')}</h2>
          <WhyUs />
          <h2 className="title-2">{t('forma')}</h2>
        </div>
      </main>
    </>
  );
}

export { Home };
