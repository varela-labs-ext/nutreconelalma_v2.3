import { COMPUTER_DATA_KEY } from "@/common/Constants";
import { Trash } from "lucide-react";

interface KeyLineFieldProps {
    inKeySelected: string;
    onShowData: (key: string) => void;
    onUpload: (key: string) => void;
    onKeyToDelete: (key: string | null) => void;
}

const KeyLineField = (props: KeyLineFieldProps) => {
    return (
        <li
            key={props.inKeySelected}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
        >
            <span
                className="flex-1 truncate cursor-pointer text-left"
                onClick={() => props.onShowData(props.inKeySelected)}
            >
                {props.inKeySelected.replace(`${COMPUTER_DATA_KEY}:`, "")}
            </span>

            <div className="flex gap-2 ml-4">
                <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => props.onKeyToDelete(props.inKeySelected)}
                    title="Eliminar"
                >
                    <Trash size={20} />
                </button>
            </div>
        </li>
    );
};

export default KeyLineField;