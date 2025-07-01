import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SingleFood = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        // Check if this meal is already bookmarked
        const stored = JSON.parse(localStorage.getItem('bookmarkedMeals')) || [];
        setIsBookmarked(stored.includes(id));
    }, [id]);

    const toggleBookmark = () => {
        const stored = JSON.parse(localStorage.getItem('bookmarkedMeals')) || [];

        if (stored.includes(id)) {
            // Remove from bookmarks
            const updated = stored.filter(mealId => mealId !== id);
            localStorage.setItem('bookmarkedMeals', JSON.stringify(updated));
            setIsBookmarked(false);
        } else {
            // Add to bookmarks
            stored.push(id);
            localStorage.setItem('bookmarkedMeals', JSON.stringify(stored));
            setIsBookmarked(true);
        }
    };


    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) throw new Error('Meal not found');
                const data = await response.json();
                if (!data.meals || data.meals.length === 0) {
                    throw new Error('Meal data not available');
                }
                setMeal(data.meals[0]);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchMeal();
    }, [id]);

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!meal) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div>
            <Navbar>
            </Navbar>
            <div className="w-11/12 mx-auto mt-10">
            <h2 className="text-center text-4xl font-bold my-6 text-black">
                {meal.strMeal}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex justify-center">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                        style={{ maxHeight: '400px' }}
                    />
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Category:</strong> {meal.strCategory}
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-2">
                        <strong>Origin:</strong> {meal.strArea}
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                        <strong>Tags:</strong> {meal.strTags || 'N/A'}
                    </p>
                    <p className="text-lg text-gray-600">
                        <strong>Instructions:</strong> {meal.strInstructions}
                    </p>

                    {/* Optional: You can add Ingredients later if needed */}

                    <button
                        className="mt-6 bg-amber-700 text-white m-5 py-2 px-4 rounded hover:bg-amber-500 transition"
                        onClick={() => navigate('/allFoods')}
                    >
                        Explore More Meals
                    </button>
                    <button
                    onClick={toggleBookmark}
                    className={`mt-4 py-2 px-4 rounded transition ${isBookmarked ? 'bg-yellow-500 text-black' : 'bg-gray-300 text-gray-700 m-5 hover:bg-amber-500'
                        }`}
                >
                    {isBookmarked ? 'Bookmarked ✓' : 'Add to Bookmarks'}
                </button>
                </div>
            </div>



            <div className="mt-10 flex justify-center">
                
                <Link
                    to="/allFoods"
                    className="bg-amber-700 text-gray-700 px-4 py-2 rounded-md hover:bg-amber-500 transition mb-6"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default SingleFood;
