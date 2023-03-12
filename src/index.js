import React from 'react';
import ReactDOM from 'react-dom/client';
import PhotoBox from './PhotoBox';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <section id="photo-list"> 
      <PhotoBox url="https://picsum.photos/id/2/200/200" author="Alejandro Escamilla" like="Like: 12" premium={true}/>
      <PhotoBox url="https://picsum.photos/id/26/200/200" author="Vadim Sherbakov" like="Like: 012" download={55} tag={"city"} />
      <PhotoBox url="https://picsum.photos/id/22/200/200" author="Aleks Dorohovich" like="Like: 122" premium={false}/>
      <PhotoBox url="https://picsum.photos/id/21/200/200" author="Paul Jarvis" like="Like: 121"/>
      <PhotoBox url="https://picsum.photos/id/45/200/200" author="Jerry Adney" like="Like: 2" />
      <PhotoBox url="https://picsum.photos/id/23/200/200" author="Yoni Kaplan-Nadel" like="Like: 12" download={25} tag={"wild, forest"}/>

    </section>
);
