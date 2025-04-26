export interface ImageModalProps {
    isOpen: boolean;
    closeModal: () => void;
    imageUrl: string | null;
}