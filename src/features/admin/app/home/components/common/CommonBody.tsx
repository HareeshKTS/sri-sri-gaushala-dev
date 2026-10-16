import { useCallback, useState, type Dispatch, type SetStateAction } from "react";
import { ArrowUpRight, CirclePlus, Trash } from "lucide-react";
import type { Control } from "react-hook-form";
import { useNavigate } from "react-router";
import type { MainFormValues, RouteSections } from "../../Types";
import { dummy_one, dummy_three, dummy_two } from "@/assets/admin_assets";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import FilesUpload from "@/shared/FilesUpload";

type CommonBodyProps = {
    route: RouteSections;
    control: Control<MainFormValues>;
    setShowBreeds: Dispatch<SetStateAction<boolean>>;
    setShowVideos: Dispatch<SetStateAction<boolean>>;
};
type TestmonialsTypes = {
    icon: string;
    name: string;
    date: string;
    role: string;
}
interface SelectedFile {
    file: File;
    preview: string;
}

const TestmonialsData: TestmonialsTypes[] = [
    { icon: dummy_one, name: "Jacqueline Fernandez", date: "20/05/2026", role: "Bollywood Actress", },
    { icon: dummy_two, name: "Mika Singh", date: "20/05/2026", role: "Indian Singer, Rapper, Musician and Actor.", },
    { icon: dummy_three, name: "Abobaker Mojadidi", date: "20/05/2026", role: "Spiritual leader and Socio-political Activist in Afghanistan.", },
    { icon: dummy_one, name: "Jacqueline Fernandez", date: "20/05/2026", role: "Bollywood Actress", },
    { icon: dummy_two, name: "Mika Singh", date: "20/05/2026", role: "Indian Singer, Rapper, Musician and Actor.", },
    { icon: dummy_three, name: "Abobaker Mojadidi", date: "20/05/2026", role: "Spiritual leader and Socio-political Activist in Afghanistan.", },
];


