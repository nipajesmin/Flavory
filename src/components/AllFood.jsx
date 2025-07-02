import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AllFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');
    const navigate = useNavigate();

    // Fetch meals from MealDB API
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, []);

    // Filter by search
    const filteredFoods = foods.filter(food =>
        food.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort alphabetically (MealDB does not have price info)
    const sortedFoods = filteredFoods.sort((a, b) => {
        const nameA = a.strMeal.toLowerCase();
        const nameB = b.strMeal.toLowerCase();
        return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto mb-4">
                {/* Header */}
                <div className="bg-gray-100 text-amber-700 p-8 md:p-12 rounded-lg shadow-lg text-center my-5">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">All Meals</h1>
                    <p className="text-lg md:text-xl leading-relaxed">Explore delicious meals from around the world!</p>
                </div>

                {/* Search + Sort */}
                <div className="my-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search meals by name..."
                        className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select
                        className="border border-gray-300 rounded-lg p-2 bg-white text-gray-700 focus:outline-none"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>

                {/* Meals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedFoods.map(food => (
                        <div key={food.idMeal} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                            <img
                                src={food.strMealThumb}
                                alt={food.strMeal}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">{food.strMeal}</h2>
                            <p className="text-gray-600 mt-2 line-clamp-2">
                                {food.strInstructions.slice(0, 100)}...
                            </p>
                            <p className="text-sm text-gray-500 mt-1">Category: {food.strCategory}</p>
                            <button
                                className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-500"
                                onClick={() => navigate(`/singleFood/${food.idMeal}`)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AllFood;
