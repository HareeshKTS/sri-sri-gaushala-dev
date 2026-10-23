import { useState } from "react";
import { gurudev } from "@/assets/admin_assets";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RowData from "./RowData";
import CustomCheckBox from "@/shared/CustomCheckBox";
import type { AllVideoTypes } from "../../Types";

export type AllVideosColumn = {
  name: string;
};

const statusType = ["Upload", "YouTube"];

const getRandomStatus = () => {
    return statusType[Math.floor(Math.random() * statusType.length)];
};

const VideoDetails: AllVideoTypes[] = Array(15).fill(null).map((_, index) => ({
  id: index,
  videos: gurudev,
  title: 'Cow',
  type: getRandomStatus(),
  location: "Home Page",
  duration: "2:00",
  views: "1000",
  published_on: "18 Jul 2026",
}))

const allVideoHeader: AllVideosColumn[] = [
  { name: "Videos" },
  { name: "Title" },
  { name: "Type" },
  { name: "Location" },
  { name: "Duration" },
  { name: "Views" },
  { name: "Published On" },
  { name: "Action" },
];

const AllVideosTable = () => {
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const allIds = VideoDetails
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
        <Card className=" h-100 flex flex-col overflow-auto gap-2">
          <Table className="font-normal flex-1">
            <TableHeader className="sticky top-0 z-10 border-b">
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
                {allVideoHeader.map((col,) => (
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
              {VideoDetails.map((item) => {
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

export default AllVideosTable;
