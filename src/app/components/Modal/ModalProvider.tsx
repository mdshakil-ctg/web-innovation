"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import Modal from "./Modal";

export type ModalColor = "blue" | "red" | "green" | "yellow" | "gray";

export type ModalData = {
  isOpen: boolean;
  title?: string;
  message?: string;
  type?: "info" | "success" | "warning" | "error" | "confirm";
  onConfirm?: (() => void) | null;
  autoCloseTime?: number | null;
  color?: ModalColor;
  icon?: string;
};

type ModalContextType = {
  openModal: (data: Omit<ModalData, "isOpen">) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    onConfirm: null,
    autoCloseTime: null,
  });

  const openModal = (data: Omit<ModalData, "isOpen">) =>
    setModalData({ ...data, isOpen: true });

  const closeModal = () =>
    setModalData((prev) => ({
      ...prev,
      isOpen: false,
    }));

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalData.isOpen}
        title={modalData.title ?? ""}
        message={modalData.message ?? ""}
        type={modalData.type ?? "info"}
        onClose={closeModal}
        onConfirm={modalData.onConfirm ?? undefined}
        autoCloseTime={modalData.autoCloseTime ?? undefined}
      />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModalContext must be used within ModalProvider");
  return ctx;
};
