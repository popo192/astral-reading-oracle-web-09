
import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl font-bold mb-8 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 mb-8">
            This is a placeholder for the Terms & Conditions page. In a complete implementation, this would contain the website's terms of service, privacy policy, and other legal information.
          </p>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl text-mystical-gold mb-4">Disclaimer</h2>
            <p className="text-white/70 mb-4">
              The tarot readings provided on this website are for entertainment and personal growth purposes only. They do not constitute medical, legal, financial, or psychological advice. Always consult appropriate professionals for important life decisions.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl text-mystical-gold mb-4">Privacy Policy</h2>
            <p className="text-white/70 mb-4">
              Your privacy is important to us. This website does not store your reading history or personal information. All readings are conducted within your local browser session only.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="font-serif text-2xl text-mystical-gold mb-4">Intellectual Property</h2>
            <p className="text-white/70 mb-4">
              All content on this website, including text, graphics, logos, and tarot card interpretations, is the property of Mystic Tarot and protected by intellectual property laws.
            </p>
          </section>
          
          <section>
            <h2 className="font-serif text-2xl text-mystical-gold mb-4">Contact</h2>
            <p className="text-white/70 mb-4">
              For questions or concerns regarding these terms, please contact us at support@mystictarot.example.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
