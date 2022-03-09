type T_Select = {
  className?: string;
};

const Select = ({ className }: T_Select) => {
  return (
    <select title='a' className={`outline-none divide-y divide-solid divide-gray ring-inset ring-1 w-16 ring-dark bg-light rounded-sm h-fit py-0.5 text-sm ${className}`}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>2</option>
      <option value='4'>3</option>
    </select>
  );
};

export default Select;
