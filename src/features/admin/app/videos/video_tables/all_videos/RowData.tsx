import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash } from "lucide-react";
import CustomCheckBox from "@/shared/CustomCheckBox";
import type { AllVideoTypes } from "../../Types";

type RowDataProps = {
    item: AllVideoTypes;
    checked: boolean;
    onSelectChange: (checked: boolean) => void;
}

const RowData = ({ item, checked, onSelectChange }: RowDataProps) => {

    const getStatusStyles = (status: string) => {
        switch (status) {
            case "Upload":
                return "bg-[#e2ffe3] text-[#4caf50]";

            case "YouTube":
                return "bg-[#ffdcdc] text-[#ff0000]";

            default:
                return "bg-[#e2ffe3] text-[#000]";
        }
    };

    return (
        <TableRow
            key={item.id}
            className="text-[12px] border-b border-b-[#4caf50] break-all whitespace-normal! font-normal font-gotham!"
        >
            <TableCell
                className="text-center"
            >
                <div className="flex justify-center">
                    <CustomCheckBox
                        name={`isActive-${item.id}`}
                        id={`isActive-${item.id}`}
                        checked={checked}
                        onChange={(e) =>
                            onSelectChange(e.target.checked)
                        }
                    />
                </div>
            </TableCell>
            <TableCell
                className="text-center"
            >
                <div className="flex justify-center">
                    <div className=" rounded-md flex justify-center items-center shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!">
                        <img src={item.videos} alt={item.title} className="object-contain w-16 h-16 rounded-md" />
                    </div>
                </div>
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.title}
            </TableCell>
            <TableCell
                className="text-center"
            >
                <div className={`${getStatusStyles(item.type)} rounded-lg font-medium! px-1 py-1.5`}>
                    {item.type}
                </div>
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.location}
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.duration}
            </TableCell>
            <TableCell
                className="text-center "
            >
                {item.views}
            </TableCell>
            <TableCell
                className="text-center "
            >
                {item.published_on}
            </TableCell>
            <TableCell
            >
                <div className="flex items-center justify-center gap-4">
                    <SquarePen strokeWidth={2.25} size={20} color="#0099ff" />
                    <Trash strokeWidth={2.25} size={20} color="#ff0000" />
                </div>
            </TableCell>
        </TableRow>
    )
}

export default RowData
