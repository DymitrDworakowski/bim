import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <span className="ml-4 text-orange-400 font-semibold text-lg">
        Ładowanie...
      </span>
    </div>
  );
}

export default Loader;
