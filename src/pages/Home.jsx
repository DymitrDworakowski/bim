import React from "react";

function Home() {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          To jest Strona główna
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
          excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
          reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
          dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
          ipsum quos unde voluptatum?
        </p>
      </div>
    </div>
  );
}

export default Home;
