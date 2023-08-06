import { create } from 'zustand';

interface useplusModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useplusModal = create<useplusModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useplusModal;