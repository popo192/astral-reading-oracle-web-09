
import React from 'react';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl font-bold mb-8 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          Mystical Blog
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 mb-8">
            This is a placeholder for the blog page. In a complete implementation, this would contain articles about tarot reading, spirituality, and related mystical topics.
          </p>
          
          <div className="space-y-12">
            <article className="p-6 bg-mystical-purple-dark/30 rounded-lg border border-mystical-purple/20">
              <h2 className="font-serif text-2xl text-mystical-gold mb-4">Understanding the Major Arcana</h2>
              <p className="text-white/70 mb-4">
                The Major Arcana cards represent significant life events and spiritual lessons. They often indicate important milestones, challenges, or transformations in our journey...
              </p>
              <a href="#" className="text-mystical-purple-light hover:text-mystical-gold transition-colors">Read more</a>
            </article>
            
            <article className="p-6 bg-mystical-purple-dark/30 rounded-lg border border-mystical-purple/20">
              <h2 className="font-serif text-2xl text-mystical-gold mb-4">Tarot Spreads for Beginners</h2>
              <p className="text-white/70 mb-4">
                If you're new to tarot reading, starting with simple spreads can help you build your interpretative skills. These beginner-friendly layouts provide clear insights without overwhelming...
              </p>
              <a href="#" className="text-mystical-purple-light hover:text-mystical-gold transition-colors">Read more</a>
            </article>
            
            <article className="p-6 bg-mystical-purple-dark/30 rounded-lg border border-mystical-purple/20">
              <h2 className="font-serif text-2xl text-mystical-gold mb-4">Connecting with Your Intuition</h2>
              <p className="text-white/70 mb-4">
                The true power of tarot comes not from the cards themselves, but from how they help you connect with your intuition. Learn techniques to deepen this connection and enhance your readings...
              </p>
              <a href="#" className="text-mystical-purple-light hover:text-mystical-gold transition-colors">Read more</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
