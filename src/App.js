import React from 'react';
import Image from './img/image.png';
import Club146 from './components/Club146';

function App() {
  return (
    <Club146 
      image={Image}
      titleContent={'За 28 лет ФМШ №146 окончили более 2000 учеников, и многие из них хотят и имеют возможность помогать школе развиваться.'}
      subContent={'Сейчас многие выпускники принимают участие в жизни школы, делятся опытом и привлекают ресурсы из разных сфер для помощи школе. Однако мы можем сделать больше, если объединим свои усилия и организуем систему поддержки от выпускников и друзей школы.'}
      buttonLink="https://google.com"
      />
 
  );
}

export default App;
