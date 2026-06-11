import React from 'react';
import { Button } from '../common/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="display reveal">
          Ready to start
          <br />
          a project?
        </h2>
        <p className="reveal">
          Let's create something remarkable. Get in touch and let's discuss how I can bring your vision to life.
        </p>
        <div className="reveal">
          <Button href="mailto:debsoodevsoft@gmail.com" variant="red-solid">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
