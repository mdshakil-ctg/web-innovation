"use client";

import { useModalContext } from "../components/Modal/ModalProvider";



export const useModal = () => {
  const { openModal, closeModal } = useModalContext();
  return { openModal, closeModal };
};
