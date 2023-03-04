import { Divider, Input } from 'antd';
import React from 'react';

function Search({ handleInputChange, searchKeyword }) {
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search-keyword">Search</label>
      <Input
        id="search-keyword"
        value={searchKeyword}
        type="text"
        onChange={handleInputChange}
      />
    </>
  );
}

export default Search;