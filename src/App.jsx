import "./App.css";
import { Upload } from "@progress/kendo-react-upload";

const saveUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/save";
const removeUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/remove";

const UploadedFileItem = props => {
  console.log("props", props);
  return (
    <ul>
      {props.files.map(file => (
        <li key={file.name}>{file.name}</li>
      ))}
    </ul>
  );
};

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
        listItemUI={UploadedFileItem}
      />
    </div>
  );
}

export default App;
