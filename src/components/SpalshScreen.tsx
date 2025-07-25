"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({
  duration = 2500,
}: {
  duration?: number;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-purple-200"
        >
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-fit text-center fixed items-center justify-center flex-col"
          >
            <div className="relative h-[200px] flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute z-2"
              >
                <Image
                  alt="note"
                  src="/images/note.webp"
                  width={200}
                  height={200}
                  priority
                />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="absolute z-3 top-[40px] left-[130px]"
              >
                <Image
                  alt="pen"
                  src="/images/pen.webp"
                  width={100}
                  height={100}
                  priority
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-6xl text-purple-600 text-6"
            >
              ToDo App
            </motion.p>
            <motion.p
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-gray-500"
            >
              Developed by Hossein Khedmati
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
