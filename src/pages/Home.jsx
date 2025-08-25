import React from "react";

import imgBim from "../images/06.jpg";

function Home() {
  return (
    <div>
      <img src={imgBim} alt="BIM" width={200} height={90} />
      <h1>To jest Strona główna</h1>
      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </div>
  );
}

export default Home;
