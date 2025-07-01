import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopFood = () => {
    const [topFoods, setTopFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTopMeals = async () => {
            try {
                const fetchedMeals = [];

                // Fetch 6 random meals
                for (let i = 0; i < 6; i++) {
                    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                    const data = await res.json();
                    if (data.meals && data.meals.length > 0) {
                        fetchedMeals.push(data.meals[0]);
                    }
                }

                setTopFoods(fetchedMeals);
            } catch (error) {
                console.error('Error fetching random meals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopMeals();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading top meals...</p>;
    }

    return (
        <div className="w-11/12 mx-auto mt-5 py-16">
            <h2 className="text-4xl font-extrabold text-center text-black mb-10">Top Meals Today</h2>
            <p className="text-center text-gray-600 text-lg mb-10">
                Discover a variety of meals from around the world that our users love!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topFoods.map((food) => (
                    <div
                        key={food.idMeal}
                        className="flex flex-col border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <img
                            src={food.strMealThumb}
                            alt={food.strMeal}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-bold mb-1">
                            {food.strMeal.length > 30 ? food.strMeal.slice(0, 30) + '...' : food.strMeal}
                        </h2>
                        <p className="text-gray-600 mt-1 text-sm">
                            Category: <span className="font-medium">{food.strCategory}</span>
                        </p>
                        <p className="text-gray-600 text-sm">
                            Origin: <span className="font-medium">{food.strArea}</span>
                        </p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                            {food.strInstructions?.slice(0, 80)}...
                        </p>
                        <button
                            className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-500"
                            onClick={() => navigate(`/singleFood/${food.idMeal}`)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button
                    className="bg-amber-700 text-white px-5 py-2 rounded-md hover:bg-amber-500 transition"
                    onClick={() => navigate('/allFoods')}
                >
                    See All Meals
                </button>
            </div>
        </div>
    );
};

export default TopFood;
