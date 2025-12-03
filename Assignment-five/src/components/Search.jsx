import React, { useState, useEffect } from 'react';


const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search country"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search