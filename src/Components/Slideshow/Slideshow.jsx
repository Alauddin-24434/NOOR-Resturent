import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
    const data = [
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        {
            "image": "https://i.ibb.co/ZTBP5dm/fatiha-ayat.png",
            "name": "Noor",
        },
        // Add more data items
    ];

    console.log("data", data);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default setting for lg screens
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
                    slidesToShow: 3, // Show 3 cards on larger screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {
                        data?.map((d) => (
                            <div className="bg-white h-[450px] w-72 text-black rounded-xl" key={d.name}>
                                <div className="h-56 rounded-t-xl bg-indigo-500 flex items-center justify-center">
                                    <img src={d.image} alt="" className="w-44 h-44 rounded-full" />
                                </div>
                                <div className="flex flex-col items-center justify-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <p>{d.name}</p>
                                    <p>{d.name}</p>
                                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">See More</button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Slideshow;
