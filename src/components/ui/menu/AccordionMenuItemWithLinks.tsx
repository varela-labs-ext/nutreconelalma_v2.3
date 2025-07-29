import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface SubLink {
    label: string;
    to: string;
}

interface AccordionMenuItemWithLinksProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    items: SubLink[];
    onCloseSidebar?: () => void; // opcional
}

const AccordionMenuItemWithLinks = (props: AccordionMenuItemWithLinksProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleNavigate = (path: string) => {
        navigate(path);
        props.onCloseSidebar?.();
        setIsOpen(false);
    };

    return (
        <div className="space-y-1">
            <button
                className={clsx(
                    "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-full transition-colors",
                    props.isActive ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={toggleOpen}
            >
                <div className="flex items-center">
                    {props.icon}
                    <span className="ml-2">{props.label}</span>
                </div>
                <ChevronDown
                    className={clsx(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                />
            </button>

            <div
                className={clsx(
                    "ml-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                {props.items.map((item, index) => (
                    <button
                        key={index}
                        className="w-full text-left text-sm px-4 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => handleNavigate(item.to)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AccordionMenuItemWithLinks;
