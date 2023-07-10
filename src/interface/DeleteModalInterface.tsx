interface MyModalProps {
    id: string | false;
    setShowModal: React.Dispatch<React.SetStateAction<string | false>>;
    action: (id: string) => void;
  }
export default MyModalProps;