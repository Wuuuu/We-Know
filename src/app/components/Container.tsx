"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-[3.875%] md:px-10 sm:px-2 px-[3.875%]">
      {children}
    </div>
  );
};

export default Container;
