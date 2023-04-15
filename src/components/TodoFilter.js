import React from 'react';
import FilterButton from './FilterButton';

function TodoFilter({
  filter,
  setFilter,
  todosCount,
  todosScheduledCount,
  todosCompletedCount,
  todosImportantCount,
}) {
  return (
    <div className="mb-4 mt-1">
      <FilterButton
        setFilter={setFilter}
        text={'All'}
        count={todosCount}
        isActive={filter === 'All'}
      ></FilterButton>
      <FilterButton
        setFilter={setFilter}
        text={'Scheduled'}
        count={todosScheduledCount}
        isActive={filter === 'Scheduled'}
      ></FilterButton>
      <FilterButton
        setFilter={setFilter}
        text={'Completed'}
        count={todosCompletedCount}
        isActive={filter === 'Completed'}
      ></FilterButton>
      <FilterButton
        setFilter={setFilter}
        text={'Important'}
        count={todosImportantCount}
        isActive={filter === 'Important'}
      ></FilterButton>
    </div>
  );
}

export default TodoFilter;
