type BioModalProps = {
  bio: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BioModal = ({ bio, closeModal }: BioModalProps) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mobile-card">
        <div className="relative  max-w-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden soft-shadow p-8">
            {/*body*/}
            <h2 className="text-xl mb-4"> Bio</h2>
            <p > {bio}</p>
            {/*footer*/}
            <div className="flex items-center justify-end border-t border-solid border-slate-200 mt-8 rounded-b p-4">
              <button
                className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default BioModal;
