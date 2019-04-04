import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import mammoth from 'mammoth'
import axios from 'axios'
import './App.css'
import { Editor, EditorState, ContentState } from 'draft-js'

const url = 'http://localhost:8082/enhancer'
const headers = {
  Accept: 'application/json',
  'Content-type': 'text/plain',
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-body'>
          <h1>Wrapped stanbol</h1>
          <MyDropzone />
        </div>
      </div>
    );
  }
}

export default App;

class MyDropzone extends Component {

  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  async onFileRead(arrayBuffer) {
    const { value: text } = await mammoth.extractRawText({ arrayBuffer })
    const { data } = await axios({
      headers,
      url,
      method: 'post',
      data: text,
    })

    console.log(data)
    this.setState({
      editorState: EditorState.createWithContent(ContentState.createFromText(JSON.stringify(data)))
      // editorState: EditorState.createWithContent(ContentState.createFromText('JSON.stringify(data)'))
    })
  }

  getDocData(acceptedFiles) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(acceptedFiles[0]);
    reader.onload = ({ target: { result: arrayBuffer } }) => {
      this.onFileRead(arrayBuffer)
    } 
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={acceptedFiles => this.getDocData(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop docx file here, or click to select a file</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div>
          <h2>Enhanced data: </h2>
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
