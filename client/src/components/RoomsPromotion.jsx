import React from "react";
import { useTranslation } from "react-i18next";

export const RoomsPromotion = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      id: 1,
      title: t("rooms.standard.title"),
      description: t("rooms.standard.description"),
      price: t("rooms.standard.price"),
      image: "https://leventotelistanbul.com/upload/3/tom09538.jpg",
    },
    {
      id: 2,
      title: t("rooms.deluxe.title"),
      description: t("rooms.deluxe.description"),
      price: t("rooms.deluxe.price"),
      image: "https://cabirdeluxe.com/Content/Visuals/roomList01.png",
    },
    {
      id: 3,
      title: t("rooms.family.title"),
      description: t("rooms.family.description"),
      price: t("rooms.family.price"),
      image:
        "https://www.alibey.com/content/upload/room-images/alibey-resort-sorgun-room-family-suit-room-1.jpg",
    },
  ];

  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-3xl md:text-4xl mb-10 text-center capitalize">
          {t("rooms.sectionTitle")}
          <span className="italic text-red-500 font-light">
            {t("rooms.comfortable")}
          </span>
          {t("rooms.roomsText")}
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="rounded-xl shadow-md overflow-hidden hover:scale-95 transition duration-300 cursor-pointer"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full hover:scale-105 cursor-pointer transition duration-300 overflow-hidden h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-3 tracking-wide text-sm">
                  {room.description}
                </p>
                <span className="text-zinc-600 font-bold">
                  {room.price}{" "}
                  <span className="text-zinc-800 font-normal">
                    {t("rooms.startingFrom")}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
