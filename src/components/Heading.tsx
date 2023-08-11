"use clinet";

interface HeadingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"} mt-[12px]`}>
      <div className="text-3xl font-bold text-neutral-700">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
