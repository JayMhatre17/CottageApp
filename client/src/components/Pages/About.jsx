import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>

      <p className="text-lg mb-4">
        Welcome to [Your Cottage Name], where we offer a tranquil escape nestled
        in the heart of nature. Our cottages have a rich history and are
        designed to provide a cozy retreat for our guests.
      </p>

      <p className="text-lg mb-4">
        Located in [Your Location], our cottages are surrounded by breathtaking
        landscapes, offering a perfect blend of serenity and natural beauty. We
        take pride in creating an atmosphere that allows guests to unwind and
        create lasting memories.
      </p>

      <p className="text-lg mb-4">
        At [Your Cottage Name], we believe in [Your Philosophy or Values]. Our
        commitment to [Sustainability/Quality/Personalized Service] ensures that
        every guest has a unique and enjoyable experience.
      </p>

      <p className="text-lg mb-4">
        Our cottages feature [Key Features and Amenities], providing a
        comfortable and memorable stay. Whether you're seeking a peaceful
        getaway or an adventure-filled retreat, our cottages are the perfect
        choice.
      </p>

      <p className="text-lg mb-4">
        We are proud to be an active part of the [Your Local Community]
        community. Our engagement includes [Community Involvement/Partnerships],
        contributing to the overall well-being of the region.
      </p>

      <p className="text-lg mb-4">
        But don't just take our word for it! Here's what some of our guests have
        said:
      </p>

      {/* Testimonials Section */}
      <div className="mb-8">
        <blockquote className="text-lg italic text-gray-600">
          "A truly magical experience! The cottages exceeded our expectations,
          and the surroundings were breathtaking. We can't wait to return!"
        </blockquote>
        <cite className="text-sm text-gray-500">- Happy Guest</cite>
      </div>

      <p className="text-lg mb-4">
        Meet the team behind [Your Cottage Name]. Our dedicated staff is
        passionate about providing exceptional hospitality and ensuring that
        every guest feels at home.
      </p>

      <p className="text-lg mb-4">
        Keep an eye out for our special offers and upcoming events. We are
        committed to making your stay with us extraordinary.
      </p>

      <p className="text-lg">
        Contact us today to book your stay at [Your Cottage Name]. We look
        forward to welcoming you to our little piece of paradise!
      </p>
    </div>
  );
};

export default About;
