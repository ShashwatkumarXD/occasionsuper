import React from "react";

const reviews = [
  {
    stars: 5,
    text: `"OccasionSuper ne meri shaadi ki planning itni easy bana di! Sab kuch perfect tha, vendors bhi top-notch. Highly recommended!"`,
    name: "Priya Sharma",
    role: "Wedding Planning",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    stars: 4,
    text: `"Corporate event ke liye catering aur decor book kiya tha. Service bahut acchi thi aur team ne sab manage kar liya smoothly. Great experience!"`,
    name: "Rahul Kapoor",
    role: "Corporate Event",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    stars: 5,
    text: `"Mere bete ki birthday party ke liye DJ aur photographer OccasionSuper se mile. Both were amazing! Kids had a blast. Thank you!"`,
    name: "Anjali Singh",
    role: "Birthday Party",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const CustomerStories = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-[#ecebeb] text-[#E69B83] px-4 py-2 rounded-full text-lg font-medium">
          ❤️ Customer Stories
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-xl mt-1">
          Real experiences from real customers who trusted OccasionSuper
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.784-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="italic text-gray-600 mb-6">{review.text}</p>

            {/* Reviewer */}
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-gray-400 text-lg">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerStories;
