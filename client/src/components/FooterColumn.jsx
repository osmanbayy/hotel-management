import React from "react";

export default function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold md:font-bold md:tracking-wide">{title}</h1>
      {items.map((item, idx) => (
        <p
          key={idx}
          className="text-gray-500 text-xs md:text-md md:font-semibold md:tracking-wide cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
