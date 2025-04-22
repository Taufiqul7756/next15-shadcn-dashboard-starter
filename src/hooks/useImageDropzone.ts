import { useDropzone } from "react-dropzone";
import { UseFormReturn } from "react-hook-form";

interface ImageFormData {
  [key: string]: {
    image: File;
  };
}

export const useImageDropzone = (
  setImages: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>,
  form: UseFormReturn<ImageFormData>,
  fieldName: string,
  index: number
) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setImages((prev) => ({
          ...prev,
          [index]: URL.createObjectURL(file),
        }));
        form.setValue(`${fieldName}[${index}].image`, file);
      }
    },
  });

  return { getRootProps, getInputProps };
};
