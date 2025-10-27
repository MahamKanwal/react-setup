import React from "react";

const FormGenerator = ({ fields,onSubmit,values,setValues}) => {
  const handleChange = (e) => {
const {name, value}= e.target;
setValues({...values, [name]:value})
  }
  
  return (
    <form action="" className="space-y-3" onSubmit={onSubmit}>
      {fields.map((field, index) => {
        return field.type=="select" ? <SelectElement {...field} key={index} handleChange={handleChange} value={values[field.name]}/> : <InputElement {...field} key={index} handleChange={handleChange} value={values[field.name]}/>;
      })}

      <div className="flex gap-2 justify-end border-t-2 border-gray-200 p-3">
          <button className="rounded-lg border px-5 py-1">Save</button>
        </div>
    </form>
  );
};

export default FormGenerator;

const InputElement = ({ label, type = "text", name, icon, handleChange, value, required=false}) => {
  const fieldName = label || snakeCaseToTitle(name);
  return (
    <div className="flex flex-col">
      <label className="flex items-center gap-1 text-gray-700 font-medium">
        {icon}
        {fieldName}
      </label>
      <input 
      value={value}
      onChange={handleChange}
        type={type}
        name={name}
        placeholder={`Enter ${fieldName}`}
        required={required}
        className="mt-1 rounded-lg p-2 w-full border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="text-red-700 text-sm" data-error="name"></div>
    </div>
  );
};

const SelectElement = ({ label, name, icon, options = [],handleChange,value, required=false}) => {
  const fieldName = label || snakeCaseToTitle(name);
  return (
    <div className="flex flex-col">
      <label className="flex items-center gap-2 text-gray-700 font-medium">
        {icon}
        {fieldName}
      </label>
      <select
      required={required}
      value={value}
      onChange={handleChange}
        name={name}
        className="mt-1 py-2 px-3 border border-blue-800 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select {fieldName}</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="text-red-700 text-sm" data-error="category"></div>
    </div>
  );
};

const snakeCaseToTitle = (name) => {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
