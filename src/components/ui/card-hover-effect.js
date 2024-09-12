import { cn } from "@/lib/utils";

export const HoverEffect = ({ items, className }) => {

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, index) => (
        <div 
          className="relative group block p-2 h-full w-full"
          key={index}
          >
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black border border-transparent dark:border-white/[0.2] group-hover:border-blue-500 relative z-20",
      className
    )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-blue-400 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
