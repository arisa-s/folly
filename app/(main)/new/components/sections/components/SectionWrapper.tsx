export default function SectionWrapper({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-8xl w-full px-2 md:pl-36 ml-auto space-y-6 md:space-y-16 flex flex-col text-right text-2xl md:text-6xl font-secondary ${className}`}
    >
      {children}
    </div>
  );
}
