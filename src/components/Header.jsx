import React from 'react';

const Header = ({ route, title }) => (
  <div className=" mb-10">
    <p className=" text-sm pb-2 text-gray-400">{route}</p>
    <p className="text-3xl dark:text-gray-200 font-bold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
