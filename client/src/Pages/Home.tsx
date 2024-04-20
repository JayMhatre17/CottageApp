import React from 'react';
import { Carousel } from 'flowbite-react';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div className="bg-grey-200 font-bold">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src="../images/home/carousel/carouselImage1.jpg" alt="Banner" />
          <img src="../images/home/carousel/carouselImage2.jpg" alt="Banner" />
          <img src="../images/home/carousel/carouselImage3.jpg" alt="Banner" />
        </Carousel>
      </div>
      <div className="flex flex-row w-full h-screen mb-10px">
        <div className="w-1/2 h-screen p-10 flex justify-center ">
          <img
            src="../images/home/hero.jpg"
            className="rounded-lg shadow-2xl h-auto"
            alt=".."
          ></img>
        </div>
        <div className="md:w-3/5 pr-4 pl-4 lg:p-6">
          <div className="m-11 h-96 pt-10">
            <p className="text-xl font-bold text-center">
              Welcome to JayPrabha <br></br>Holiday Home
            </p>
            <div className="text-justify mt-5 pt-5 h-32 w-70">
              <p>Enjoy delicious food, cozy rooms, and modern amenities.</p>{' '}
              <p>
                Relax and unwind in our serene surroundings, with activities
                like Beach sports,seeing forts like Kulaba fort which is near to
                our location.
              </p>
              <p>
                {' '}
                Let us make your stay unforgettable with warm hospitality and
                beautiful views of Kihim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-lg font-bold justify-center">Menu Items</div>
        <div className="flex flex-wrap">
          <Menu
            src="https://media-cdn.tripadvisor.com/media/photo-p/15/81/c5/aa/mutton-super-special.jpg"
            name="Chicken Thali"
            price="350"
            features={[
              'Chicken Gravy',
              'Chicken Sukha',
              'Chapati/Bhakri',
              'Rice',
              'Sol kadi',
            ]}
          />
          <Menu
            src="https://content3.jdmagicbox.com/comp/pune/e7/020pxx20.xx20.190906210112.b1e7/catalogue/the-fish-thali-fergusson-college-road-pune-inexpensive-restaurants-below-rs-500--wlojum25r4.jpg?clr="
            name="Fish Thali"
            price="400"
            features={[
              'Surmai Fry ',
              'Prawns Curry',
              'Chapati/Bhakri',
              'Rice',
              'Sol kadi',
            ]}
          />
          <Menu
            src="https://lagroce-app-storage.s3.ap-south-1.amazonaws.com/568/item-321935-8deDvkhHVQ.jpg"
            name="Mutton Thali"
            price="450"
            features={[
              'Mutton Gravy',
              'Mutton Sukha',
              'Chapati/Bhakri',
              'Rice',
              'Sol kadi',
            ]}
          />
          <Menu
            src="https://cdn.dotpe.in/longtail/item_thumbnails/8033331/yghSFG2s.webp"
            name="Egg Thali"
            price="300"
            features={['Egg Curry', 'Omlete', 'Chapati/Bhakri', 'Rice']}
          />
          <Menu
            src="https://img.cdnx.in/276483/1671114555118_SKU-0004_0.png?width=600"
            name="Veg Thali"
            price="200"
            features={[
              '2 Bhaji',
              'Dal Curry',
              'Chapati/Bhakri',
              'Rice',
              'Sol kadi',
              'Sweet',
              'Papad',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
