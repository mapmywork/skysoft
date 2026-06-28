import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Star, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "Business Traveler",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Excellent service! Rented a Hyundai Creta for a business trip. The car was spotless, and the booking process was completely hassle-free. Will definitely use Skysoft again."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Weekend Explorer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Best self-drive rental in Patna. The Royal Enfield was in pristine condition. The customer support team was very polite and helpful throughout the rental period."
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Family Vacation",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Took a Toyota Innova for a family road trip. The vehicle was completely sanitized and drove perfectly. Transparent pricing with no hidden charges whatsoever."
    },
    {
      id: 4,
      name: "Neha Singh",
      role: "Daily Commuter",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I rent a scooter from them on a monthly basis. It's incredibly cost-effective and much better than relying on public transport. Highly recommend their services."
    }
  ];

  return (
    <section className="py-24 bg-blue-50 overflow-hidden relative" id="reviews">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-6">
            Loved By <span className="text-blue-600">Travelers</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here is what our customers have to say about their journey with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full max-w-md md:max-w-xl mx-auto"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
                <Quote size={40} className="text-blue-100 mb-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-outfit">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
