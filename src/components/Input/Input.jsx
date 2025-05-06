import './Input.css'

const Input = ({ type, placeholder, onChange, name }) => {
  return (
    <div>
      <input className="input" type={type} placeholder={placeholder} onChange={onChange} name={name}/>
    </div>
  );
};

export default Input;
