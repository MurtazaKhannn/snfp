import React, { useState, useEffect } from 'react';

const Description = (props) => {
    const [selected, setSelected] = useState(null);
    const [rev, setRev] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, reviewText: '' });

    const product = props.product;

    const handleSingleSelectiondesc = (id) => {
        setSelected(id === selected? null : id);
      };
    
      const handleSingleSelectionRev = async (id) => {
        if (id === rev) {
          setRev(null);
        } else {
          setRev(id);
          await fetchReviews(id);
        }
      };
    
      const fetchReviews = async (productId) => {
        try {
          const response = await fetch(`https://snbpnestbackend.vercel.app/reviews/${productId}`);
          const data = await response.json();
          if (data.success) {
            setReviews(data.reviews);
          } else {
            console.error("Failed to fetch reviews");
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
    
      const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://snbpnestbackend.vercel.app/product/${product._id}/addreview`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                },
                body: JSON.stringify({
                    rating: newReview.rating,
                    reviewText: newReview.reviewText
                })
            });
    
            const data = await response.json();
            console.log(data)
            if (data.success) {
                setReviews([...reviews, data.review]);
                setNewReview({ rating: 0, reviewText: '' });
            } else {
                console.error("Failed to add review:", data.error);
            }
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };
    

    return (
        <div className='description font-bebas flex justify-between ml-20 gap-5 mt-5'>
            <div className='description-main w-1/2'>
                <button
                    className='description-tag mb-5 border-2 bg-black text-white border-[#403B58] px-2 py-1 rounded-md'
                    onClick={() => { handleSingleSelectiondesc(product.id) }}
                >
                    Description
                </button>
                <div className='desc-click'>
                    {selected === product.id ? <div className='desc-click-text'>{product.description}</div> : null}
                </div>
            </div>
            <div className="reviews w-1/2">
                <button
                    className='description-tag bg-black  text-white border-2 flex flex-row-reverse border-[#403B58] px-2 py-1 mr-20 rounded-md'
                    onClick={() => { handleSingleSelectionRev(product._id) }}
                >
                    Reviews
                </button>
                <div className='desc-click mr-20 mt-5'>
                    {rev === product._id ? (
                        <div className='desc-click-text'>
                            {reviews.length > 0 ? (
                                reviews.map(review => {
                                    return <div key={review._id} className='review-item mb-3 p-2 border border-gray-300 rounded'>
                                        <p className='font-bold text-xl'>{review.userId.name}</p>
                                        <p>{review.reviewText}</p>
                                        <p>Rating: {review.rating}</p>
                                        <p className='ml-[27.5rem] text-zinc-500'>Date : {review.date}</p>
                                    </div>
                                })
                            ) : (
                                <p>No reviews yet.</p>
                            )}
                            <form onSubmit={handleReviewSubmit} className='mt-4'>
                                <textarea
                                    value={newReview.reviewText}
                                    onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                                    required
                                    className='w-full p-2 border rounded mb-2'
                                    placeholder='Write your review here...'
                                />
                                <input
                                    type="number"
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                                    min="1"
                                    max="5"
                                    required
                                    className='w-full p-2 border rounded mb-2'
                                    placeholder='Rating (1-5)'
                                />
                                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Submit Review</button>
                            </form>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Description;
