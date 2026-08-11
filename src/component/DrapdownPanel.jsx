export const Dropdown = ({ isOpen, onClose, children }) => {

  return (
    // {Dropdown panel}
    <div className={`absolute top-full text-gray-800 left-0 right-0 z-50 bg-white rounded-lg p-4 overflow-hidden md:hidden  shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'min-h-96 opacity-100' : 'min-h-0 opacity-0'}`}>
      {children}
    </div>)
}