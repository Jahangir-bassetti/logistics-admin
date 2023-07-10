export interface SidebarProps {
    isOpen: {
        isBtnOpen: boolean;
        currentValue: boolean;
      };
      setSideBarOpen: React.Dispatch<
        React.SetStateAction<{
          isBtnOpen: boolean;
          currentValue: boolean;
        }>
      >;
      toggleSidebar: () => void;
  };
  
  export interface SidebarItem {
    id: number;
    title: string;
    link: string;
    active: string;
    icon: any;
    children?: SidebarItem[];
  }
