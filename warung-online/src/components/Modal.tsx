type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="inset-0 fixed z-100 flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col bg-white w-[500px]  justify-between items-start mb-4 p-5 rounded-sm relative shadow-2xl">
        <div className="flex w-full items-center mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-3xl leading-none absolute top-2 right-2"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-800">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
