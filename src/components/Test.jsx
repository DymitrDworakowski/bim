import { useState } from "react";
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
const [produ, setProdu] = useState(products)


function deleteItems(id) {
    const prod = produ.filter(p => p.id !== id)
    setProdu(prod)
}


function addPrice(id) {
const prod = produ.map(p =>{
    
    if(p.id === id){
        return {
            ...p,
            price: p.price * 1.1 ,
        } 
        } else {
            
            return p;
        
    }
    
})
setProdu(prod)
}

function addInStock(id) {
    const prod = produ.map(p =>{
        
        if(p.id === id){
            return {
                ...p,
                inStock: true ,
            } 
            } else {
                
                return {
                ...p,
                inStock: false ,
            };
            
        }
        
    })
    setProdu(prod)
    }
console.log(produ)
  return (
    <>
      <h1>Product</h1>
      {produ.map((pro) => (
        <ul>
          <h4 key={pro.id}>{pro.name}</h4>
          <p>{pro.price}</p>
          <button onClick={() => addPrice(pro.id)}>Add</button>
          <button onClick={() => deleteItems(pro.id)}>Delete</button>
          <input type="checkbox" onClick={() => addInStock(pro.id)} />
        </ul>
        
      ))}
      
{/* <div class="text-xl font-bold text-blue-600">Привіт, Tailwind!</div>


<div class="p-4 m-2">Контент з відступами</div>


<div class="bg-gray-100">Сірий фон</div>


<div class="border border-red-500 rounded-lg">Рамка</div>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Клікни мене
</button>
<div class="max-w-sm rounded overflow-hidden shadow-lg p-4">
    <div class="font-bold text-xl mb-2">Заголовок картки</div>
    <p class="text-gray-700 text-base">
        Опис картки з основним текстом...
    </p>
</div>
<nav class="flex flex-col md:flex-row gap-4 bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white text-xl font-bold">Мій сайт</a>
        <div class="space-x-4">
            <a href="#" class="text-white hover:text-gray-300">Головна</a>
            <a href="#" class="text-white hover:text-gray-300">Про нас</a>
            <a href="#" class="text-white hover:text-gray-300">Контакти</a>
        </div>
    </div>
</nav> */}
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

