// components/ui/filter-button.tsx
interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }
  
  export const FilterButton = ({ active, onClick, children }: FilterButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg transition-all ${
          active 
            ? "bg-orange-500 text-white" 
            : "bg-white text-gray-700 hover:bg-orange-100"
        }`}
      >
        {children}
      </button>
    );
  };
  