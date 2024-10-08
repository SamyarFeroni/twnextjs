import Image from "next/image";
import "../globals.css"
import components from "../components.module.css"
const Column = ({ title, items }) => (
  <div className="flex flex-col" dir="rtl">
    <h3 className="font-semibold mb-7 text-gray-300">{title}</h3>
    {items.map((item, index) => (
      <div key={index} className={components.HoverColor}>
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
        className= {components.icon}
        src={link}
        alt={alt}
        width={widths}
        height={heights}
      />
    ))}
  </div>
);
export { Column, ShowImage };
