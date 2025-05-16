import './Input.css'

const Input = ({ type, placeholder, onChange, name, value }) => {
  return (
    <div>
      <input className="input" type={type} placeholder={placeholder} onChange={onChange} name={name} value={value}/>
    </div>
  );
};

export default Input;
