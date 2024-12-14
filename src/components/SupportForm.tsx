import React from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useFormSubmit from '../hooks/useFormSubmit';

const SupportForm = () => {
  const { t } = useTranslation();
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus } = useFormSubmit();

  return (
    <form 
      action="https://formsubmit.co/contact@ubod.app" 
      method="POST"
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      {/* Hidden fields for FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New support request from Foodvisor" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href} />

      <FormField
        label={t('support.form.name')}
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      
      <FormField
        label={t('support.form.email')}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      
      <FormField
        label={t('support.form.subject')}
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
      />
      
      <FormField
        label={t('support.form.message')}
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
      />

      {submitStatus && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-lightGreen/20 text-darkGreen' 
            : 'bg-pastelRed/20 text-pastelRed'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-darkGreen text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-darkGreen/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? t('support.form.sending') : t('support.form.submit')}</span>
        <Send size={20} />
      </button>
    </form>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = ({ label, name, type, value, onChange }: FormFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-darkBrown mb-1">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border border-lightBrown/20 focus:outline-none focus:ring-2 focus:ring-lightGreen"
        required
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg border border-lightBrown/20 focus:outline-none focus:ring-2 focus:ring-lightGreen"
        required
      />
    )}
  </div>
);

export default SupportForm;