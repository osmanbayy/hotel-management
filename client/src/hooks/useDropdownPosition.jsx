// useDropdownPosition.js

const useDropdownPosition = () => {
  const calculatePosition = (ref, setPosition) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const position = windowHeight - rect.bottom < 300 ? "top" : "bottom";
      setPosition(position);
    }
  };

  return [null, calculatePosition];
};

export default useDropdownPosition;
