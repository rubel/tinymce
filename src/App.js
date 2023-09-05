import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    return (
      <div style={{ maxWidth: "1024px" }}>
        <Editor
          initialValue="<p>Easy House</p>"
          apiKey={"gpzgmxikedjso2sz048tl7uoyt0o987m9soewpdxrnd7d4xl"}
          init={{
            plugins: "link image code",
            branding: false,
            menubar: false,
            toolbar:
              "undo redo | styles | bold italic underline | link image | fontsize forecolor paste | alignleft aligncenter alignright | removeformat | help",

            toolbar_mode: "floating",
          }}
          onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default App;
