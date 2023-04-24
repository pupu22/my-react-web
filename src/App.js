import './App.css';
import {nanoid} from 'nanoid'
import {useEffect, useState} from 'react'

let objArr = [
  {
    "image": 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    word: 'Explore The World',
    "id": nanoid() 
  },
  {
    image: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    word: 'Wild Forest',
    "id": nanoid()  
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    word: 'Sunny Beach',
    "id": nanoid()  
  },
  {
    image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    word: 'City on Winter',
    "id": nanoid()    
  },
  {
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    word: 'Mountains - Clouds',
    "id": nanoid()  
  }
];


function App() {
  const [content, setContent] = useState({pre: objArr[0].id}) 

  const removeStyle = ()=> {
    document.getElementById(content.pre).setAttribute("class", "panel")
  }
  const addStyle = ()=> {
    document.getElementById(content.pre).setAttribute("class", "panel active")
  }

  const handleClick = (event) => {
    removeStyle(); //去掉颜色
    let evtId = event.target.getAttribute('id');
    setContent({
        pre: evtId,
    });
  };
  
  useEffect((addStyle), [content.pre]);
  return (
    <div class="container" >
      {objArr.map((item,idx) => (
        
        <div id={item.id} className={idx === 0 ?'panel active':'panel'}  onClick={handleClick} style={{backgroundImage: `url( ${item.image} )`}}>
          <h3>{item.word}</h3>
        </div>
      ))}
    </div>  
  );
}

export default App;