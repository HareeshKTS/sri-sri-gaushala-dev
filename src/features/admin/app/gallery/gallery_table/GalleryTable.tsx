import { useState } from "react";
import { gurudev } from "@/assets/admin_assets";
import type { GalleryTableTypes } from "../Types";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RowData from "./RowData";
import CustomCheckBox from "@/shared/CustomCheckBox";

export type GalleryColumn = {
  name: string;
};

const GalleryDetails: GalleryTableTypes[] = Array(15).fill(null).map((_, index) => ({
  id: index,
  media: gurudev,
  album: 'Gurudev',
  type: `JPG`,
  date: "18 Jul 2026",
  views: "190",
}))

const GalleryHeader: GalleryColumn[] = [
  { name: "Media" },
  { name: "Album" },
  { name: "Type" },
  { name: "Date" },
  { name: "Views" },
  { name: "Action" },
];

const GalleryTable = () => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const allIds = GalleryDetails
    .filter((item) => item != null)
    .map((item) => item.id);

  const checked =
    allIds.length > 0 &&
    allIds.every((id) => selectedIds.includes(id));

  const handleSelectAll = (isChecked: boolean) => {
    setSelectedIds(isChecked ? allIds : []);
  };

  const handleSelectRow = (
    id: string | number,
    isChecked: boolean
  ) => {
    setSelectedIds((prev) =>
      isChecked
        ? [...prev.filter((selectedId) => selectedId !== id), id]
        : prev.filter((selectedId) => selectedId !== id)
    );
  };

  return (
    <div>
      <Card className="my-2 px-2 py-2  bg-[#ffffff] rounded-[6px]  font-stretch-normal">
        <p className="font-saira text-sm font-medium py-1">Recent Media</p>
        <Card className=" h-100 flex flex-col overflow-auto gap-2">
          <Table className="font-normal flex-1">
            <TableHeader className="sticky top-0 z-50 border-b">
              <TableRow>
                <TableHead
                  className={`
                  text-green-theme
                  bg-white!
                    font-saira!
                    tracking-[0.09px]!
                    text-center!
                    whitespace-nowrap  text-nowrap! shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!
                `}
                >
                  <div className="flex justify-center">
                    <CustomCheckBox
                      name="selectAll"
                      id="selectAll"
                      checked={checked}
                      onChange={(e) =>
                        handleSelectAll(e.target.checked)
                      }
                    />
                  </div>
                </TableHead>
                {GalleryHeader.map((col,) => (
                  <TableHead
                    key={col.name}
                    className={`
                              text-green-theme
                              bg-white!
                                font-saira!
                                tracking-[0.09px]!
                                text-center!
                                whitespace-nowrap  text-nowrap! shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!
                            `}
                  >
                    {col.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {GalleryDetails.map((item) => {
                if (!item) return null;
                return (
                  <RowData
                    key={item?.id}
                    item={item}
                    checked={selectedIds.includes(item.id)}
                    onSelectChange={(isChecked) =>
                      handleSelectRow(item.id, isChecked)
                    }
                  />
                )
              })}
            </TableBody>
          </Table>
        </Card>
      </Card>
    </div>
  )
}

export default GalleryTable;
