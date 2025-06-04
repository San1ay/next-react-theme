export const ThemeCard = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <span className="w-2 h-2 rounded-full bg-foreground border border-background shadow-sm" />
      <span className="w-2 h-2 rounded-full bg-secondary border border-background shadow-sm" />
      <span className="w-2 h-2 rounded-full bg-destructive border border-background shadow-sm" />
      <span className="w-2 h-2 rounded-full bg-destructive-background border border-background shadow-sm" />
    </div>
  );
};
