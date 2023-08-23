function Button({ className, buttonText, svg }) {
  return (
    <>
      <button className={className}>
        {buttonText}
        {svg}
      </button>
    </>
  );
}
export default Button;
