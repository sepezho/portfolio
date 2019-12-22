import React from "react";

import s from "./Footer.module.sass";

const Text = () => {
  return (
    <div className={s.Text}>
      <h1>Created by sepezho</h1>
      <div>
        Время создания:
        <nav>
          <li>С: 1.09.2019</li>
          <li>До: 23.12.2019</li>
        </nav>
        <br />
        <br />
        Почта:
        <nav>
          <li>sepezho@gmail.com</li>
          <li>koko2kocit@gmail.com (резерв)</li>
        </nav>
      </div>
    </div>
  );
};

export default Text;