const CommonBody: React.FC<CommonBodyProps> = ({ route, control, setShowBreeds, setShowVideos }) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);


    const navigate = useNavigate()

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;
            const file = acceptedFiles[0];
            const newFile: SelectedFile = {
                file,
                preview: URL.createObjectURL(file),
            };
            if (selectedFiles[0]?.preview) {
                URL.revokeObjectURL(selectedFiles[0].preview);
            }
            setSelectedFiles([newFile]);
        },
        [selectedFiles]
    );


    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (selectedFiles[0]?.preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };

    const selectedFile = selectedFiles[0];


    return (
        <Card className="rounded-sm  flex flex-col  py-2  border border-[#4caf50]
         shadow-[0px_2px_4px_0px_rgba(99,99,99,0.2)]!">
            <div className="flex! items-center! justify-between! px-2">
                <div className="font-medium tracking-[0.08px]! text-[clamp(14px,1vw,0.8rem)]!
                 font-stretch-normal! text-[#4caf50]">
                    <p>{route.title}</p>
                </div>
                <div className="flex! gap-2 text-[#4caf50] items-center justify-center font-normal!
                 tracking-[0.08px]! font-stretch-normal! text-[clamp(12px,1vw,0.8rem)]">
                    <p>{route.route}</p>
                    {
                        route.title !== "Volunteer Now" && (
                            <button
                                onClick={() => navigate(route.path)}
                                type="button"
                                className="cursor-pointer"
                            >
                                <ArrowUpRight color="#4caf50" size={25} />
                            </button>
                        )
                    }

                </div>
            </div>

            <div className="px-4 py-2  min-w-0">

                {/* Visit Us */}
                {
                    route.title === "Visit Us" && (
                        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                            <div className="w-full lg:w-[30%]">
                                <div className="relative w-full min-h-32 max-h-32 h-32 ">
                                    <FilesUpload
                                        onFilesAccepted={onDrop}
                                        multiple={false}
                                        maxFiles={1}
                                        customText="Upload Video Here"
                                        FileClassName="flex  gap-4 items-center justify-evenly p-5"
                                        dimensionText="Dimension 1080px X 1920px"
                                        fileText="Click To Browse"
                                        className={selectedFile ? "border-none" : ""}
                                        hasFiles={!!selectedFile}
                                        acceptFiles={{
                                            "video/mp4": [".mp4"],
                                            "video/webm": [".webm"],
                                            "video/quicktime": [".mov"],
                                            "video/x-msvideo": [".avi"],
                                        }}
                                    />
                                    {
                                        selectedFile && (
                                            <>
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <video
                                                        src={selectedFile.preview}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(event) =>
                                                        handleRemove(event)
                                                    }
                                                    className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
                                                            w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                                        hover:bg-red-700 transition-colors cursor-pointer shadow-lg"
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="w-full lg:w-[70%]">
                                <FormTextArea
                                    name="visit_us_quote"
                                    control={control}
                                    label="Quote 1"
                                    placeholder="Enter Quate"
                                    rules={{ required: "required" }}
                                />
                            </div>
                        </div>
                    )
                }

                {/* Videos */}
                {route.title === "Videos" && (
                    <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:flex-row">
                        <div className="relative flex h-44 min-h-44 max-h-44 w-full shrink-0 rounded-lg border-2 border-dashed border-[#4caf50] sm:w-36">
                            <div
                                onClick={() => setShowVideos(true)}
                                className="flex flex-1 flex-col items-center justify-center font-saira cursor-pointer font-normal tracking-[0.05px] text-[#4caf50]">
                                <CirclePlus
                                    strokeWidth={1}
                                    color="#4caf50"
                                />

                                <p className="text-center text-sm">
                                    Select from videos section
                                </p>
                            </div>
                        </div>

                        <div className="relative flex h-44 min-w-0 w-full flex-1 items-center overflow-hidden">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full min-w-0"
                            >
                                <CarouselContent className="ml-0">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="basis-full sm:basis-1/2 lg:basis-1/4 pl-0!"
                                        >
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex aspect-video items-center justify-center p-6">
                                                        <span className="text-3xl font-semibold">
                                                            {index + 1}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="left-2 sm:left-4 lg:left-6 " />
                                <CarouselNext className="right-2 sm:right-4 lg:right-6" />
                            </Carousel>
                        </div>
                    </div>
                )}


                {/* Volunteer Now */}
                {
                    route.title === "Volunteer Now" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                                <div className="w-full lg:w-[30%]">
                                    <div className="relative w-full min-h-36 max-h-36 h-36 ">
                                        <FilesUpload
                                            onFilesAccepted={onDrop}
                                            maxFiles={1}
                                            FileClassName="flex flex-col gap-1 items-center justify-center"
                                            fileText="Click To Browse"
                                            dimensionText="Dimension 1920px X 449px"
                                            className={selectedFile ? "border-none" : ""}
                                            hasFiles={!!selectedFile}
                                            acceptFiles={{
                                                "image/jpeg": [".jpg", ".jpeg"],
                                                "image/png": [".png"],
                                                "image/webp": [".webp"],
                                            }}
                                        />
                                        {
                                            selectedFile && (
                                                <>
                                                    <div className="absolute inset-0 pointer-events-none">
                                                        <img
                                                            src={selectedFile.preview}
                                                            alt={selectedFile.file.name}
                                                            className="w-full h-full object-contain rounded-md"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(event) =>
                                                            handleRemove(event)
                                                        }
                                                        className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                         hover:bg-red-700 transition-colors cursor-pointer shadow-lg"
                                                    >
                                                        <Trash size={20} />
                                                    </button>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="w-full lg:w-[70%] flex flex-col gap-3">
                                    <FormInputField
                                        label="Heading"
                                        name="volunteer_heading"
                                        placeholder="Headings"
                                        control={control}
                                        rules={{ required: "required" }}
                                    />

                                    <FormTextArea
                                        name="volunteer_description"
                                        control={control}
                                        label="Description"
                                        placeholder="Enter description"
                                        rules={{ required: "required" }}
                                    />

                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <FormInputField
                                    label="Button Name"
                                    name="volunteer_button_name"
                                    placeholder="Button Name"
                                    control={control}
                                    rules={{ required: "required" }}
                                    className="w-full lg:w-[30%]"
                                />
                                <FormInputField
                                    label="Button Link"
                                    name="volunteer_button_link"
                                    placeholder="Button Link"
                                    control={control}
                                    rules={{ required: "required" }}
                                    className="w-full lg:w-[70%]"
                                />
                            </div>
                        </div>
                    )
                }


                {/* Donate Now */}
                {
                    route.title === "Donate Now" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                                <div className="w-full lg:w-[20%]">
                                    <div className="relative w-full min-h-36 max-h-36 h-36 ">
                                        <FilesUpload
                                            onFilesAccepted={onDrop}
                                            maxFiles={1}
                                            FileClassName="flex flex-col gap-1 items-center justify-center"
                                            fileText="Click To Browse"
                                            dimensionText="Dimension 829px X 828px"
                                            className={selectedFile ? "border-none" : ""}
                                            hasFiles={!!selectedFile}
                                            acceptFiles={{
                                                "image/jpeg": [".jpg", ".jpeg"],
                                                "image/png": [".png"],
                                                "image/webp": [".webp"],
                                            }}
                                        />
                                        {
                                            selectedFile && (
                                                <>
                                                    <div className="absolute inset-0 pointer-events-none">
                                                        <img
                                                            src={selectedFile.preview}
                                                            alt={selectedFile.file.name}
                                                            className="w-full h-full object-contain rounded-md"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(event) =>
                                                            handleRemove(event)
                                                        }
                                                        className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                         hover:bg-red-700 transition-colors cursor-pointer shadow-lg"
                                                    >
                                                        <Trash size={20} />
                                                    </button>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="w-full lg:w-[80%] flex flex-col gap-3">
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        <FormInputField
                                            label="Heading"
                                            name="donate_now_heading"
                                            placeholder="Headings"
                                            control={control}
                                            rules={{ required: "required" }}
                                        />
                                        <FormInputField
                                            label="Sub-Heading"
                                            name="donate_now_sub_heading"
                                            placeholder="Sub-Heading"
                                            control={control}
                                            rules={{ required: "required" }}
                                        />
                                    </div>
                                    <FormTextArea
                                        name="donate_now_description_one"
                                        control={control}
                                        label="Description"
                                        placeholder="Enter Description"
                                        rules={{ required: "required" }}
                                    />

                                </div>
                            </div>
                            <div>
                                <FormTextArea
                                    name="donate_now_description_two"
                                    control={control}
                                    label="Description"
                                    className="min-h-10"
                                    placeholder="Enter Description"
                                    rules={{ required: "required" }}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <FormInputField
                                    label="Button Name"
                                    name="donate_now_button_name"
                                    placeholder="Button Name"
                                    control={control}
                                    rules={{ required: "required" }}
                                    className="flex-1"
                                />
                                <FormInputField
                                    label="Button Link"
                                    name="donate_now_button_link"
                                    placeholder="Button Link"
                                    control={control}
                                    rules={{ required: "required" }}
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    )
                }


                {/* Breeds */}

                {route.title === "Know the Breeds" && (
                    <div className="flex w-full min-w-0 flex-col items-center gap-4 lg:flex-row">
                        <div className="relative flex h-44 min-h-44 max-h-44 w-full shrink-0 rounded-lg border-2 border-dashed border-[#4caf50] sm:w-36">
                            <div
                                onClick={() => setShowBreeds(true)}
                                className="flex flex-1 flex-col items-center justify-center font-saira font-normal cursor-pointer tracking-[0.05px] text-[#4caf50]">
                                <CirclePlus
                                    strokeWidth={1}
                                    color="#4caf50"
                                />
                                <p className="text-center text-sm">
                                    Select from Breeds section
                                </p>
                            </div>
                        </div>

                        <div className="relative flex h-44 min-w-0 w-full flex-1 items-center overflow-hidden">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full min-w-0"
                            >
                                <CarouselContent className="ml-0">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="basis-full sm:basis-1/2 lg:basis-1/4 pl-0! "
                                        >
                                            <div className="p-1">
                                                <Card >
                                                    <CardContent className="flex aspect-3/2 items-center justify-center ">
                                                        <span className="text-base font-semibold">
                                                            Breed {index + 1}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="left-2 sm:left-4 lg:left-6 " />
                                <CarouselNext className="right-2 sm:right-4 lg:right-6" />
                            </Carousel>
                        </div>
                    </div>
                )}


                {/* Testimonials */}

                {route.title === "Testimonials" && (
                    <div className="relative w-full flex justify-center h-full items-center p-2">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {TestmonialsData?.map((item, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        className="pl-4 basis-full md:basis-1/2 lg:basis-1/3  flex h-full flex-col gap-3"
                                    >
                                        <div className="flex h-full flex-col gap-3 ">
                                            <Card className="relative flex items-center justify-center  rounded-2xl border">
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="h-auto w-full object-contain"
                                                />
                                            </Card>

                                            <div className="flex items-center justify-between gap-2">
                                                <p className="font-saira text-[clamp(14px,1.2vw,1rem)] font-bold text-green-theme">
                                                    {item.name}
                                                </p>

                                                <p className="font-gotham text-xs font-medium text-[#cbcbcb]">
                                                    {item.date}
                                                </p>
                                            </div>

                                            <div className="border-b border-[#D2EBD3]" />

                                            <p className="font-saira text-sm font-normal tracking-[0.08px]">
                                                {item.role}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-4" />
                            <CarouselNext className="-right-4" />
                        </Carousel>
                    </div>
                )}
            </div>

        </Card>
    )
}

export default CommonBody
