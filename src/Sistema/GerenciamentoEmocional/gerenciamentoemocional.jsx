    import React, { useState } from 'react';
    import { useTranslation } from 'react-i18next';
    import FormularioRegistroEmocoes from './FormularioRegistroEmocoes';
    import NavBarEmocoes from './NavBarEmocoes';
    function GerenciamentoEmocional() {
      const { t } = useTranslation();

      const [emocoes, setEmocoes] = useState([]);

      const handleRegistrarEmocao = (emocao) => {
        setEmocoes([...emocoes, emocao]);
      };

      return (
        <div>
          <NavBarEmocoes />
          
          <h2>{t('Gerenciamento de Emoções')}</h2>
          <h3>{t('Registrar Emoções')}</h3>
         <FormularioRegistroEmocoes onRegistrar={handleRegistrarEmocao} />
         
          <h3>{t('Emoções Registradas')}</h3>
          <ul>
            {emocoes.map((emocao) => (
              <li key={emocao.id}>
                {t('Data')}: {emocao.data}, {t('Emoção')}: {emocao.emocao}, {t('Intensidade')}: {emocao.intensidade}, {t('Motivo')}: {emocao.motivo}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default GerenciamentoEmocional;