// import React, { useCallback, useState } from 'react'
// import { useDropzone } from "react-dropzone"
// import { Trash, Upload } from "lucide-react";
// import { CustomInput } from '@/shared/CustomInput';
// import { useForm } from 'react-hook-form';
// import type { MainFormValues } from '../Types';
// import { FormTextArea } from '@/shared/custom_form_components/FormFields';

// interface SelectedFile {
//     file: File;
//     preview: string;
// }

// function AboutUsForm() {
//       const { control, trigger, handleSubmit } = useForm<MainFormValues>({
//             defaultValues: {
               
//                 banner_quote: '',
//                 quote_two: '',
//                 pure_indian_breeds: "",
//                 dedicated_gausewaks: "",
//                 hectares_of_grazing_land: "",
//                 indigenous_cows: "",
//                 years_of_service: ""
//             },
//             mode: "onChange"
//         })
//         const handleHomeData = async (data: MainFormValues) => {
//             const isValid = await trigger();
//             if (!isValid) return;
//             const payload = {
               
//                 banner_quote: data.banner_quote,
//                 quote_two: data.quote_two,
//                 pure_indian_breeds: data.pure_indian_breeds,
//                 dedicated_gausewaks: data.dedicated_gausewaks,
//                 hectares_of_grazing_land: data.hectares_of_grazing_land,
//                 indigenous_cows: data.indigenous_cows,
//                 years_of_service: data.years_of_service,
//             }
//             console.log(payload, 'payload');
//         }
//        const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);

//     const onDrop = useCallback(
//         (acceptedFiles: File[]) => {
//             if (acceptedFiles.length === 0) return;
//             const file = acceptedFiles[0];
//             const newFile: SelectedFile = {
//                 file,
//                 preview: URL.createObjectURL(file),
//             };
//             if (selectedFiles[0]?.preview) {
//                 URL.revokeObjectURL(selectedFiles[0].preview);
//             }
//             setSelectedFiles([newFile]);
//         },
//         [selectedFiles]
//     );


//     const { getRootProps, getInputProps } = useDropzone({
//         onDrop,
//         multiple: false,
//         accept: {
//             'image/*': [],
//         }
//     });

//     const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.stopPropagation();
//         if (selectedFiles[0]?.preview) {
//             URL.revokeObjectURL(selectedFiles[0].preview);
//         }
//         setSelectedFiles([]);
//     };

//     const selectedFile = selectedFiles[0];
//   return (
//     <div className='flex'>
//     <div className="relative w-full lg:w-1/2">
//         <p className="text-[#000000] font-saira text-[clamp(16px,1.2vw,1rem)]! font-medium">About Us Banner Image</p>
//                 <div
//                     {...getRootProps()}
//                     className={`relative ${selectedFile ? 'border-none' : 'border-2! border-dashed border-green-theme'} 
//                         rounded-lg w-full h-full
//                              bg-[#f2f2f2]  cursor-pointer overflow-hidden flex`}
//                 >
//                     <input {...getInputProps()} />

//                     {selectedFile ? (
//                         <>
//                             <div className="flex-1">
//                                 <img
//                                     src={selectedFile.preview}
//                                     alt={selectedFile.file.name}
//                                     className="w-full h-full object-contain rounded-md"
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                         <div className=" flex-1 flex flex-col gap-1 items-center border justify-center font-gotham leading-snug">
//                             <Upload size={40} color="#2e7d32" />
//                             <span className="font-medium text-[clamp(15px,1vm,0.8rem)] text-green-theme">
//                                 Click To Browse
//                             </span>
//                             <span className="text-[#aaaaaa] text-xs font-normal">Dimension 1080px X 1920px</span>
//                         </div>
//                     )}

//                 </div>
//                 {
//                     selectedFile && (
//                         <button
//                             type="button"
//                             onClick={handleRemove}
//                             className="absolute top-1/2 -right-8 -translate-x-1/2 -translate-y-1/2
//                                  w-8 h-8 rounded-full  text-white flex items-center justify-center text-sm bg-red-600
//                                   hover:bg-red-600 transition-colors cursor-pointer shadow-lg"
//                         >
//                             <Trash size={20} />
//                         </button>
//                     )
//                 }
//                 {/* <CustomInput
                
//                 /> */}
//             </div>
//              <div className="flex flex-col gap-2  lg:pe-16!">
//                                 <FormTextArea
//                                     name="banner_quote"
//                                     control={control}
//                                     label="Banner Quote"
//                                     placeholder="Enter Quote"
//                                     rules={{ required: "required" }}
//                                 />
//                                 </div>
//                                 </div>
//   )
// }

// export default AboutUsForm