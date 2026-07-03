import { useState } from 'react';
import { CHATBOT_ANSWERS, QUICK_QUESTIONS } from '../../constants';
import { pushTrackingEvent } from '../../hooks';
import type { ChatMessage } from '../../types';
import './Chatbot.css';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: 'bot',
    text: 'Xin chào! Mình là trợ lý demo của VitaRing AI. Bạn muốn hỏi gì về sản phẩm?',
  },
];

/** Floating chatbot widget with rule-based quick answers. */
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);

  const ask = (key: string, label: string) => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: label },
      {
        role: 'bot',
        text:
          CHATBOT_ANSWERS[key] || 'Mình chưa có dữ liệu cho câu hỏi này.',
      },
    ]);
    pushTrackingEvent('chatbot_question', key);
  };

  return (
    <div className="chatbot" id="chatbot">
      <div
        className={`chatbot__window ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Chatbot tư vấn sản phẩm"
        aria-hidden={!isOpen}
      >
        <div className="chatbot__header">
          <div>
            <strong>VitaBot</strong>
            <span>Rule-based demo</span>
          </div>
          <button
            type="button"
            className="chatbot__close"
            onClick={() => setIsOpen(false)}
            aria-label="Đóng chatbot"
          >
            ×
          </button>
        </div>

        <div className="chatbot__messages">
          {messages.map((msg, idx) => (
            <p
              className={`chatbot__bubble chatbot__bubble--${msg.role}`}
              key={`${msg.role}-${idx}`}
            >
              {msg.text}
            </p>
          ))}
        </div>

        <div className="chatbot__quick">
          {QUICK_QUESTIONS.map((q) => (
            <button
              type="button"
              key={q.key}
              onClick={() => ask(q.key, q.label)}
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      <button
        className="chatbot__fab"
        type="button"
        id="chatbot-toggle"
        onClick={() => {
          setIsOpen((prev) => !prev);
          pushTrackingEvent('chatbot_toggle', isOpen ? 'close' : 'open');
        }}
        aria-label="Mở chatbot tư vấn"
      >
        💬
      </button>
    </div>
  );
}
