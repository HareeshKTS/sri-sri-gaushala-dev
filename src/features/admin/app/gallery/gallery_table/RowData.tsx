import { TableCell, TableRow } from "@/components/ui/table";
import type { GalleryTableTypes } from "../Types";
import { SquarePen, Trash } from "lucide-react";
import CustomCheckBox from "@/shared/CustomCheckBox";

type RowDataProps = {
    item: GalleryTableTypes;
    checked: boolean;
    onSelectChange: (checked: boolean) => void;
}

const RowData = ({ item, checked, onSelectChange }: RowDataProps) => {

    return (
        <TableRow
            key={item.id}
            className="text-[12px] border-b border-b-[#4caf50] break-all whitespace-normal! font-gotham!"
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
                        <img src={item.media} alt={item.album} className=" object-contain w-16 h-16 rounded-md" />
                    </div>
                </div>
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.album}
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.type}
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.date}
            </TableCell>
            <TableCell
                className="text-center"
            >
                {item.views}
            </TableCell>
            <TableCell
                className="text-center text-[#00cb08]!"
            >
                {item.status}
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
