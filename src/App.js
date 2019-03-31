import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import mammoth from 'mammoth'
import axios from 'axios'
import './App.css'

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
  async onFileRead(arrayBuffer) {
    const { value: text } = await mammoth.extractRawText({ arrayBuffer })
    const { data } = await axios({
      headers,
      url,
      method: 'post',
      data: text,
    })

    console.log(data)
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
    );
  }
}
