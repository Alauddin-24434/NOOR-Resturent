// FarmToTableConcept.js

import './FarmToTableConcept.css'; // Import the CSS file for styling

const FarmToTableConcept = () => {
  // Placeholder image URLs for the local partnerships gallery
  const partnerships = [
    {
      name: 'Local Farm A',
      image: 'https://i.ibb.co/XJDGPn3/Redfearn-Farm-12-e1527305012681.jpg',
    },
    {
      name: 'Organic Co-op B',
      image: 'https://i.ibb.co/C1djDXQ/qlwujpjp3at01.jpg',
    },
    {
      name: 'Family-owned Farm C',
      image: 'https://i.ibb.co/V3MFD3Q/1640820-NL0282-featured.png',
    },
    {
      name: 'Community Garden D',
      image: 'https://i.ibb.co/drJ8ztg/vco-32946-596548c64a-ba79d2dedc-c0f25e9910-16263405.jpg',
    },
    {
      name: 'Organic Farm E',
      image: 'https://i.ibb.co/TwxK26X/c0499885-800px-wm.jpg',
    },
    {
      name: 'Family Orchard F',
      image: 'https://i.ibb.co/Y7v0G9v/best-bay-area-apple-picking-istock.webp',
    },
    {
      name: 'Greenhouse Growers G',
      image: 'https://i.ibb.co/Rc1DLSp/3-Sedan-Floral-labor.jpg',
    },
    {
      name: 'Herb Garden H',
      image: 'https://i.ibb.co/JCGNLfR/ofc-DBrocka-ABoone-gardensign-05062022-landscape-1003798201.jpg',
    },
  ];
  

  return (
    <section className='p-2'>
         <h3 className='text-5xl font-semi-bold mb-8  text-orange-600 '>Local Partnerships</h3>
         <div className='shadow-2xl bg-slate-400 border p-4'>
         <p className='text-lg font-extralight '>Experience the freshness of locally-sourced and organic ingredients:</p>
     
     <p  className='text-lg font-extralight'>We proudly collaborate with local farmers and suppliers to bring you the finest produce and ingredients.</p>
         </div>
         <div className="farm-to-table-container p-2">
      <div className="partnerships-section">
       
        <div className="partnerships-gallery">
          {partnerships.map((partner, index) => (
            <div key={index} className="partnership-item">
              <img src={partner.image} alt={partner.name} />
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default FarmToTableConcept;
