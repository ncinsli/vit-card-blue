import '../App.css';
import React from 'react';
import Image from '../img/image.png';

function FriendsClub(props) {

  return <div className='bg-[#5399EA]'>

    <div className='flex justify-end flex-col py-5'>
      <div className='flex lg:flex-row flex-col p-16 lg:space-x-10 lg:space-y-0 space-y-10'>
        <img src={Image} className='h-1/3 object-cover'></img>
      
        <div className='flex flex-col space-y-10'>
          <div className='flex space-y-10 flex-col'>
            <h2 className='text-white text-3xl font-["Macondo"] font-regular text-clip lg:max-w-xl lg:text-4xl'>За 28 лет ФМШ №146 окончили более 2000 выпускников, и наступило то время, когда многие из них хотят и имеют возможность помогать школе развиваться.</h2>
            
            <p className='text-white max-w-xl text-s font-["Inter"]'>
              Сейчас многие выпускники принимают участие в жизни школы, делятся опытом и привлекают ресурсы из разных сфер для помощи школе. Однако мы можем сделать больше, если объединим свои усилия и организуем систему поддержки от выпускников и друзей школы.
            </p>
          </div>
          <button className='lg:self-start w-1/1 px-5 h-10 text-white border-2 border-solid border-white'>Присоединиться</button>


        </div>
      </div>

  </div>

</div>;
}

export default FriendsClub;
