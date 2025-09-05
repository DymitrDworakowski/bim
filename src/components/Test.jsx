import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useRef } from "react";
const products = [
  { id: 1, name: "Bread", price: 10 },
  { id: 2, name: "Milk", price: 15 },
  { id: 3, name: "Cheese", price: 20 },
  { id: 4, name: "Meat", price: 20 },
];


// Зроби новий масив, де ціна кожного товару збільшена на 10%.

// Зроби масив тільки з назв (["Bread", "Milk", "Cheese"]).

// Створи новий масив, де до кожного товару додане поле inStock: true.

function Test() {
  const [produ, setProdu] = useState(products);
  const [vis, setVis] = useState(false);

  function deleteItems(id) {
    const prod = produ.filter((p) => p.id !== id);
    setProdu(prod);
  }

  function addPrice(id) {
    const prod = produ.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          price: p.price * 1.1,
        };
      } else {
        return p;
      }
    });
    setProdu(prod);
  }

  function addInStock(id) {
    const prod = produ.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          inStock: true,
        };
      } else {
        return {
          ...p,
          inStock: false,
        };
      }
    });
    setProdu(prod);
  }

  function visible() {
    if (!vis) {
      setVis(true);
    } else {
      setVis(false);
    }
  }

  //   const Input = styled.input`
  //   position: relative;
  //   left: 13px;
  //   top: 10px;
  //   padding: 10px;
  //   margin-bottom: 20px;
  //   font-size: 16px;
  //   transition:
  //   transform 0.3s ease,color 0.3s ease,background-color 0.3s ease,border-color 0.3s ease;

  //   &:focus{
  //   transform: translateY(-20px);
  //   color: orange;}

  //   &focus: {
  //     color: orange;
  // `;

  //   const Label = styled.label`
  //     &:focus {
  //       transform: translateY(-20px);
  //       color: orange;
  //     }
  //   `;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();

  console.log(month[d.getMonth()]);
  let time = `${d.toLocaleDateString()}. ${d.toLocaleTimeString()}`;
 const nowDate = d.toLocaleDateString();
  const [day, setDay] = useState(false);
  const publicate = "2.09.2025";
  useEffect(() => {
    // Порівнюємо тільки дату (без секунд/мілісекунд)
    let text = d.toLocaleString();
    console.log(text);
    const targetDate = new Date(publicate).toLocaleDateString();
  const alreadyCelebrated = localStorage.getItem('birthdayCelebrated');
  console.log(alreadyCelebrated);
    if (nowDate === publicate) {
      setDay(true);
      localStorage.setItem('birthdayCelebrated', 'true');
    }
  }, [publicate]);

  // console.log(time);

  console.log(day);

  return (
    <>
      {day && <h1>Today is my birthday</h1>}

      {/* <Label htmlFor="\">
        <Input type="text" placeholder="First name" />
      </Label> */}
      {!vis ? (
        <p>
          {" "}
          <p className="text-gray-700 sticky border border-black overflow-hidden text-lg leading-relaxed w-48 h-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae
            cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus
            reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Impedit suscipit quisquam incidunt
            commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
          </p>
          <button
            onClick={visible}
            className="border border-black hover:border-blue-500 p-5 "
          >
            Show
          </button>
        </p>
      ) : (
        <p className="text-gray-700 sticky border border-black overflow-visible text-lg leading-relaxed w-48 h-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
          <button
            onClick={visible}
            className="border border-black bg-blue p-5 "
          >
            {vis ? "Hide" : "Show"}
          </button>
        </p>
      )}

      <h1>Product</h1>

      <div class="relative group inline-block">
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Меню</button>
      </div>

      {produ.map((pro) => (
        <ul>
          <h4 key={pro.id}>{pro.name}</h4>
          <p>{pro.price}</p>
          <button onClick={() => addPrice(pro.id)}>Add</button>
          <button onClick={() => deleteItems(pro.id)}>Delete</button>
          <input type="checkbox" onClick={() => addInStock(pro.id)} />
        </ul>
      ))}
    </>
  );
}


// const Test = () => {
//   const source = "http://media.w3.org/2010/05/sintel/trailer.mp4";
//   const playerRef = useRef();
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

export default Test;
