import Compressor from "compressorjs";

type CompressFunctionParams = {
  onSuccess: (compressedFile: File | Blob) => void;
  onError: (error: Error) => void;
};

export const CompressorService = (file: File) => {
  const compressorParams = {
    quality: 0.2,
    convertSize: 5,
  };

  return {
    compress: ({ onSuccess, onError }: CompressFunctionParams) => {
      new Compressor(file, {
        quality: compressorParams.quality,
        convertSize: compressorParams.convertSize,
        success(compressedFile) {
          onSuccess(compressedFile);
        },
        error(err: Error) {
          onError(err);
        },
      });
    },
  };
};
