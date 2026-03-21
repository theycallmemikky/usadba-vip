"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", type: "cottage" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  const inputStyle = {
    background: "var(--color-navy-3)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center p-16 rounded-2xl h-full"
        style={{ background: "var(--color-card)", border: "1px solid var(--color-border-gold)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--color-gold)" }} className="mb-6" />
        <h3
          className="font-display text-3xl font-light mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Заявка отправлена!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <div
      className="p-8 rounded-2xl"
      style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      <h3
        className="font-display text-2xl font-light mb-8"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
      >
        Оставить заявку
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-text-dim)" }}>
              Ваше имя *
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-muted)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-text-dim)" }}>
              Телефон *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+7 900 000-00-00"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-muted)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-text-dim)" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.ru"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-muted)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-text-dim)" }}>
            Тип размещения
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="cottage">Коттедж</option>
            <option value="apartment">Апартаменты</option>
            <option value="any">Любой вариант</option>
          </select>
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-text-dim)" }}>
            Сообщение
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ваши пожелания, даты заезда и выезда, количество гостей..."
            rows={4}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-gold-muted)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl btn-gold text-sm"
        >
          <Send size={16} />
          Отправить заявку
        </button>

        <p className="text-xs text-center" style={{ color: "var(--color-text-dim)" }}>
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
        </p>
      </form>
    </div>
  );
}
