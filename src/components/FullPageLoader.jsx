import { motion } from "framer-motion";

function FullPageLoader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="mt-6 text-orange-400 text-xl font-bold uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        Ładowanie...
      </motion.p>
    </div>
  );
}

export default FullPageLoader;
