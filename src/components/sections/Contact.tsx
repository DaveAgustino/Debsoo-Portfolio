import React from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM13 9h2v2h-2zM9 13h2v2H9z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge label="Let's Connect" icon={badgeIcon} className="reveal" />
        </div>
        <h2 className="display reveal">
          Let's build something
          <br />
          exceptional together.
        </h2>
        <p className="contact-sub reveal">
          Have a project in mind? Let's talk about how I can help bring your vision to life with clean code and premium design.
        </p>
        <div className="contact-actions reveal">
          <Button href="mailto:debsoodevsoft@gmail.com" variant="red-solid">
            Send Email
          </Button>
          <Button href="https://t.me/Debsoopump" target="_blank" rel="noopener noreferrer" variant="dark">
            Telegram
          </Button>
        </div>

        <a 
          href="https://t.me/Debsoopump" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-qr-card reveal reveal-delay-1"
        >
          <div className="contact-qr-wrapper">
            <img src="/images/telegram_qr.png" alt="Telegram QR Code" className="contact-qr-img" />
          </div>
          <span className="contact-qr-handle">@DEBSOOPUMP</span>
        </a>
      </div>
    </section>
  );
};
export default Contact;

