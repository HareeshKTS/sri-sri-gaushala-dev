import { TableCell, TableRow } from "@/components/ui/table";
import { SquarePen, Trash } from "lucide-react";
import type { FeqDataTypes } from "../Types";

type RowDataProps = {
  item: FeqDataTypes;
}

const RowData = ({ item }: RowDataProps) => {
  return (
    <TableRow
      className="text-[12px] border-b border-b-[#4caf50] break-all whitespace-normal! font-gotham!"
    >
      <TableCell
        className="text-center"
      >
        {item.no}
      </TableCell>
      <TableCell
        className="text-left min-w-25 max-w-60"
      >
        <div className="relative overflow-hidden text-ellipsis whitespace-nowrap py-3 rounded-md
                     ">
          <p className="text-[#b76e00] font-saira font-medium text-[clamp(16px,1.5vw,0.7rem)] tracking-[0.09px]">
            {item.question}
          </p>
          {item.answer}
        </div>

      </TableCell>
      <TableCell
        className="text-center"
      >
        {item.update_on}
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
