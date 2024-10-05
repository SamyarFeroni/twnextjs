import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen" dir="rtl">
      <title className="text-gray-300">مرکز خرید آنلاین بانی مد</title>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-300 mb-4 text-right text-base">
          مرکز خرید آنلاین پوشاک بانی مد
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-right text-3xl">
          مرکز خرید آنلاین بانی مد
        </h2>
        <p className="text-gray-700 mb-4 text-right">
          مرکز خرید آنلاین بانی مد، فعالیت خود را در سال 1393 آغاز کرد و اکنون
          به عنوان بزرگترین مرکز خرید آنلاین ایرانی در حوزه های مختلف شناخته
          می‌شود.
        </p>
        <a className="text-green-600 hover:underline mb-4 block text-right">
          بیشتر بخوانید
        </a>
      </div>
    </div>
  );
}
