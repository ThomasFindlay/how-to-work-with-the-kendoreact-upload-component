export const getFileExtensionIcon = file => {
  switch (file.extension) {
    case ".png":
    case ".jpg":
    case ".jpeg":
    case ".tiff":
    case ".bmp":
    case ".gif":
      return "k-i-file-image";
    case ".mp3":
    case ".mp4":
    case ".wav":
      return "k-i-file-audio";
    case ".mkv":
    case ".webm":
    case ".flv":
    case ".gifv":
    case ".avi":
    case ".wmv":
      return "k-i-file-video";
    case ".txt":
      return "k-i-file-txt";
    case ".pdf":
      return "k-i-file-pdf";
    case ".ppt":
    case ".pptx":
      return "k-i-file-presentation";
    case ".csv":
    case ".xls":
    case ".xlsx":
      return "k-i-file-data";
    case ".html":
    case ".css":
    case ".js":
    case ".ts":
      return "k-i-file-programming";
    case ".exe":
      return "k-i-file-config";
    case ".zip":
    case ".rar":
      return "k-i-file-zip";
    default:
      return "k-i-file";
  }
};
