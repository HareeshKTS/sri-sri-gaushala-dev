import type { UseFormReturn } from "react-hook-form";
import type { AboutUsFormData } from "../Types";
import { useCallback, useState } from "react";
import { Trash } from "lucide-react";

import { FormInputField, FormTextArea } from "@/shared/custom_form_components/FormFields";

import FilesUpload from "@/shared/FilesUpload";
import { ShowToast } from "@/shared/ShowToast";
interface Props {
    form: UseFormReturn<AboutUsFormData>;
}

interface SelectedFile {
    file: File;
    preview: string;
}

const AboutUsBanner = ({ form }: Props) => {
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
   
const onDrop = useCallback(
  (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      if (image.width !== 1080 || image.height !== 1920) {
       ShowToast(`${file.name} must be exactly 1080 × 1920 px`, 'error')

        URL.revokeObjectURL(objectUrl);
        return;
      }

      const newFile: SelectedFile = {
        file,
        preview: objectUrl,
      };

      if (selectedFiles[0]?.preview) {
        URL.revokeObjectURL(selectedFiles[0].preview);
      }

      setSelectedFiles([newFile]);
    };

    image.onerror = () => {
      ShowToast("Unable to read the image. Please upload a valid image.", "error");
      URL.revokeObjectURL(objectUrl);
    };

    image.src = objectUrl;
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
        <section className="md:flex gap-6 px-2 sm:px-6  border-b border-b-[#D4DFD5] pb-3 md:pb-0">

            {/* Banner image */}
            <div className="relative md:w-[30%] py-6">
                <label className="mb-2 block text-sm font-medium">
                    About Us Banner Image
                </label>

                 <div className="relative w-full  min-h-40 max-h-40 h-40">
                        <FilesUpload
                            onFilesAccepted={onDrop}
                            maxFiles={1}
                            FileClassName="flex flex-col gap-1 items-center justify-center"
                            fileText="Click To Browse"
                            dimensionText="Dimension 1080px X 1920px"
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
                <div className="space-y-2 pt-3">
                    <FormTextArea
                        name="bannerQuote"
                        control={form.control}
                        label="Banner Quote"
                        placeholder="Enter Quote"
                        rules={{ required: "Required" }}
                    />
                </div>
            </div>
          <div className="border-r border-[#D4DFD5]"/>
            {/* Right side */}
            <div className="flex flex-col gap-y-3 sm:grid grid-cols-2  gap-6 lg:col-span-2 md:w-[70%]">

                {/* <div>
                    <label className="text-sm font-medium">
                        Section Title
                    </label>

                    <input
                        {...form.register("aboutUs.sectionTitle")}
                        className="w-full rounded-md border p-2"
                    />
                </div> */}
                <FormInputField
                    label="Section Title"
                    name="sectionTitle"
                    placeholder="Who we are"
                    LabelClassName="font-medium text-sm font-saira!"
                    className="border-[#2e7d32]"
                    control={form.control}
                    rules={{ required: "required" }}
                />

                {/* <div>
                    <label className="text-sm font-medium">
                        Main Heading
                    </label>

                    <input
                        {...form.register("aboutUs.mainHeading")}
                        className="w-full rounded-md border p-2"
                    />
                </div> */}

                <FormInputField
                    label="Main heading"
                    name="mainHeading"
                    placeholder="Where Every Cow is Family, Every Life is Sacred"
                    LabelClassName="font-medium text-sm font-saira!"
                    className="border-green-theme"
                    control={form.control}
                    rules={{ required: "required" }}
                />

                <div className="col-span-2">
                    {/* <label className="text-sm font-medium">
                        About Us Description
                    </label>

                    <textarea
                        {...form.register("aboutUs.description")}
                        className="w-full rounded-md border p-2"
                        rows={4}
                    /> */}
                    <FormTextArea
                        name="aboutUsDescription"
                        control={form.control}
                        label="About Us Description"
                        LabelClassName="font-medium text-sm"
                        placeholder="Enter description"
                        rules={{ required: "Required" }}
                    />
                </div>

                <div className="col-span-2">
                    {/* <label className="text-sm font-medium">
                        About Us Quote
                    </label>

                    <input
                        {...form.register("aboutUs.quote")}
                        className="w-full rounded-md border p-2"
                    /> */}
                    <FormInputField
                        label="About Us Quote"
                        name="aboutUsQuote"
                        placeholder="Enter quote"
                        LabelClassName="font-medium font-saira! text-sm"

                        control={form.control}
                        rules={{ required: "required" }}
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutUsBanner;