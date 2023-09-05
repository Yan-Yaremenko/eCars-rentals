function Button({ className, buttonText, svg }) {
  return (
    <>
      <button className={`button ${className}`}>
        {buttonText}
        {svg}
      </button>
    </>
  );
}
export default Button;
