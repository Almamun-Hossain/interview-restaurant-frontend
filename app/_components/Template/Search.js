import React from "react";

const Search = ({ searchData = {}, onChange, onSubmit }) => {
  return (
    <div className="mb-4">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <input
              type="text"
              name="food"
              placeholder="Food title"
              className="w-full px-4 py-2 border rounded"
              value={searchData.food}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div>
            <input
              type="text"
              name="shop"
              placeholder="Shop name"
              className="w-full px-4 py-2 border rounded"
              value={searchData.shop}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="address"
              className="w-full px-4 py-2 border rounded"
              value={searchData.address}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="country"
              className="w-full px-4 py-2 border rounded"
              value={searchData.country}
              onChange={(e) => onChange(e)}
            />
          </div>

          <button
            type="submit"
            className="px-6 bg-primary text-white text-lg rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
