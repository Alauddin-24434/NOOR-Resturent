// File: HealthAndWellnessMenu.js

import './HealthAndWellnessMenu.css'; // Import a CSS file for additional styling

const HealthAndWellnessMenu = () => {
    const foodItems = [
        {
            "name": "Superfood Salad",
            "description": "A nutrient-packed salad with kale, spinach, quinoa, cherry tomatoes, and a lemon vinaigrette.",
            "healthInfo": "Superfood, Fresh, Low-Calorie",
            "calories": 250,
            "protein": 12,
            "carbs": 30,
            "fiber": 8,
            "image": "https://i.ibb.co/XkGT2Nt/Superfoods-Salad-1-480x360.jpg" 
        },
        {
            "name": "Grilled Salmon",
            "description": "Wild-caught salmon seasoned and grilled to perfection, served with steamed broccoli and quinoa.",
            "healthInfo": "Grilled, Omega-3, Protein-Rich",
            "calories": 350,
            "protein": 25,
            "carbs": 15,
            "fiber": 5,
            "image": "https://i.ibb.co/q7bnMnz/Grilled-Salmon-Recipe-Square-500x375.jpg" 
        },
        {
            "name": "Avocado Toast",
            "description": "Whole-grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of chia seeds.",
            "healthInfo": "Superfood, Fresh, Fiber-Rich",
            "calories": 200,
            "protein": 5,
            "carbs": 25,
            "fiber": 7,
            "image": "https://i.ibb.co/tbT4GgP/avocado-toast-20-1200-500x375.jpg" 
        },


        {
            "name": "Quinoa Bowl with Veggies",
            "description": "Quinoa bowl with a mix of roasted vegetables, chickpeas, and a tahini dressing.",
            "healthInfo": "Superfood, Fresh, Plant-Based",
            "calories": 300,
            "protein": 10,
            "carbs": 40,
            "fiber": 9,
            "image": "https://i.ibb.co/bdJGHSb/download.jpg" 
        },
        {
            "name": "Berry Smoothie",
            "description": "A refreshing smoothie made with mixed berries, Greek yogurt, and a touch of honey.",
            "healthInfo": "Superfood, Antioxidant-Rich, Low-Sugar",
            "calories": 180,
            "protein": 8,
            "carbs": 30,
            "fiber": 6,
            "image": "https://i.ibb.co/CQfZKFZ/Simply-Recipes-Smoothie-Recipes-for-Mornings-LEAD-e857d4d7e5af4ddaa79ea18e8d6d6c58.jpg"
        }
        ,
        {
            "name": "Grilled Chicken Salad",
            "description": "Grilled chicken breast on a bed of mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette.",
            "healthInfo": "Grilled, Protein-Rich, Low-Calorie",
            "calories": 280,
            "protein": 20,
            "carbs": 15,
            "fiber": 4,
            "image": "https://i.ibb.co/Pg8N1FY/mediterranean-grilled-chicken-salad-1-5-500x375.jpg" 
        },
        {
            "name": "Vegan Buddha Bowl",
            "description": "A nourishing bowl with quinoa, roasted sweet potatoes, black beans, avocado, and tahini dressing.",
            "healthInfo": "Superfood, Plant-Based, Fiber-Rich",
            "calories": 320,
            "protein": 12,
            "carbs": 45,
            "fiber": 10,
            "image": "https://i.ibb.co/n1LRXpX/images-6.jpg" 
        },
        {
            "name": "Turmeric Chickpea Stew",
            "description": "A hearty stew with chickpeas, spinach, tomatoes, and turmeric-spiced broth.",
            "healthInfo": "Anti-Inflammatory, Plant-Based, Protein-Rich",
            "calories": 260,
            "protein": 15,
            "carbs": 35,
            "fiber": 7,
            "image": "https://i.ibb.co/Z88rK9c/HK6-ZODORH5-OV7-UE432-LLGUMBBA.jpg"
        },
        {
            "name": "Mango-Avocado Salsa Wrap",
            "description": "A whole-grain wrap filled with mango-avocado salsa, black beans, and grilled chicken.",
            "healthInfo": "Fresh, Protein-Rich, Low-Calorie",
            "calories": 320,
            "protein": 18,
            "carbs": 40,
            "fiber": 8,
            "image": "https://i.ibb.co/6X2r87X/Chicken-Wholemeal-Wraps-with-Avocado-Mango-Salsa.jpg" 
        },
        {
            "name": "Green Tea Infusion",
            "description": "A refreshing green tea infusion with cucumber, mint, and a hint of lemon.",
            "healthInfo": "Antioxidant-Rich, Low-Calorie, Hydrating",
            "calories": 10,
            "protein": 0,
            "carbs": 3,
            "fiber": 1,
            "image": "https://i.ibb.co/Jtq3y71/glass-mugs-of-green-tea.jpg" 
        },
        {
            "name": "Sweet Potato Fries",
            "description": "Oven-baked sweet potato fries seasoned with a touch of rosemary and served with a yogurt-based dip.",
            "healthInfo": "Baked, Fiber-Rich, Vitamin A",
            "calories": 180,
            "protein": 3,
            "carbs": 30,
            "fiber": 5,
            "image": "https://i.ibb.co/dLxs8tz/Sweet-Potato-Oven-Fries-FT-RECIPE0323-61dd2fefa241483f918d2b4e849e94f9.jpg" 
        },
        {
            "name": "Dark Chocolate Berry Parfait",
            "description": "Layers of dark chocolate granola, mixed berries, and Greek yogurt for a guilt-free dessert.",
            "healthInfo": "Antioxidant-Rich, Low-Sugar, Probiotic",
            "calories": 220,
            "protein": 10,
            "carbs": 25,
            "fiber": 6,
            "image": "https://i.ibb.co/ZSPNGwT/breakfast-parfaits-HORIZONTAL.jpg" 
        }
    ];





    return (

        <section>
            <h1 className='text-5xl font-semi-bold  mb-4   text-orange-600 p-4 '> Health & Wellness Menu Foods</h1>
            <div className="menu-container">
            
            {foodItems?.map((item, index) => (
                <div className="food-card" key={index}>
                    <img className="food-image" src={item.image} alt={item.name} />
                    <div className="food-details">
                        <h2>{item.name}</h2>
                        {/* <p className="description">{item.description}</p> */}
                        <div className="health-info">
                            <p><strong>Health Information:</strong> {item.healthInfo}</p>
                            <p><strong>Calories:</strong> {item.calories}</p>
                            <p><strong>Protein:</strong> {item.protein}g</p>
                            <p><strong>Carbs:</strong> {item.carbs}g</p>
                            <p><strong>Fiber:</strong> {item.fiber}g</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </section>
     
    );
};

export default HealthAndWellnessMenu;
