import React from 'react';

function FilterButton({ setFilter, text, count, isActive }) {
  return (
    <button
      onClick={() => {
        setFilter(text);
      }}
      className={
        'py-1 px-2 rounded-md border-2 border-blue-300 bg-blue-100 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400 ' +
        (isActive && text !== 'Archived' ? ' bg-blue-300' : '') +
        (isActive && text === 'Archived'
          ? ' bg-red-300 border-red-300 hover:bg-red-300 hover:border-red-400'
          : '') +
        (!isActive && text === 'Archived'
          ? ' bg-red-100 border-red-300 hover:bg-red-300 hover:border-red-400'
          : '')
      }
    >
      {text} ({count}) {isActive}
    </button>
  );
}

export default FilterButton;
