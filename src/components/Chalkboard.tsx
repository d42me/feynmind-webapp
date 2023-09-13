import Image from "next/image";

const Chalkboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 w-3/4 h-3/4 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default Chalkboard;
