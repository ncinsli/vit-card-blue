import React from 'react';

/**
 * @param image Основное изображение блока
 * @param titleContent Текст заголовка блока
 * @param subContent Текст подзаголовка блока
 * @param buttonLink Ссылка для кнопки
 * @param linkButtonText Перегрузка текста кнопки
**/

function Club146(props) {

  return <div className="bg-[#5399EA]">

    <div className='flex justify-end flex-col py-5'>
      <div className='flex lg:flex-row flex-col p-12 lg:p-16  lg:space-x-10 lg:space-y-0 space-y-10'>
        <img src={props.image} className='h-1/3 object-cover'></img>
      
        <div className='flex flex-col space-y-10'>
          <div className='flex space-y-10 flex-col'>
            <h2 className='text-white whitespace-pre-line text-3xl font-macondo font-regular lg:max-w-xl lg:text-4xl' dangerouslySetInnerHTML={{__html: props.titleContent}}></h2>
            
            <p className='text-white whitespace-pre-line max-w-xl text-m font-inter' 
               dangerouslySetInnerHTML={{__html: props.subContent}} />
          </div>

          <button className='lg:self-start w-1/1 px-5 h-10 text-white border-2 border-solid border-white' 
                  onClick={() => window.open(props.buttonLink)}>{props.linkButtonText ?? 'Присоединиться'}
          </button>

        </div>
      </div>

  </div>

</div>;
}

export default Club146;
