import React from 'react';
import { Badge } from '../common/Badge';
import { faqs } from '../../data/portfolioData';

export const FAQ: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM13 9h2v2h-2zM9 13h2v2H9z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header reveal">
          <Badge label="FAQ" icon={badgeIcon} />
          <h2>Common Questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details 
              key={faq.id} 
              className={`faq-item reveal reveal-delay-${(index % 5) + 1}`}
            >
              <summary>
                <span className="faq-number">{faq.number}</span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
