import { useState } from "react";
import { useRef } from "react";
const products = [
  { id: 1, name: "Bread", price: 10 },
  { id: 2, name: "Milk", price: 15 },
  { id: 3, name: "Cheese", price: 20 },
];

// Зроби новий масив, де ціна кожного товару збільшена на 10%.

// Зроби масив тільки з назв (["Bread", "Milk", "Cheese"]).

// Створи новий масив, де до кожного товару додане поле inStock: true.

// function Test() {
// const [produ, setProdu] = useState(products)




// function addPrice(id) {
// const prod = produ.map(p =>{
    
//     if(p.id === id){
//         return {
//             ...p,
//             price: p.price * 1.1 ,
//         } 
//         } else {
            
//             return p;
        
//     }
    
// })
// setProdu(prod)
// }

// function addInStock(id) {
//     const prod = produ.map(p =>{
        
//         if(p.id === id){
//             return {
//                 ...p,
//                 inStock: true ,
//             } 
//             } else {
                
//                 return {
//                 ...p,
//                 inStock: false ,
//             };
            
//         }
        
//     })
//     setProdu(prod)
//     }
// console.log(produ)
//   return (
//     <>
//       <h1>Product</h1>
//       {produ.map((pro) => (
//         <ul>
//           <h4 key={pro.id}>{pro.name}</h4>
//           <p>{pro.price}</p>
//           <button onClick={() => addPrice(pro.id)}>Add</button>
//           <input type="checkbox" onClick={() => addInStock(pro.id)} />
//         </ul>
        
//       ))}
      
//     </>
//   );
// }




const Test = () => {
  const source = "http://media.w3.org/2010/05/sintel/trailer.mp4";
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export default Test;
