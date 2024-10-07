import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="rightside5 bg-slate-50 min-h-screen" dir="rtl">
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
      <div
        className="flex justify-center items-center"
        style={{ marginRight: "190px" }}
      >
        <Image
          className="mx-2"
          src="https://www.banimode.com//themes/new/assets/images/footer/samandehi.png@2x.png"
          width={92}
          height={92}
          alt="Logo 1"
        />
        <Image
          className="mx-2"
          src="https://www.banimode.com//themes/new/assets/images/footer/logo-itehad@2x.png"
          width={92}
          height={92}
          alt="Logo 2"
        />
        <Image
          className="mx-2"
          src="https://www.banimode.com/assets/img/enamad.png"
          width={92}
          height={92}
          alt="Logo 3"
        />
        <Image
          className="mx-2"
          src="https://www.banimode.com/assets/img/enamad.png"
          width={92}
          height={92}
          alt="Logo 3"
        />
      </div>
    </div>
  );
}
