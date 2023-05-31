import { useState } from "react";
import { Modal } from "love-simple-ui";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <PrimaryButton text="Open Modal" onClick={openModal} />

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <PrimaryButton text="Close" onClick={closeModal} />
      </Modal>
    </div>
  );
}

export default App;
