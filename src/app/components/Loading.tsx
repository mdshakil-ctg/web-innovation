"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ show }: { show: boolean }) {
  return (
     <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          

          {/* Spinner */}
          <motion.div
            className="relative w-20 h-20 rounded-full border-4 border-emerald-400 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-emerald-500 border-t-transparent"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
