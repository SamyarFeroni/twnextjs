import Head from "next/head";
import Image from "next/image";
import { ImageLink } from "./Datas";
import { Column2 } from "./Functions";
export default function Home() {
  return (
    <div className="relative bg-slate-50 min-h-screen" dir="rtl" style={{ marginRight: '-190px' }}>
      <Head>
        <title className="text-gray-300">مرکز خرید آنلاین بانی مد</title>
      </Head>
      {/* texts from the botton of page */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-300 mb-4 text-right text-base">
          مرکز خرید آنلاین پوشاک بانی مد
        </h1>
        <h2 className="text-2xl9 font-semibold text-gray-800 mb-2 text-right text-3xl">
          مرکز خرید آنلاین بانی مد
        </h2>
        <p className="text-gray-400 mb-4 text-right">
          مرکز خرید آنلاین بانی مد، فعالیت خود را در سال 1393 آغاز کرد و اکنون
          به عنوان بزرگترین مرکز خرید آنلاین ایرانی در حوزه های مختلف شناخته
          می‌شود.
        </p>
        <a
          className="mb-4 text-right cursor-pointer"
          style={{ color: "#00bf6f" }}
        >
          بیشتر بخوانید
        </a>
      </div>
      {/* Logos of the componyes */}
      <div className="flex justify-center items-center" style={{ marginRight: "190px" }}>
        <Column2 alt={"logo1"} itemLinks={ImageLink.logo1} widths={92} heights={92} />
        <Column2 alt={"logo2"} itemLinks={ImageLink.logo2} widths={92} heights={92} />
        <Column2 alt={"logo3"} itemLinks={ImageLink.logo3} widths={92} heights={92} />
        <Column2 alt={"logo4"} itemLinks={ImageLink.logo4} widths={92} heights={92} /> 
      </div>
    </div>
  );
}
