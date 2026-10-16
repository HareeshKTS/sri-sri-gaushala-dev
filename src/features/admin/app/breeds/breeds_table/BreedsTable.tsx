import { dummy_cow } from "@/assets/admin_assets";
import Header from "../components/Header"
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Rowdata from "./RowData";
import type { BreedsTypes } from "../Types";
import { useState } from "react";
import CustomModal from "@/shared/CustomModal";
import DescriptionModal from "../components/modals/DescriptionModal";
import AddBreeds from "../components/modals/AddBreeds";
export type BreedsColumn = {
    name: string;
};


const breedsData: BreedsTypes[] = Array(15).fill(null).map((_, index) => ({
    Id: index,
    breed_img: dummy_cow,
    breed_name: 'Vechur',
    origin_native_place: `Kerala (Kottayam)`,
    breed_type: "Cow",
    count: "20",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    status: "Active",
}))


const breedsColumn: BreedsColumn[] = [
    { name: "Breed Img" },
    { name: "Breed Name" },
    { name: "Origin / Native Place" },
    { name: "Breed Type" },
    { name: "Count" },
    { name: "Description" },
    { name: "Status" },
    { name: "Action" },
];


const BreedsTable = () => {
    const [showDescription, setShowDescription] = useState<number | null>(null);
    const [showAddBreeds, setShowAddBreeds] = useState<boolean>(false);

    return (
        <div className=" flex flex-col flex-1">
            <Header
                setOpen={setShowAddBreeds}
            />
            <Card className="my-2 px-2 py-3 h-105 flex flex-col overflow-auto gap-2  bg-[#ffffff] 
                              rounded-[6px]  font-stretch-normal">
                <Table className="font-normal flex-1">
                    <TableHeader className="sticky top-0 z-50 border-b">
                        <TableRow>
                            {breedsColumn.map((col,) => (
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
                        {breedsData.map((item) => {
                            if (!item) return null;
                            return (
                                <Rowdata
                                    key={item?.Id}
                                    item={item}
                                    setShowDescription={setShowDescription}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </Card>
            {
                showDescription && (
                    <CustomModal
                        open={showDescription}
                        onOpenChange={setShowDescription}
                    >
                        <DescriptionModal
                            setOpen={setShowDescription}
                        />
                    </CustomModal>
                )
            }
            {
                showAddBreeds && (
                    <CustomModal
                        open={showAddBreeds}
                        onOpenChange={setShowAddBreeds}
                    >
                        <AddBreeds
                            setOpen={setShowAddBreeds}
                        />
                    </CustomModal>
                )
            }
        </div>

    )
}

export default BreedsTable
