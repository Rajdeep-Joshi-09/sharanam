import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const TestimonialsPage = () => {
  const pageRef = useRef(null);
  const [filterCondition, setFilterCondition] = useState('all');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(5);

  const initialReviews = [
    {
      id: 1,
      name: 'Meera Patel',
      location: 'Vadodara',
      condition: 'Adult Acne & Skin Allergy',
      category: 'skin',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      review: 'I suffered from chronic skin acne for 3 years. Dr. Dhairya Mehta’s homeopathic medicines cleared my skin naturally in 4 months without any harsh side effects!',
      verified: true,
      date: 'Verified Patient • 2026',
    },
    {
      id: 2,
      name: 'Rajesh Shah',
      location: 'Vasna - Bhayli, Vadodara',
      condition: 'Sinusitis & Asthma',
      category: 'respiratory',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      review: 'Severe morning sneezing and sinus headaches kept bothering me every winter. Dr. Dhairya’s root-cause approach built my immunity so well!',
      verified: true,
      date: 'Verified Patient • 2026',
    },
    {
      id: 3,
      name: 'Ananya Desai',
      location: 'Vadodara',
      condition: 'PCOS & Hormonal Imbalance',
      category: 'women',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      review: 'Dr. Dhairya listened to my whole health history. His gentle remedies regulated my cycles and boosted my energy naturally. Highly recommend Sharnam Clinic!',
      verified: true,
      date: 'Verified Patient • 2026',
    },
    {
      id: 4,
      name: 'Sanjay Verma',
      location: 'Vadodara',
      condition: 'Acid Reflux & IBS',
      category: 'digestive',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      review: 'Chronic acidity and stomach distress made daily meals uncomfortable. Within weeks of starting treatment, my digestion felt light and back to normal.',
      verified: true,
      date: 'Verified Patient • 2026',
    },
    {
      id: 5,
      name: 'Kavita Joshi',
      location: 'Gotri, Vadodara',
      condition: 'Childhood Recurrent Cold & Immunity',
      category: 'pediatric',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      review: 'My 5-year-old son used to catch cold every 2 weeks. The sweet homeopathic pills prescribed by Dr. Dhairya worked like magic. He hasn\'t missed school since!',
      verified: true,
      date: 'Verified Patient • 2026',
    },
    {
      id: 6,
      name: 'Hitesh Amin',
      location: 'Bhayli, Vadodara',
      condition: 'Joint Stiffness & Arthritis',
      category: 'chronic',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      review: 'Morning knee stiffness made walking difficult. After 3 months of homeopathic treatment at Sharnam Clinic, I can walk comfortably without anti-inflammatory pills.',
      verified: true,
      date: 'Verified Patient • 2026',
    },
  ];

  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem('sharnam_patient_reviews');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialReviews;
  });

  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Vadodara',
    condition: 'Skin & Hair Care',
    category: 'skin',
    rating: 5,
    review: '',
  });

  useEffect(() => {
    try {
      localStorage.setItem('sharnam_patient_reviews', JSON.stringify(reviewsList));
    } catch (e) {
      console.error(e);
    }
  }, [reviewsList]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    pageRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) {
      toast.error('Please fill in your name and review experience');
      return;
    }

    const reviewObj = {
      id: Date.now(),
      name: newReview.name,
      location: newReview.location || 'Vadodara',
      condition: newReview.condition,
      category: newReview.category || 'skin',
      rating: Number(newReview.rating),
      photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(newReview.name)}`,
      review: newReview.review,
      verified: true,
      date: 'Recent Patient • Today',
    };

    setReviewsList([reviewObj, ...reviewsList]);
    toast.success('Thank you! Your testimonial has been posted successfully.');
    setShowReviewForm(false);
    setNewReview({
      name: '',
      location: 'Vadodara',
      condition: 'Skin & Hair Care',
      category: 'skin',
      rating: 5,
      review: '',
    });
  };

  const filteredReviews = filterCondition === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.category === filterCondition);

  return (
    <div ref={pageRef} className="bg-[#faf7f5] pb-20 text-[#1f2937]">
      {/* Header Banner */}
      <header className="bg-white py-14 border-b border-gray-200 px-6">
        <div className="max-w-4xl mx-auto text-center reveal active">
          <span className="text-[#cc3b38] font-bold font-['Inter'] text-[13px] tracking-widest uppercase mb-2 block">
            Patient Stories • Real Recovery Experiences
          </span>
          <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[48px] font-bold text-[#1f2937] mb-3">
            Patient Testimonials & Reviews
          </h1>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#4b5563] leading-relaxed">
            Read inspiring stories of healing and recovery shared by real patients treated at Sharnam Clinic by Dr. Dhairya Mehta.
          </p>

          <div className="pt-6 flex justify-center">
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-[#cc3b38] text-white px-7 py-3 rounded-xl font-['Inter'] text-[14px] font-semibold hover:bg-[#b52f2c] transition-all shadow-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">edit_square</span>
              Share Your Healing Experience
            </button>
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-3 reveal">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'skin', label: 'Skin & Hair' },
            { id: 'respiratory', label: 'Respiratory & Sinus' },
            { id: 'digestive', label: 'Acidity & Digestion' },
            { id: 'women', label: 'Women’s Health' },
            { id: 'pediatric', label: 'Pediatric' },
            { id: 'chronic', label: 'Joint Pain' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCondition(cat.id)}
              className={`px-5 py-2.5 rounded-full font-['Inter'] text-[14px] font-medium transition-all ${
                filterCondition === cat.id
                  ? 'bg-[#cc3b38] text-white shadow-md'
                  : 'bg-white text-[#4b5563] border border-gray-200 hover:border-[#cc3b38]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonial Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev, idx) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between reveal"
              style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1 text-[20px]">
                      star
                    </span>
                  ))}
                </div>

                <p className="font-['Inter'] text-[15px] text-[#1f2937] leading-relaxed italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
                />
                <div>
                  <h4 className="font-['Playfair_Display'] font-bold text-[#1f2937] text-[16px]">
                    {rev.name}
                  </h4>
                  <p className="font-['Inter'] text-[12px] text-[#cc3b38] font-semibold">
                    {rev.condition}
                  </p>
                  <p className="font-['Inter'] text-[11px] text-gray-400">
                    {rev.location} • {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Review Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl relative border border-gray-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowReviewForm(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#1f2937] mb-1">
              Write a Review for Sharnam Clinic
            </h3>
            <p className="font-['Inter'] text-[14px] text-[#4b5563] mb-6">
              Share your healing experience to help other patients.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4 font-['Inter']">
              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Sharma"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#cc3b38]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="Vadodara"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#cc3b38]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1">
                  Health Condition Treated *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Skin Acne, Sinus, Acidity"
                  value={newReview.condition}
                  onChange={(e) => setNewReview({ ...newReview, condition: e.target.value })}
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#cc3b38]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1">
                  Star Rating
                </label>
                <div className="flex items-center gap-1 text-amber-400 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="focus:outline-none"
                    >
                      <span className={`material-symbols-outlined text-[28px] ${star <= (hoverRating || newReview.rating) ? 'fill-1' : ''}`}>
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#1f2937] mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about how Dr. Dhairya Mehta's treatment helped you..."
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  className="w-full bg-[#faf7f5] border border-gray-200 rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#cc3b38]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-[14px] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#cc3b38] text-white px-6 py-2.5 rounded-xl text-[14px] font-semibold hover:bg-[#b52f2c]"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
