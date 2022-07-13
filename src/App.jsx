import "./App.css";
import { Upload } from "@progress/kendo-react-upload";
import UploadFileItem from "./UploadFileItem";

const saveUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/save";
const removeUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/remove";

function App() {
  return (
    <div className="App">
      <Upload
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={saveUrl}
        removeUrl={removeUrl}
        restrictions={{
          minFileSize: 1000,
          maxFileSize: 10000000,
          allowedExtensions: [".jpg", ".png"],
        }}
        listItemUI={UploadFileItem}
      />
    </div>
  );
}

export default App;
