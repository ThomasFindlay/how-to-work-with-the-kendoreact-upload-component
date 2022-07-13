export const getTotalFilesSizeMessage = files => {
  let totalSize = 0;
  let i;
  if (typeof files[0].size === "number") {
    for (i = 0; i < files.length; i++) {
      if (files[i].size) {
        totalSize += files[i].size || 0;
      }
    }
  } else {
    return "";
  }
  totalSize /= 1024;
  if (totalSize < 1024) {
    return totalSize.toFixed(2) + " KB";
  } else {
    return (totalSize / 1024).toFixed(2) + " MB";
  }
};
