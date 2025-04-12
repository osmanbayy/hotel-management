import React from "react";

export default function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold tracking-wide">{title}</h1>
      {items.map((item, idx) => (
        <p
          key={idx}
          className="text-gray-500 text-md font-semibold tracking-wide cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
