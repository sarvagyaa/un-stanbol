import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import mammoth from 'mammoth'
import axios from 'axios'
import './App.css'
import JSONTree from 'react-json-tree'

const url = `http://wit.istc.cnr.it:9090/enhancer`
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
    this.state = {data: null}
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
    this.setState({data})
  }

  getDocData(acceptedFiles) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(acceptedFiles[0]);
    reader.onload = ({ target: { result: arrayBuffer } }) => {
      this.onFileRead(arrayBuffer)
    } 
  }

  render() {
    const {data} = this.state
    const onData = (
      <div>
        <JSONTree data={data} theme={theme} invertTheme={false} hideRoot={true}/>
        <h3>Raw output: </h3>
        <textarea className='rawDataArea'>{JSON.stringify(data, null, 2)}</textarea>
      </div>)
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
          {data && onData}
        </div>
      </div>
    );
  }
}

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
