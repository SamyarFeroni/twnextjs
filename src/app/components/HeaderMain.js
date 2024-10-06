import React from "react";
import Image from "next/image";

function HeaderMain() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="grid grid-cols-5 gap-4 w-full max-w-6xl mb-10">
        <div className="leftside">
          <div className="mb-14 text-right">
            <Image
              src="https://www.banimode.com//themes/new/assets/images/footer/footer-logo.svg"
              alt="Banimode Logo"
              width={306}
              height={60}
            />
          </div>

          <div className="sumitDWN1 flex items-center ">
            <Image
              src="https://www.banimode.com//themes/new/assets/images/icon/bazaar-logo.svg"
              alt="Bazaar Logo"
              width={50}
              height={60}
            />
            <div className="text-white w-fit ml-2"> 
              دریافت اپلیکیشن از
            </div>
          </div>

          <div className="sumitDWN2 flex items-center">
            <Image
              src="https://www.banimode.com//themes/new/assets/images/icon/sib-app.png" 
              alt="sibapp Logo" 
              width={56} 
              height={60} />
            <div className="text-gray-950 ml-2 w-fit"> 
              دریافت اپلیکیشن از
            </div>
          </div>

          <div className="sumitDWN3 flex items-center">
            <div style={{ color: "#00bf6f" }} className="w-fit"> 
              دانلود اپلیکیشن
            </div>
            <Image
              src="https://www.banimode.com//themes/new/assets/images/app-download.svg"
              alt="dwn"
              height={24}
              width={24}
            />
          </div>

          <div className="flex justify-between mt-4">
  <div>
    <Image
      className="cursor-pointer relative icon"
      src="https://www.banimode.com//themes/new/assets/images/footer-twitter.svg"
      alt="twitter"
      width={20}
      height={20}
    />
  </div>
  <div>
    <Image
      className="cursor-pointer relative icon"
      src="https://www.banimode.com//themes/new/assets/images/footer-aparat.svg"
      alt="aparat"
      width={20}
      height={20}
    />
  </div>
  <div>
    <Image
      className="cursor-pointer relative icon"
      src="https://www.banimode.com//themes/new/assets/images/footer-telegram.svg"
      alt="telegram"
      width={20}
      height={20}
    />
  </div>
  <div>
    <Image
      className="cursor-pointer relative icon"
      src="https://www.banimode.com//themes/new/assets/images/footer-insta.svg"
      alt="instagram"
      width={20}
      height={20}
    />
  </div>


          </div>
        </div>

        <div className="rightside4" dir="rtl">
          <h3 className="font-semibold mb-3 text-gray-300">
            منتظر شنیدن صدای گرمتیم
            <div className="text-gray-300 text-[10px] mt-3 mb-3">
              7 روز هفته - 24 ساعته
            </div>
          </h3>

          <div className="mb-7 text-sm">
            <span className="text-gray-400">تلفن:</span> 
            <a className="hover-colorNEW cursor-pointer w-fit">021-49215</a> 
          </div>
          <div className="mb-7 text-sm">
            <span className="text-gray-400">پیامک:</span> 
            <a className="hover-colorNEW cursor-pointer w-fit">10001654</a> 
          </div>

          <div className="flex items-center mb-7 text-sm">
            <span className="text-gray-400 mr-2">ایمیل: </span>
            <a href="mailto:customer@banimode.com" className="hover-colorNEW text-gray-950 w-fit"> 
              customer@banimode.com
            </a>
          </div>

          <div>
            <Image
              src="https://www.banimode.com/themes/new/assets/images/footer/banimag-logo.svg"
              alt="bani mag"
              height={150}
              width={150}
            />
          </div>
        </div>

        <div className="rightside3"dir="rtl">
          <h3 className="font-semibold mb-7 text-gray-300">اطلاعات بانی مد</h3>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            درباره ما
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            قوانین و مقررات
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            تماس با ما
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            فرصت های شغلی
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            همکاری تجاری
          </div>
        </div>

        <div className="rightside2"dir="rtl">
          <h3 className="font-semibold mb-7 text-gray-300">خدمات مشتریان</h3>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            پرسش های متداول
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            شرایط بازگشت
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            راهنمای خرید
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            B2B فروش
          </div>
        </div>

        <div className="rightside" dir="rtl">
          <h3 className="font-semibold mb-7 text-gray-300 w-fit">خرید از بانی مد</h3>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            لباس مردانه
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            خرید لباس زنانه برند
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            خرید کیف و کفش برند
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            خرید محصولات آرایشی اصلی
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            خرید طلا و ساعت اورجینال
          </div>
          <div className="hover-color relative cursor-pointer mb-4 text-sm w-fit"> 
            خرید لوازم خانه با کیفیت
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
