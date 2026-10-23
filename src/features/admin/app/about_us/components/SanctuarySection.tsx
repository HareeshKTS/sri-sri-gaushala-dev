import type { UseFormReturn } from "react-hook-form";
import type { AboutUsFormData } from "../Types";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { Trash, Upload } from "lucide-react";
import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";
import { Switch } from "@/components/ui/switch";
import FilesUpload from "@/shared/FilesUpload";

interface Props {
    form: UseFormReturn<AboutUsFormData>;
}
interface SelectedFile {
    file: File;
    preview: string;
}


const SanctuarySection = ({ form }: Props) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
    const [isSanctuaryEnabled, setIsSanctuaryEnabled] = useState(true);
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


    // const { getRootProps, getInputProps } = useDropzone({
    //     onDrop,
    //     multiple: false,
    //     accept: {
    //         'image/*': [],
    //     }
    // });

    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (selectedFiles[0]?.preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };

    const selectedFile = selectedFiles[0];
    return (
        <section className="px-2 sm:px-6  border-b border-b-[#D4DFD5] pb-6 md:pb-0">
            <div className="w-full md:flex gap-6">
                <div className="pt-3 md:w-[30%] xl:w-[35%]">
                    <Switch
                        checked={isSanctuaryEnabled}
                        onCheckedChange={setIsSanctuaryEnabled}
                        className="mb-4 cursor-pointer opacity-100" />
                </div>
                <div className="border-r  border-[#D4DFD5]" />
                <div className="w-[70%]">

                </div>
            </div>

            <div className={`w-full md:flex gap-6 ${!isSanctuaryEnabled
                ? "opacity-70"
                : ""
                }`}>
                <div className="md:w-[30%] xl:w-[35%] relative py-6">



                    <label className="mb-2 block text-sm font-medium">
                        Sanctuary Section Image/Video
                    </label>

                    {/* <div
                        {...getRootProps()}
                        className={`relative ${selectedFile ? 'border-none' : 'shadow-lg rounded-md border-none'} 
                        rounded-lg w-full 
                             bg-white h-[200px] min-h-50 max-h-[200px]  cursor-pointer overflow-hidden flex`}
                    >
                        <input {...getInputProps()} disabled={!isSanctuaryEnabled} />

                        {selectedFile ? (
                            <>
                                <div className="flex-1">
                                    <img
                                        src={selectedFile.preview}
                                        alt={selectedFile.file.name}
                                        className="w-full h-full object-contain rounded-md"
                                    />
                                </div>
                            </>
                        ) : (
                            <div className=" flex-1 flex flex-col gap-1 items-center border justify-center font-gotham leading-snug border-none">
                                <Upload size={40} color="#2e7d32" />
                                <span className="font-medium text-[clamp(15px,1vm,0.8rem)] text-green-theme">
                                    Click To Browse
                                </span>
                                <span className="text-[#aaaaaa] text-xs text-center px-2 font-normal">Recommended Dimensions: 1080 × 1920 px Maximum Video Size: 30 MB</span>
                            </div>
                        )}

                    </div>
                    {
                        selectedFile && (
                            <button
                                type="button"
                                onClick={handleRemove}
                                disabled={!isSanctuaryEnabled}
                                className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
                                 w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
                                  hover:bg-red-600 transition-colors cursor-pointer shadow-lg"
                            >
                                <Trash size={20} />
                            </button>
                        )
                    } */}

                    <div className="relative w-full min-h-40 max-h-52 h-52">
                        <FilesUpload
                            onFilesAccepted={onDrop}
                            maxFiles={1}
                            disabled={!isSanctuaryEnabled}
                            FileClassName="flex flex-col gap-1 items-center justify-center"
                            fileText="Click To Browse"
                            dimensionText="Recommended Dimensions: 1080 × 1920 px Maximum Video Size: 30 MB"
                            className={`bg-white shadow-lg border-none px-2 ${!isSanctuaryEnabled
                                    ? "pointer-events-none opacity-50 cursor-not-allowed "
                                    : selectedFile
                                        ? "border-none"
                                        : "border-none! bg-white rounded-lg"
                                }`}
                            hasFiles={!!selectedFile}
                            acceptFiles={{
                                "image/jpeg": [".jpg", ".jpeg"],
                                "image/png": [".png"],
                                "image/webp": [".webp"],
                                "video/mp4": [".mp4"],
                                "video/webm": [".webm"],
                                "video/quicktime": [".mov"],
                            }}
                        />

                        {selectedFile && (
                            <>
                                <div className="absolute inset-0 pointer-events-none">
                                    {selectedFile.file.type.startsWith("video/") ? (
                                        <video
                                            src={selectedFile.preview}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={selectedFile.preview}
                                            alt={selectedFile.file.name}
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleRemove}
                                    disabled={!isSanctuaryEnabled}
                                    className="absolute top-1/2 -right-4 -translate-y-1/2 disabled:cursor-not-allowed
          w-8 h-8 rounded-full text-white flex items-center
          justify-center bg-red-600 hover:bg-red-700
          transition-colors cursor-pointer shadow-lg"
                                >
                                    <Trash size={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="border-r border-[#D4DFD5]" />

                <div className="md:w-[70%] space-y-4">
                     <div className="flex gap-6">
                    <div className="w-full">
                        {/* <label className="text-sm font-medium">
            CTA Button Text
          </label>

          <input
            {...form.register("sanctuary.ctaText")}
            className="w-full rounded-md border p-2"
          /> */}
                        <FormInputField
                            label="CTA Button Text"
                            name="sanctuaryCtaText"
                            placeholder="Visit Us"
                            disabled={!isSanctuaryEnabled}
                            LabelClassName="font-medium text-sm font-saira!"
                            className="border-[#2e7d32] disabled:cursor-not-allowed"
                            control={form.control}
                            rules={{
                                required: isSanctuaryEnabled ? "Required" : false,
                            }}
                        />
                    </div>

                    <div className="w-full">
                        {/* <label className="text-sm font-medium">
                        CTA Button URL
                    </label>

                    <input
                        {...form.register("sanctuary.ctaUrl")}
                        className="w-full rounded-md border p-2"
                    /> */}
                        <FormInputField
                            label="CTA Button URL"
                            name="sanctuaryCtaUrl"
                            placeholder="https://srisrigaushala.org/visit-us/"
                            LabelClassName="font-medium text-sm font-saira!"
                            disabled={!isSanctuaryEnabled}
                            InputClassName="disabled:cursor-not-allowed"
                            className="border-[#2e7d32] disabled:cursor-not-allowed"
                            control={form.control}
                            rules={{
                                required: isSanctuaryEnabled ? "Required" : false,
                            }}
                        />
                    </div>
                    </div>

                    <div className="col-span-2">
                        {/* <label className="text-sm font-medium">
                        Sanctuary Section Heading
                    </label>

                    <textarea
                        {...form.register("sanctuary.heading")}
                        className="w-full rounded-md border p-2"
                        rows={3}
                    /> */}
                        <FormTextArea
                            name="sanctuaryHeading"
                            control={form.control}
                            label="Sanctuary Section Heading"
                            LabelClassName="font-medium text-sm"
                            disabled={!isSanctuaryEnabled}
                            placeholder="A Sanctuary of Compassion, Culture and Care"
                            className="min-h-36!"
                            rules={{
                                required: isSanctuaryEnabled ? "Required" : false,
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SanctuarySection;