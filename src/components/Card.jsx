function Card({ children, className }) {
  return (
    <div className={`py-4 grid gap-4 md:grid-cols-2 ${className}`}>
      { children }
    </div>
  );
}

export default Card;
