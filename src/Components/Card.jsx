import React from "react";

function Card() {
    const data = [
        {
            image:
                "https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Amazon Basics",
            description: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            image:
                "https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww",
            name: "daily object",
            description: "lorem psumnbwig wgiywgri",
        },
        {
            image:
                "https://images.unsplash.com/photo-1591270551371-3401a1a9382f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9ufGVufDB8fDB8fHww",
            name: "New Cart",
            description: "Lorem bihicgw bihgdvvgw8g",
        },
    ];
    return (
        <div className=" flex justify-center items-center gap-10 w-full h-screen bg-zinc-400">
            {data.map((elem, index) => {
                return (
                    <div key={index} className="  w-52  rounded-md overflow-hidden  bg-zinc-100">
                        <div className="w-full  h-32">
                            <img
                                className="w-full h-full object-cover"
                                src={elem.image}
                                alt=""
                            />
                        </div>
                        <div className=" w-full px-3 py-4 bg-zinc-200 ">
                            <h2 className="font-sans font-bold ">{elem.name}</h2>
                            <p className="mt-3 font-sans">
                                {elem.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
