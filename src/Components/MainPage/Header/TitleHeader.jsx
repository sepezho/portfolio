import React from 'react';

import s from './Header.module.sass';
const TitleHeader = () => {
  return (
   	<div className='TitleHeader'>
  		<div className={s.Name}>
        <h1>Vladislav Bliznyuk</h1>
        Программирование - мое хобби, пишу сайтики о всяком (в основном веб-приложения (в основном игры)). Сижу на самообучении и балдею.
  		</div>

  	</div>
  );
}

export default TitleHeader;