import React from "react";

const TwelveHourTimeSelect = ({ value, onChange }) => {
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const meridiems = ["AM", "PM"];

  const timeOptions = [];

  for (const hour of hours) {
    for (const meridiem of meridiems) {
      timeOptions.push(`${hour}:00 ${meridiem}`);
      timeOptions.push(`${hour}:30 ${meridiem}`);
    }
  }

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="time"
      >
        Select Time
      </label>
      <select
        name="reserveTime"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={value}
        required={true}
      >
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <span className="text-sm text-secondary">
        Open from 10:00 AM to 10:00 PM
      </span>
    </div>
  );
};

export default TwelveHourTimeSelect;
