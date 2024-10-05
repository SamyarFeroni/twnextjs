import React from "react";
import { BiLogoTwitter, BiLogoTelegram, BiLogoInstagram } from "react-icons/bi";

function HeaderMain() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="grid grid-cols-5 gap-4 w-full max-w-6xl mb-10">
        <div className="flex flex-col text-left">
          <h3 className="font-semibold mb-4 text-gray-950 text-2xl cursor-pointer">
            Banimode
          </h3>

          <div className="bg-gray-50 border border-green-500 p-4 rounded-lg shadow-md mb-4 cursor-pointer">
            <div>دریافت اپلیکیشن از بازار</div>
          </div>
          <div className="bg-gray-50 border border-gray-950 p-4 rounded-lg shadow-md mb-4 cursor-pointer">
            <div>دریافت اپلیکیشن از سیب آپ</div>
          </div>
          <div className="bg-gray-50 border border-green-500 p-4 rounded-lg shadow-md cursor-pointer">
            <div>دانلود اپلیکیشن</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="cursor-pointer">
              <BiLogoTwitter />
            </div>
            <div className="cursor-pointer">
              <BiLogoTelegram />
            </div>
            <div className="cursor-pointer">
              <BiLogoInstagram />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-right">
          <h3 className="font-semibold mb-4  text-gray-300">
            منتظر شنیدن صدای گرمتیم
          </h3>
          <div>تلفن: 021-49215</div>
          <div>پیامک: 10001654</div>
          <div>
            <a href="mailto:customer@banimode.com" className="text-green-500">
              customer@banimode.com
            </a>
            :ایمیل
          </div>
        </div>

        <div className="flex flex-col text-right">
          <h3 className="font-semibold mb-4  text-gray-300">اطلاعات بانی مد</h3>
          <div className="navbar-link relative cursor-pointer">درباره ما</div>
          <div className="navbar-link relative cursor-pointer">
            قوانین و مقررات
          </div>
          <div className="navbar-link relative cursor-pointer">تماس با ما</div>
          <div className="navbar-link relative cursor-pointer">
            فرصت های شغلی
          </div>
          <div className="navbar-link relative cursor-pointer">
            همکاری تجاری
          </div>
        </div>

        <div className="flex flex-col text-right">
          <h3 className="font-semibold mb-4  text-gray-300">خدمات مشتریان</h3>
          <div className="navbar-link relative cursor-pointer">
            پرسش های متداول
          </div>
          <div className="navbar-link relative cursor-pointer">
            شرایط بازگشت
          </div>
          <div className="navbar-link relative cursor-pointer">
            راهنمای خرید
          </div>
          <div className="navbar-link relative cursor-pointer">B2B فروش</div>
        </div>

        <div className="flex flex-col text-right">
          <h3 className="font-semibold mb-4 text-gray-300">خرید از بانی مد</h3>
          <div className="navbar-link relative cursor-pointer">لباس مردانه</div>
          <div className="navbar-link relative cursor-pointer">
            خرید لباس زنانه برند
          </div>
          <div className="navbar-link relative cursor-pointer">
            خرید کیف و کفش برند
          </div>
          <div className="navbar-link relative cursor-pointer">
            خرید محصولات آرایشی اصلی
          </div>
          <div className="navbar-link relative cursor-pointer">
            خرید طلا و ساعت اورجینال
          </div>
          <div className="navbar-link relative cursor-pointer">
            خرید لوازم خانه با کیفیت
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
