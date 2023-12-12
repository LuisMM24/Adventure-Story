type ReaderServiceParams = {
  file: File;
  onload: (event: ProgressEvent<FileReader>) => void;
};

export const ReaderService = ({ file, onload }: ReaderServiceParams) => {
  const reader = new FileReader();

  reader.onload = onload;

  reader.readAsDataURL(file);
};
