import React, { useState } from 'react';
import articlePic from '../../assets/images/article.jpg';
import articleContext from './articleContext';
import Art from '../articles/art';

const article = () => {
  const article = articleContext;
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                Article
              </div>
              <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                {' '}
                TeamAnt <span className="text-red"> Article</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
            {article.map((art, idx) => (
              <Art
                date={art.date}
                id={idx}
                title={art.title}
                title2={art.title2}
                context={art.context}
                image={art.image}
                key={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default article;
