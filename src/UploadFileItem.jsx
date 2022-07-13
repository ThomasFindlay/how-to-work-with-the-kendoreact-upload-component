import { UploadFileStatus } from "@progress/kendo-react-upload";
import { useEffect, useState } from "react";
import { getTotalFilesSizeMessage } from "./getTotalFilesSizeMessage";
import { getFileExtensionIcon } from "./getFileExtensionIcon";

const errors = {
  invalidFileExtension: "This file type is not supported.",
  invalidMaxFileSize: "This file is too big.",
  invalidMinFileSize: "This file is too small.",
  uploadFailed: "File(s) failed to upload.",
};

const getFileError = file => {
  if (file.status === UploadFileStatus.UploadFailed) {
    return errors.uploadFailed;
  }

  if (file.validationErrors && file.validationErrors.length) {
    return errors[file.validationErrors[0]];
  }

  return "";
};

const UploadedFileItem = props => {
  const { files, onRetry, onRemove } = props;
  const [preview, setPreview] = useState(null);
  const file = files?.[0];
  const { status } = file;
  const isProgressVisible = status === UploadFileStatus.Uploading;
  const isValidationError =
    file.validationErrors && file.validationErrors.length;
  const isUploadError = status === UploadFileStatus.UploadFailed;
  const isActionVisible =
    isValidationError ||
    [
      UploadFileStatus.Uploaded,
      UploadFileStatus.Initial,
      UploadFileStatus.UploadFailed,
    ].includes(status);

  useEffect(() => {
    if (![".jpg", ".jpeg", ".png"].includes(file.extension)) return;
    const rawFile = file.getRawFile();
    // Create a preview of an image when the upload
    const reader = new FileReader();
    const onLoad = e => {
      setPreview(e.target.result);
    };

    reader.addEventListener("load", onLoad);
    reader.readAsDataURL(rawFile);
    return () => {
      reader.removeEventListener("load", onLoad);
    };
  }, [status, file]);

  return (
    <>
      <div className="k-file-single">
        <span className="k-file-group-wrapper">
          {preview ? (
            <span className="k-file-group">
              <img
                style={{ maxWidth: "32px", display: "block" }}
                src={preview}
                alt={`${file.name} preview image`}
              />
            </span>
          ) : (
            <span
              className={`k-file-group k-icon ${getFileExtensionIcon(file)}`}
            ></span>
          )}
        </span>
        <span className="k-file-name-size-wrapper">
          {isUploadError || isValidationError ? (
            <>
              <div className="k-file-name k-file-name-invalid">{file.name}</div>
              <div className="k-file-validation-message k-text-error">
                {getFileError(file)}
              </div>
            </>
          ) : (
            <>
              <span className="k-file-name">{file.name}</span>
              <span className="k-file-size">
                {getTotalFilesSizeMessage([file])}
              </span>
            </>
          )}
        </span>
      </div>
      <strong className="k-upload-status k-d-flex k-align-self-center">
        {isProgressVisible ? (
          <span className="k-upload-pct">{file.progress}%</span>
        ) : null}
        {isUploadError ? (
          <button
            type="button"
            className="k-button k-button-icon k-flat k-upload-action"
            onClick={() => onRetry(file.uid)}
          >
            <span className="k-icon k-retry k-i-refresh-sm" />
          </button>
        ) : null}
        {isActionVisible ? (
          <button
            type="button"
            className="k-button k-button-icon k-flat k-upload-action"
            onClick={() => onRemove(file.uid)}
          >
            <span className="k-icon k-delete k-i-x" />
          </button>
        ) : null}
      </strong>
    </>
  );
};

export default UploadedFileItem;
