import { useForm } from "react-hook-form";
import { File, Play, Trash, Upload, X } from "lucide-react";
import { useCallback, useState, type Dispatch, type SetStateAction } from "react"
import { FormInputField } from "@/shared/custom_form_components/FormFields"
import CustomButton from "@/shared/CustomButton"
import CustomSelect from "@/shared/CustomSelect"
import type { UploadValueTypes } from "../../Types";
import { Card } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";

interface SelectedFile {
    file: File;
    preview: string;
}

type SelectAlbums = {
    label: string;
    value: string;
}

const albumItems: SelectAlbums[] = [
    { label: "one", value: "one" },
    { label: "Two", value: "Two" },
    { label: "Three", value: "Three" },
];


type UploadVideoProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const UploadVideos = ({ setOpen }: UploadVideoProps) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
    const [selectdType, setSelectedType] = useState<string>("upload video");

    const { control, trigger, handleSubmit } = useForm<UploadValueTypes>({
        defaultValues: {
            video_title: "",
            location: "",
            video_URL: ""
        },
        mode: "onChange"
    });

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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "video/mp4": [".mp4"],
            "video/webm": [".webm"],
            "video/quicktime": [".mov"],
            "video/x-msvideo": [".avi"],
        }
    });


    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (selectedFiles[0]?.preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };


    const handleGalleryData = async (data: UploadValueTypes) => {
        const isValid = await trigger();
        if (!isValid) return;
        const payload = {
            video_title: data.video_title,
            location: data.location,
            video_URL: data.video_URL
        }
        console.log(payload, 'payload');
    }

    const selectedFile = selectedFiles[0];

    return (
        <div className="min-w-[80vw]  lg:min-w-[60vw] lg:max-w-[60vw]  min-h-[45vh] h-[65vh] flex overflow-auto">
            <div className="w-full flex flex-col bg-white  px-2">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-green-theme font-gotham tracking-[0.09px] text-base font-semibold">Upload Video</p>
                    </div>
                    <div>
                        <button onClick={() => setOpen(false)} className='bg-transparent outline-0 cursor-pointer'>
                            <X color="#0f172a" strokeWidth={2.25} size={30} />
                        </button>
                    </div>
                </div>
                <Card className="overflow-auto px-2 shadow rounded-lg my-2 flex flex-col flex-1">
                    <form onSubmit={handleSubmit(handleGalleryData)} className="flex flex-col gap-2 overflow-auto flex-1  py-1">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedType("upload video")}
                                type="button"
                                className={`${selectdType === "upload video" ?
                                    "text-white bg-green-theme" : "text-green-theme bg-white"}
                                    border border-[#4caf50]! ! flex gap-2 items-center px-2.5 py-1 rounded-sm font-gotham! font-normal cursor-pointer`}>
                                <Upload size={18} color={selectdType === "upload video" ? "#fff" : "#2e7d32"} />
                                <p className="text-sm">Upload Video</p>
                            </button>
                            <button
                                onClick={() => setSelectedType("youtube video")}
                                type="button"
                                className={`${selectdType === "youtube video" ?
                                    "text-white bg-green-theme" : "text-green-theme bg-white"} border border-[#4caf50]! flex gap-2 items-center 
                                px-2.5 py-1 rounded-sm font-gotham! font-normal cursor-pointer`}>
                                <Play size={18} color={selectdType === "youtube video" ? "#fff" : "#2e7d32"} />
                                <p className="text-sm ">YouTube Video</p>
                            </button>
                        </div>
                        {
                            selectdType === "upload video" ? (
                                <div className="flex-1 flex flex-col lg:flex-row overflow-auto gap-4 px-2">
                                    <div className="relative w-full  h-full flex-1 py-2">
                                        <div
                                            {...getRootProps()}
                                            className={`relative border-2 border-dashed rounded-lg  w-full min-h-60 h-full
                                        
                                         ${isDragActive ? "bg-green-100" : "bg-[#f5fff5]"}
                                          border-[#4caf50] flex flex-col gap-2 items-center 
                                         justify-center cursor-pointer overflow-hidden`}
                                        >
                                            <input {...getInputProps()} />

                                            {selectedFile ? (
                                                <>
                                                    <div className="absolute inset-0 pointer-events-none">
                                                        <video
                                                            src={selectedFile.preview}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="w-full min-h-60 h-full object-cover"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={handleRemove}
                                                        className="absolute top-0 right-0 w-6 h-6 rounded-full bg-black/70
                                        text-white flex items-center justify-center text-sm hover:bg-red-600 transition-colors cursor-pointer"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="font-gotham flex flex-col gap-1 leading-snug items-center justify-center p-4 bg-[#f5fff5]">
                                                    <div className="flex flex-col gap-2 items-center text-base font-normal ">
                                                        <p className=" text-wrap text-center text-green-theme">
                                                            Drag & drop your video file here
                                                        </p>
                                                        <p className=" text-wrap text-center text-green-theme">
                                                            or
                                                        </p>
                                                        <div className="text-white bg-green-theme! flex gap-2 items-center px-2.5 py-1 rounded-sm font-gotham! font-normal">
                                                            <File size={18} />
                                                            <p className="text-sm">Choose File</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="flex flex-col gap-2  my-2">
                                            <FormInputField
                                                label="Location"
                                                name="location"
                                                placeholder="Location"
                                                control={control}
                                                rules={{ required: "required" }}
                                            />
                                            <CustomSelect
                                                name="video_title"
                                                label="Video Title"
                                                options={albumItems}
                                                placeholder="Select Video"
                                                triggerClassName="rounded-sm! w-full h-[40px]!  text-[#4caf50]! border-input! focus:border-[#a2d5a4]!
                                         focus-visible:border-[#a2d5a4]! bg-[#F8F6F2]!"
                                                rules={{ required: "required" }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="flex flex-col gap-2">
                                        <FormInputField
                                            label="Video URL"
                                            name="video_URL"
                                            placeholder="Past YouTube video URL here"
                                            control={control}
                                            rules={{ required: "required" }}
                                            InputClassName="bg-[#f5fff5]! border! border-[#4caf50]! border-dashed!"
                                        />
                                        <span className="text-[#aaaaaa] text-xs">
                                            Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[#000000] text-[clamp(16px,1vw,0.8rem)] font-gotham font-medium">
                                            How to get YouTube link?
                                        </p>
                                        <div className="text-green-theme flex flex-col gap-1 text-sm">
                                            <p>1. Open the YouTube video you want to upload</p>
                                            <p>2. Click on the Share button below the video</p>
                                            <p>3. Click on Copy link</p>
                                            <p>4. Paste the link above and click Fetch</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="flex gap-2 justify-end py-2">
                            <CustomButton
                                onClick={() => setOpen(false)}
                                type="button"
                                Text="Cancel"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-white! border! border-[#ff0000]! text-[#ff0000]! rounded-sm bg-blue-theme!'
                            />
                            <CustomButton
                                type="button"
                                Text="Draft"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-white! border! border-[#aaaaaa]! text-[#aaaaaa]! rounded-sm bg-blue-theme!'
                            />
                            <CustomButton
                                type="submit"
                                Text="Submit"
                                TextClassName="text-sm! font-medium!"
                                className='w-fit! py-0.5! px-4! bg-green-theme! rounded-sm bg-blue-theme!'
                            />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default UploadVideos
