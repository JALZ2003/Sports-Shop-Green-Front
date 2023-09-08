import React, { useState } from "react";
import Tennis from "/Images/Tennis.png";

export default function ProductDetails() {
  
  const product = {
    id: 1,
    name: "Hoka Sneakers",
    description:
      "Recognized by Runner’s World as one of 2023’s best training shoes, the newest member of the Ultraboost family emerged from over 100 models tested for their annual Shoe Awards. Experience its cushioning, stability and style today.",
    price: 99.99,
    imageUrl: { Tennis },
    sizes: ["36", "37", "38", "39", "40"],
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleAddReview = () => {
    if (review.trim() !== "") {
      const newReview = {
        text: review,
        date: new Date().toLocaleDateString(),
      };

      setReviews([...reviews, newReview]);
      setReview("");
    }
  };

 
  const similarProducts = [
    {
      id: 2,
      name: "Running Snikers",
      price: 89.99,
      imageUrl: "ruta-de-la-imagen-del-producto-2.jpg",
    },
    {
      id: 3,
      name: "Running Snikers",
      price: 79.99,
      imageUrl: "ruta-de-la-imagen-del-producto-3.jpg",
    },
    {
      id: 4,
      name: "Running Snikers",
      price: 79.99,
      imageUrl: "ruta-de-la-imagen-del-producto-3.jpg",
    },
    {
      id: 4,
      name: "Running Snikers",
      price: 79.99,
      imageUrl: "ruta-de-la-imagen-del-producto-3.jpg",
    },
    
  ];

  return (
    <div className="container mx-auto my-16 p-6">
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={Tennis} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 mt-4 pl-10 md:mt-0 md:ml-4">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <p className="text-2xl text-red-600 mb-4">
            ${product.price.toFixed(2)}
          </p>

          <div className="mb-4 mt-6">
            <label htmlFor="sizes" className="text-lg font-semibold mb-2">
              Sizes:
            </label>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`${
                    selectedSize === size
                      ? "bg-blue hover:bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                  } py-2 px-4 rounded-lg cursor-pointer`}
                >
                  Size {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-16 mt-6">
            <label htmlFor="quantity" className="text-lg font-semibold mb-2">
              Quantity:
            </label>
            <div className="flex space-x-4">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-lg cursor-pointer"
              >
                -
              </button>
              <span className="py-2 px-4">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-orange hover:bg-amber-600 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {similarProducts.map((similarProduct) => (
            <div
              key={similarProduct.id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={Tennis}
                alt={similarProduct.name}
                className="w-full rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">
                {similarProduct.name}
              </h3>
              <p className="text-gray-600">
                ${similarProduct.price.toFixed(2)}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-2">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 mt-14">
        <div>
          <label htmlFor="review" className="text-lg font-semibold mb-4">
            Review
          </label>
        </div>

        <div className="">
          <textarea
            id="review"
            className="bg-gray-100 p-2 rounded-lg w-full"
            placeholder="Write your review here..."
            rows="4"
            value={review}
            onChange={handleReviewChange}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleAddReview}
            className="bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg mt-2"
          >
            Submit Review
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <ul>
          {reviews.map((r, index) => (
            <li key={index} className="mb-4">
              <p className="text-gray-600">{r.date}</p>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
