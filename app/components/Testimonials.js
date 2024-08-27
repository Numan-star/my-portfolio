"use client";

import { useRef } from 'react';
import TestimonialItem from './TestimonialItem';

export default function Testimonials() {
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    containerRef.current?.style.setProperty('animation-play-state', 'paused');
  };

  const handleMouseLeave = () => {
    containerRef.current?.style.setProperty('animation-play-state', 'running');
  };

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at Company',
      testimonial: 'This is an amazing service that really helped our business grow!',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Manager',
      testimonial: 'Fantastic experience! The team was highly professional and delivered great results.',
    },
    {
      name: 'Samuel Green',
      role: 'Product Designer',
      testimonial: 'A wonderful service with a great support team. Highly recommend to anyone.',
    },
  ];

  return (
    <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-5">Hear What My Clients Say</h2>
          <p className="text-base text-gray-300">
            Explore our range of digital services, including web development, design, API integration, and maintenance, to ensure online success. Let us help you create something remarkable.
          </p>
        </div>
        <div
          className="overflow-hidden whitespace-nowrap relative" 
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex animate-marquee">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialItem
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
