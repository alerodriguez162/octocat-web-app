import React from "react";
import "./styles.css";
const Select = ({ data, onChange, name }) => {
  return (
    <>
      <select id={name} name={name} onChange={onChange} className="select" defaultValue="0">
        <option value="0" disabled hidden>
          Choose here {name}
        </option>
        {data.map((field) => {
          return (
            <option key={field.name} value={field.name}>
              {field.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
