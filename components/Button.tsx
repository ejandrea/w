type Button = {
  text: string;
};

const Button = ({ text }: Button) => {
  return (
    <button className="bg-red px-10 py-5 text-off-white font-bold tracking-widest hover:bg-dark-blue hover:cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
