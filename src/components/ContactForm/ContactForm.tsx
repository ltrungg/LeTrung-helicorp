import { type FormEvent, useState } from 'react';
import type { ContactFormData, ContactFormErrors, FormStatus } from '../../types';
import { INTEREST_OPTIONS } from '../../constants';
import { pushTrackingEvent } from '../../hooks';
import { validateContactForm, isFormValid } from '../../utils/validation';
import { submitContactForm, getWebhookUrl } from '../../utils/webhook';
import './ContactForm.css';

const INITIAL_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  interest: INTEREST_OPTIONS[0],
};

/** Contact form section with validation and webhook/demo submission. */
export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const hasWebhook = Boolean(getWebhookUrl());

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);

    if (!isFormValid(nextErrors)) {
      pushTrackingEvent(
        'form_validation_error',
        Object.keys(nextErrors).join(',')
      );
      return;
    }

    setStatus('submitting');
    pushTrackingEvent('form_submit_attempt', formData.interest);

    try {
      const result = await submitContactForm(formData);
      setStatus('success');
      setFormData(INITIAL_DATA);
      pushTrackingEvent('form_submit_success', result.mode);
    } catch (error) {
      console.error('[ContactForm] Submit error:', error);
      setStatus('error');
      pushTrackingEvent('form_submit_error');
    }
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container contact__layout">
        <div className="contact__copy reveal">
          <span className="contact__eyebrow">Đăng ký nhận tin</span>
          <h2>Nhận tư vấn sớm về VitaRing AI.</h2>
          <p>
            Để lại thông tin để nhận báo giá ưu đãi và cập nhật mới nhất về sản
            phẩm VitaRing AI trước khi ra mắt chính thức.
          </p>
          <ul className="contact__checklist">
            <li>Validate họ tên, email và số điện thoại.</li>
            <li>Hiển thị trạng thái gửi thành công hoặc thất bại.</li>
            <li>Hỗ trợ gửi dữ liệu qua Webhook hoặc demo localStorage.</li>
          </ul>
        </div>

        <form
          className="contact__form reveal"
          onSubmit={handleSubmit}
          noValidate
          id="contact-form"
        >
          <label className="contact__field">
            <span>Họ và tên</span>
            <input
              type="text"
              id="input-name"
              value={formData.name}
              placeholder="Ví dụ: Lê Trung"
              onChange={(e) => updateField('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && (
              <small className="contact__error">{errors.name}</small>
            )}
          </label>

          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              id="input-email"
              value={formData.email}
              placeholder="email@example.com"
              onChange={(e) => updateField('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <small className="contact__error">{errors.email}</small>
            )}
          </label>

          <label className="contact__field">
            <span>Số điện thoại</span>
            <input
              type="tel"
              id="input-phone"
              value={formData.phone}
              placeholder="0901234567"
              onChange={(e) => updateField('phone', e.target.value)}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && (
              <small className="contact__error">{errors.phone}</small>
            )}
          </label>

          <label className="contact__field">
            <span>Nhu cầu quan tâm</span>
            <select
              id="input-interest"
              value={formData.interest}
              onChange={(e) => updateField('interest', e.target.value)}
            >
              {INTEREST_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <button
            className="btn btn--primary btn--full"
            type="submit"
            id="btn-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Đang gửi...' : 'Gửi đăng ký'}
          </button>

          {status === 'success' && (
            <p className="contact__message contact__message--success">
              Gửi thành công!{' '}
              {hasWebhook
                ? 'Dữ liệu đã được gửi đến webhook.'
                : 'Đang chạy chế độ demo localStorage.'}
            </p>
          )}
          {status === 'error' && (
            <p className="contact__message contact__message--error">
              Không thể gửi dữ liệu. Vui lòng thử lại.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
