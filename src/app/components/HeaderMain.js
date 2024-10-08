import React from "react";
import { Column, ShowImage } from "./Functions";
import { ImageLink, LinkTexts } from "./Datas";
import components from "../components.module.css";

function HeaderMain() {
  return (
    <div
      className="flex text-right relative mr-11 items-center flex-col  p-5"
      style={{ left: "160px" }}
    >
      <div className="grid grid-cols-5 gap-4 w-full max-w-6xl mb-10">
        {/* The first column on left side */}
        <div
          className="flex flex-col text-left relative"
          style={{ right: "170px" }}
        >
          <div className="mb-14 text-right">
            <ShowImage
              alt={"Banimode Logo"}
              itemLinks={ImageLink.BanimodeLogo}
              widths={360}
              heights={60}
            />
          </div>
          <div
            className="bg-gradient-to-l from-green-500 to-green-700 p-4 rounded-lg shadow-md mb-4 cursor-pointer relative flex justify-center"
            style={{ width: "240px", height: "52px" }}
          >
            <ShowImage
              alt={"Bazar Logo"}
              itemLinks={ImageLink.BazarLogo}
              widths={50}
              heights={60}
            />
            <div className="text-white w-fit ml-2">دریافت اپلیکیشن از</div>
          </div>

          <div
            className="bg-gray-50 border border-black p-4 rounded-lg shadow-md mb-4 cursor-pointer relative flex justify-center"
            style={{ width: "240px", height: "52px" }}
          >
            <ShowImage
              alt={"sibapp Logo"}
              itemLinks={ImageLink.sibappLogo}
              widths={56}
              heights={60}
            />
            <div className="text-gray-950 ml-2 w-fit">دریافت اپلیکیشن از</div>
          </div>

          <div
            className="bg-white border border-teal-400 p-4 rounded-lg shadow-md mb-4 cursor-pointer relative flex justify-center"
            style={{ width: "240px", height: "52px" }}
          >
            <div style={{ color: "#00bf6f" }} className="w-fit">
              دانلود اپلیکیشن
            </div>
            <ShowImage
              alt={"DWN Logo"}
              itemLinks={ImageLink.DWNLogo}
              heights={24}
              widths={24}
            />
          </div>

          <div className="flex justify-between mt-4">
            <ShowImage
              alt="twitter"
              itemLinks={ImageLink.twitter}
              widths={20}
              heights={20}
            />
            <ShowImage
              alt="aparat"
              itemLinks={ImageLink.aparat}
              widths={20}
              heights={20}
            />
            <ShowImage
              alt="telegram"
              itemLinks={ImageLink.telegram}
              widths={20}
              heights={20}
            />
            <ShowImage
              alt="instagram"
              itemLinks={ImageLink.instagram}
              widths={20}
              heights={20}
            />
          </div>
        </div>

        {/* The secend column on left side */}
        <div className="flex flex-col text-right ml-2" dir="rtl">
          <h3 className="font-semibold mb-3 text-gray-300">
            منتظر شنیدن صدای گرمتیم
            <div className="text-gray-300 text-[10px] mt-3 mb-3">
              7 روز هفته - 24 ساعته
            </div>
          </h3>

          <div className="mb-7 text-sm">
            <span className="text-gray-400">تلفن:</span>
            <a className={components.hoverColorText}>021-49215</a>
          </div>
          <div className="mb-7 text-sm">
            <span className="text-gray-400">پیامک:</span>
            <a className={components.hoverColorText}>10001654</a>
          </div>

          <div className=" mb-7 text-sm">
            <span className="text-gray-400 mr-2">ایمیل:</span>
            <a
              href="mailto:customer@banimode.com"
              className={components.hoverColorText}
            >
              customer@banimode.com
            </a>
          </div>

          <div>
            <ShowImage
              alt={"Bani Mag"}
              itemLinks={ImageLink.BaniMag}
              heights={150}
              widths={150}
            />
          </div>
        </div>

        {/* The Third column on left side  */}
        <Column
          title={"اطلاعات بانی مد"}
          items={LinkTexts.BanimodeInformation}
        />

        {/* The secend column on right side */}
        <Column title={"خدمات مشتریان"} items={LinkTexts.CustomerService} />

        {/* The First column on right side  */}
        <Column
          title={"خرید از بانی مد"}
          items={LinkTexts.BuyingFromBanimode}
        />
      </div>
    </div>
  );
}
export default HeaderMain;
