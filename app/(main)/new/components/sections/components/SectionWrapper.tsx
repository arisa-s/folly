export default function SectionWrapper({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-7xl ml-auto space-y-16 flex flex-col text-right text-6xl font-primary ${className}`}
    >
      {children}
    </div>
  );
}
