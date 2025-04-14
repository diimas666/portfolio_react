import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">{t('contacts')}</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">{t('location')}</h2>
            <p>{t('address')}</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">{t('messengers')}</h2>
            <p>
              <a href="tel:+380993066855">{t('phoneNumber')}</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">{t('email')}</h2>
            <p>
              <a href="mailto:uu36548@gmail.com">uu36548@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export { Contacts };
