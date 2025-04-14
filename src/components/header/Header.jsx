import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import './style.css';
import Btn from '../btn/Btn';

function Header() {
  const { t } = useTranslation();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [t('frontendDev'), t('reactEnthusiast'), t('problemSolver')],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, [t]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            {t('hiMyNameIs')} <em>Dima</em>
          </strong>
          <br />
          <span ref={typedRef}></span>
        </h1>
        <div className="header__text">
          <p>{t('passionForLearning')}</p>
        </div>
        <Btn href="/files/Dmytro-Frontend.pdf" download>
          {t('downloadCV')}
        </Btn>
      </div>
    </header>
  );
}

export { Header };
