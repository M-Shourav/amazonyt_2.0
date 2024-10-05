import { twMerge } from "tailwind-merge";
const Conatiner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("max-w-[1200px] mx-auto px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};

export default Conatiner;
