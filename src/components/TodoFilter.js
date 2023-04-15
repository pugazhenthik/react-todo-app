import React from 'react';
import FilterButton from './FilterButton';

function TodoFilter() {
  return (
    <div className="mb-4 mt-1">
      <FilterButton
        text={'Scheduled'}
        count="10"
        isActive="true"
      ></FilterButton>
      <FilterButton
        text={'Completed'}
        count="1"
        isActive={false}
      ></FilterButton>
      <FilterButton
        text={'Important'}
        count="3"
        isActive={false}
      ></FilterButton>
    </div>
  );
}

export default TodoFilter;
