import logo from './logo.svg';
import './App.css';
import React from 'react';
import Image from './img/image.png';

function App() {
  return (
    <React.Fragment>
      <div className='bg-[#5399EA]'>
        <div className='flex p-16 space-x-10'>
          <img src={Image} className='h-1/3 object-cover'></img>
          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col'>
              <h2 className='text-white text-4xl font-["Macondo"] font-regular max-w-xl'>За 28 лет ФМШ №146 окончили более 2000 выпускников, и наступило то время, когда многие из них хотят и имеют возможность помогать школе развиваться.</h2>
              
              <p className='text-white text-xl font-["Inter"]'>
                Сейчас многие выпускники принимают участие в жизни школы, делятся опытом и привлекают ресурсы из разных сфер для помощи школе. Однако мы можем сделать больше, если объединим свои усилия и организуем систему поддержки от выпускников и друзей школы.
              </p>
            </div>

            <button className=' w-1/3 h-1/3 text-white border-2 border-solid border-white'>Присоединиться</button>

          </div>


        </div>

      </div>
    </React.Fragment> 
  );
}

export default App;
