import Image from "next/image";
const Column = ({ title, items }) => (
  <div className="flex flex-col" dir="rtl">
    <h3 className="font-semibold mb-7 text-gray-300">{title}</h3>
    {items.map((item, index) => (
      <div key={index} className="hover-color relative cursor-pointer mb-4 text-xs w-fit ">
        {item}
      </div>
    ))}
  </div>
);



const ShowImage = ({ alt, itemLinks, widths, heights }) => (
  <div>
    {itemLinks.map((link, index) => (
      <Image
        key={index}
        className="icon"
        src={link}
        alt={alt}
        width={widths}
        height={heights}
      />
    ))}
  </div>
);
export { Column, ShowImage };
