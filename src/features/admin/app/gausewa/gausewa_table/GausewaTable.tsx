import { useState } from "react";
import CustomButton from "@/shared/CustomButton";
import type { FeqDataTypes } from "../Types";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RowData from "./RowData";
import AddEditFeq from "../components/modals/AddEditFeq";
import CustomModal from "@/shared/CustomModal";

type FeqColumn = {
  name: string;
};

const FeqData: FeqDataTypes[] = [
  {
    id: 1,
    no: "1",
    question: 'What is Sri Sri Gaushala?',
    answer: `Sri Sri Gaushala is a community-focused initiative dedicated to the protection, care,
     and promotion of indigenous Indian cow breeds. We also promote the benefits of A2 milk and natural cow-based products.`,
    update_on: "24/07/2026"
  },
  {
    id: 2,
    no: "2",
    question: 'How can I contribute to Sri Sri Gaushala?',
    answer: `You can support us by adopting a cow, donating, volunteering, or buying our products. 
    Every contribution helps care for our cows.`,
    update_on: `24/07/2026`,
  },
]

const FeqHeaderColumn: FeqColumn[] = [
  { name: "No." },
  { name: "Questions and answers" },
  { name: "Update on" },
  { name: "Action" },
];

const GausewaTable = () => {
  const [showFeqModal, setShowFeqModal] = useState<boolean>(false)
  return (
    <div>
      <div className="flex justify-end">
        <CustomButton
          onClick={() => setShowFeqModal(true)}
          type="button"
          Text="Add FAQ"
          TextClassName="text-sm! font-medium!"
          Icon={<CirclePlus strokeWidth={2.25} size={16} color="#fff" />}
          className='w-fit! py-1! px-2! bg-green-theme! rounded-sm flex flex-row-reverse! gap-2'
        />
      </div>
      <Card className="my-2 px-2 py-3 h-105 flex flex-col overflow-auto gap-2  bg-[#ffffff] rounded-[6px]  font-stretch-normal">
        <Table className="font-normal flex-1">
          <TableHeader className="sticky top-0 z-10 border-b">
            <TableRow>
              {FeqHeaderColumn.map((col,) => (
                <TableHead
                  key={col.name}
                  className={`
                            text-green-theme
                            bg-white!
                              font-saira!
                              tracking-[0.09px]!
                              text-center!
                              whitespace-nowrap  text-nowrap! shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]!
                              ${col.name === "Questions and answers" ? "text-left!" : "text-center!"}
                    `}
                >
                  {col.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {FeqData.map((item) => {
              if (!item) return null;
              return (
                <RowData
                  key={item?.id}
                  item={item}
                />
              )
            })}
          </TableBody>
        </Table>
      </Card>
      {
        showFeqModal && (
          <CustomModal
            open={showFeqModal}
            onOpenChange={setShowFeqModal}
          >
            <AddEditFeq
              setOpen={setShowFeqModal}
            />
          </CustomModal>
        )
      }
    </div>
  )
}

export default GausewaTable
