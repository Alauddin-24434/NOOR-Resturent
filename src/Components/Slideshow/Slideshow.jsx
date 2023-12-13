import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.css'

const Slideshow = () => {
    const data = [
        {
            "image": "https://i.ibb.co/txCsq90/chef-with-his-arms-crossed-white-background.jpg",
            "name": "Faysal Ahmed",
            "id": 207856
        },
        {
            "image": "https://i.ibb.co/XpDrNbt/938508-OC3-QH30.jpg",
            "name": "Abdur Rahman",
            "id": 209857
        },
        {
            "image": "https://i.ibb.co/rK9TtDs/chef-making-ok-sign-white-background.jpg",
            "name": "Faruq Hossein",
            "id": 206790
        },
        {
            "image": "https://i.ibb.co/XpDrNbt/938508-OC3-QH30.jpg",
            "name": "Al Numan",
            "id": 201175
        },
        {
            "image": "https://i.ibb.co/txCsq90/chef-with-his-arms-crossed-white-background.jpg",
            "name": "Rasel Ahmed",
            "id": 201178
        },
        {
            "image": "https://i.ibb.co/XpDrNbt/938508-OC3-QH30.jpg",
            "name": "Naimul Islam",
            "id": 201189
        },
        {
            "image": "https://i.ibb.co/txCsq90/chef-with-his-arms-crossed-white-background.jpg",
            "name": "Farabi",
            "id": 201190
        },
        // Add more data items
    ];

    // console.log("data", data);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default setting for lg screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 320, // Apply these settings for screens 1024px wide and larger (lg)
                settings: {
                    slidesToShow: 1, // Show 3 cards on larger screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Apply these settings for screens wider than 1024px (lg)
                settings: {
                    slidesToShow: 4, // Show 3 cards on larger screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="">
            <h1 className="text-5xl font-semi-bold mb-8  text-orange-600">
                About
                Our Chefs </h1>
            <div className="p-8">

                <div className="mt-2">
                    <Slider {...settings}>
                        {
                            data?.map((d) => (
                                <div className="bg-white border h-[400px] w-72 text-black rounded-xl" key={d.id}>
                                    <div className="h-1/2 rounded-t-xl bg-indigo-500 flex items-center justify-center">
                                        <img src={d.image} alt="" className="w-40 h-40 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                                        <p className="text-xl font-semibold">{d.name}</p>
                                        <p>ID :{d.id}</p>

                                        <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">See More</button>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
