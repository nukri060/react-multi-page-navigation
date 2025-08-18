import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function About() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic');

  return (
    <div className="about-page-wrapper">
      <h1>About Our Community</h1>
      {topic === 'history' && (
        <section>
          <h2>Our History</h2>
          <p>Founded in 2020, our community started as a small group of enthusiasts. Over the years, we have grown into a thriving platform for connection and learning.</p>
          <p>We are proud of our journey and the milestones we have achieved together with our members.</p>
        </section>
      )}
      {topic === 'team' && (
        <section>
          <h2>Our Team</h2>
          <p>We are a dedicated team of developers, designers, and community managers passionate about creating a welcoming and engaging environment for everyone.</p>
          <p>Our goal is to continuously improve the platform and provide the best possible experience for our users.</p>
        </section>
      )}
      {!topic && (
        <section>
          <p>Welcome to our vibrant online community! We are dedicated to connecting people and sharing knowledge.</p>
          <p>Our mission is to provide a platform where individuals can discover, learn, and grow together. We believe in the power of connection and the endless possibilities that arise when people come together.</p>
          <p>Join us today and become a part of something special!</p>
        </section>
      )}
    </div>
  );
}