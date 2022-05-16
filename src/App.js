import {React, useState} from 'react'
import './App.css';

function App() {

  // Объявляем необходимые переменные

  let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

  const [list, setList] = useState(courses);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);


  // Функция отрисовки списка курсов

  function courseDraw(){
   return list.map((e, i)=>{
     return(
       <div className='coure' key={i}>
         {e.name}, {e.prices[0]} - {e.prices[1]}
       </div>
     )
   })
  }

  // Функция фильтрации:

  function courseFilter(){
    //Создаю массив в который будут скидываться курсы которые прошли фильтрацию
    let tempArr =[]
    // Обнуляю стейт со списком курсов
    setList([])
    //Цикл проверки
    for (let index = 0; index < list.length; index++) {
      let filterObject = list[index]
      if ((min >= filterObject.prices[0] || filterObject.prices[0] == null)&&(max < filterObject.prices[1] || filterObject.prices[1] == null))  {
        // Закидываю курс который прошел фильтрацию в массив
        tempArr.push(filterObject)
      }
      // Закидываю в список курсов те курсы, которые прошли проверку
      setList([...tempArr])
      
    }
  }

  // Функция очистки фильтров и сортировки
  function clearFilter(){
    setList(courses)
  }

  // Функция сортировки
  function arrSort(){
    //Создание массива элементов list через спред оператор
    let sortingItems = [...list]
    //Сортировки по минимальной цене
    sortingItems.sort(function(a,b){ 
      return a.prices[0] - b.prices[0]
    })
    //Присваивание List элементов из sortingItems
    setList([...sortingItems])
  }

  return (
    <div className="App">
      <input onChange={(e)=> setMin(e.target.value)} ></input>
      <input onChange={(e)=> setMax(e.target.value)} ></input>
      <button onClick={(e)=> courseFilter()} >filter</button>
      <button onClick={(e)=> clearFilter()} >clear</button>
      <button onClick={(e)=> arrSort()} >price sort</button>
      {courseDraw()}
    </div>
  );
}

export default App;
