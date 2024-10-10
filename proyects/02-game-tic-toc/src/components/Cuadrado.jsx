export const Cuadrado = ({ children, isSelected, update, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
  
    const handelClick = () => {
      update(index);
    };
  
    return (
      <div onClick={handelClick} className={className}>
        {children}
      </div>
    );
};