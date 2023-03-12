import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <section className="container" style={ {border:"3px solid black", padding: "1rem" } }> 
      <p className='red-text'>App 1</p>
    </section>
);
