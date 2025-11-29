

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      MENU
    </button>
  );
};

export default ToggleButton;
