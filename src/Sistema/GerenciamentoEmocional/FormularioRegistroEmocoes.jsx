import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FormularioRegistroEmocoes = ({ onRegistrar }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    data: '',
    emocao: '',
    intensidade: '',
    motivo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistrar(formData);
    setFormData({ data: '', emocao: '', intensidade: '', motivo: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('data')}:</label>
        <input type="date" name="data" value={formData.data} onChange={handleChange} required />
      </div>
      <div>
        <label>{t('emocao')}:</label>
        <select name="emocao" value={formData.emocao} onChange={handleChange} required>
          <option value="">{t('selecione')}</option>
          <option value="Feliz">{t('feliz')}</option>
          <option value="Triste">{t('triste')}</option>
          <option value="Neutro">{t('neutro')}</option>
        </select>
      </div>
      <div>
        <label>{t('intensidade')}:</label>
        <select name="intensidade" value={formData.intensidade} onChange={handleChange} required>
          <option value="">{t('selecione')}</option>
          <option value="Baixa">{t('baixa')}</option>
          <option value="Média">{t('media')}</option>
          <option value="Alta">{t('alta')}</option>
        </select>
      </div>
      <div>
        <label>{t('motivo')}:</label>
        <input type="text" name="motivo" value={formData.motivo} onChange={handleChange} required />
      </div>
      <button type="submit">{t('registrar')}</button>
    </form>
  );
};

export default FormularioRegistroEmocoes;
