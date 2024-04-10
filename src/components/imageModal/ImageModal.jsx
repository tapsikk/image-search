import Modal from "react-modal";

const ImageModal = ({ imageUrl, closeModal }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Selected Image"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          background: 'none',
          border: 'none',
          padding: 0,
          maxWidth: '100%',
          maxHeight: '100%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          inset: 150,
          pointerEvents: 'none',
        },
      }}
    >
      <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Modal>
  );
};

export default ImageModal;