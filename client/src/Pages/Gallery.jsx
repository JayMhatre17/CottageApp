import React, { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  '../images/front2.jpg',
  '../images/froont.jpg',
  '../images/image1.jpg',
  '../images/image2.jpg',
  '../images/image3.jpg',
  '../images/image4.jpg',
  '../images/image5.jpg',
  '../images/gview.jpg',
  '../images/table.jpg',
  '../images/side.jpg',
  '../images/unside.jpg',
  '../images/swing.jpg',
];

const Gallery = () => {
  const [data, setData] = useState({ image: '', i: 0 });
  const viewImage = (image, i) => {
    setData({ image: image, i: i });
  };
  const imageAction = (action) => {
    let i = data.i;
    if (action === 'next') {
      setData({ image: images[i + 1], i: i + 1 });
    }
    if (action === 'prev') {
      setData({ image: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ image: '', i: 0 });
    }
  };
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'do7olmnmx',
        uploadPreset: 'kmjje9hl',
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);
  // console.log(img);
  return (
    <>
      {data.image && (
        <div className="w-full h-screen bg-black fixed flex justify-center top-0 z-50 items-center overflow-hidden">
          <button
            onClick={() => imageAction()}
            className="position: absolute top-3 right-3 bg-white px-2"
          >
            X
          </button>
          <button
            className="bg-white sticky justify-center left-0"
            onClick={() => imageAction('prev')}
          >
            {'<'}
          </button>

          <img
            src={data.image}
            className="w-auto max-w-full max-h-full px-5"
            alt=""
          />
          <button
            className="bg-white sticky justify-center right-0"
            onClick={() => imageAction('next')}
          >
            {'>'}
          </button>
        </div>
      )}
      <div className="p-5">
        <div className="p-5">
          Images :
          <button
            className="absolute border-solid border-2 border-sky-400 rounded-lg bg-sky-400 top-20 right-4"
            onClick={() => widgetRef.current.open()}
          >
            Upload Image
          </button>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="rounded-md"
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
export default Gallery;
