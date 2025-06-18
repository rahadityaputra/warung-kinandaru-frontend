type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
    >
      {/* untuk modalnya */}
      <div className="flex flex-col bg-white w-[500px] justify-between items-start mb-4 p-5 rounded-md relative"> {/* Added 'relative' here */}
        <div className="flex w-full items-center mb-4"> {/* Changed justify-around to justify-between, added items-center, and mb-4 */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-3xl leading-none absolute top-2 right-2" // Absolute positioning
            aria-label="Close" // Added for accessibility
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-800">{title}</h2>
          {children}
        </div>
      </div>
    </div >
  );
};

export default Modal;
