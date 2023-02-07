const Text = ({ children, className }) => {
  return (
    <h1 className='text-4xl font-bold uppercase'>
      <span
        className={` ${className} bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500`}
      >
        {children}
      </span>
    </h1>
  );
};

export default Text;
