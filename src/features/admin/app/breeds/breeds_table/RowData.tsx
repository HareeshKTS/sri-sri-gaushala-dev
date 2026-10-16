import type { Dispatch, SetStateAction } from "react";
import { Eye, SquarePen, Trash } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import type { BreedsTypes } from "../Types";


type RowDataProps = {
    item: BreedsTypes;
    setShowDescription: Dispatch<SetStateAction<number | null>>
}


export default function Rowdata({ item, setShowDescription }: RowDataProps) {

    return (
        <>
            <TableRow
                key={item.Id}
                className="text-[12px] border-b border-b-[#4caf50] break-all whitespace-normal! font-gotham!"
            >
                <TableCell
                    className="text-center min-w-27.5 max-w-27.5"
                >
                    <div className="flex justify-center">
                        <div className=" rounded-md flex justify-center items-center shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!">
                            <img src={item.breed_img} alt={item.breed_name} className=" object-contain  rounded-md" />
                        </div>
                    </div>
                </TableCell>
                <TableCell
                    className="text-center"
                >
                    {item.breed_name}
                </TableCell>
                <TableCell
                    className="text-center"
                >
                    {item.origin_native_place}
                </TableCell>
                <TableCell
                    className="text-center"
                >
                    {item.breed_type}
                </TableCell>
                <TableCell
                    className="text-center"
                >
                    {item.count}
                </TableCell>
                <TableCell
                    className=" text-center min-w-25 max-w-60"
                >
                    <div className="relative overflow-hidden text-ellipsis whitespace-nowrap py-3 px-4 rounded-md
                     shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!">
                        <button
                            type="button"
                            onClick={() => {
                                if (item.Id !== undefined) {
                                    setShowDescription(item.Id);
                                }
                            }}
                        >
                            <Eye
                                strokeWidth={2.25}
                                size={15}
                                color="#0099ff"
                                className="absolute top-0 right-2 cursor-pointer" />
                        </button>

                        {item.description}
                    </div>

                </TableCell>
                <TableCell
                    className="text-center text-[#00cb08]! font-medium font-gotham"
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
        </>
    )
}