import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios'


class SubmitPicture extends Component {
    state = {
        files: []
    }

    getFiles(files) {
        this.setState({ files: files })
        const imageObj = {
            imageName: "base-image-" + Date.now(),
            imageData: this.state.files[0].base64.toString()
        };
        console.log(imageObj)
        axios.post('http://localhost:4000/app/submitPicture', imageObj).then(response => console.log(response.data))
    }

    render() {
        return (
            <FileBase64
                multiple={true}
                onDone={this.getFiles.bind(this)} />
        )
    }
}

export default SubmitPicture;