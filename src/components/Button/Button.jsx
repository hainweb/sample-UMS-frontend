
const Button = ({ text, onSubmit, onClick }) => {
  return (
    <div>
      <button className="button" onSubmit={onSubmit} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
