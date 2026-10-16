import { Upload } from "lucide-react";
import { useDropzone, type Accept } from "react-dropzone";

type FilesUploadProps = {
    onFilesAccepted: (files: File[]) => void;
    acceptFiles?: Accept;
    multiple?: boolean;
    maxFiles?: number;
    className?: string;
    dimensionText?: string;
    hasFiles?: boolean;
    fileText?: string;
    FileClassName?: string;
    customText?: string;
    disabled?: boolean; // Add this
}


const FilesUpload: React.FC<FilesUploadProps> = ({
    onFilesAccepted,
    acceptFiles,
    multiple = true,
    maxFiles,
    className = "",
    fileText = "",
    dimensionText = "Dimension 1080px X 1920px",
    hasFiles = false,
    FileClassName = "",
    customText = "",
    disabled = false,
}) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: acceptFiles,
        multiple,
        maxFiles, 
        disabled,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length === 0) return;
            onFilesAccepted(acceptedFiles);
        },
    });

    return (
        <div
            {...getRootProps()}
            className={`
                relative
                rounded-lg
                w-full
                h-full
                bg-[#f2f2f2]
                cursor-pointer
                overflow-hidden
                flex
                border-2
                border-dashed
                border-[#4caf50]
                ${isDragActive ? "bg-green-100" : ""}
                  ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${className}
            `}
        >
            <input {...getInputProps()} />

            {
                !hasFiles && (
                    <div className={`flex-1  font-gotham leading-snug ${FileClassName}`}>
                        <div className="flex flex-col items-center gap-2">
                            <Upload
                                size={40}
                                color="#2e7d32"
                                strokeWidth={1.5} 
                            />
                            <span className="font-semibold text-[clamp(14px,1vw,0.8rem)] font-gotham text-green-theme text-nowrap">
                                {isDragActive
                                    ? "Drop Images Here"
                                    : `${fileText}`}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            {
                                customText && (
                                    <span className="font-semibold text-[clamp(13px,1vw,0.8rem)] text-green-theme">
                                        {`${customText}`}
                                    </span>
                                )
                            }
                            <span className="text-[#aaaaaa] text-xs font-normal">
                                {dimensionText}
                            </span>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default FilesUpload;
