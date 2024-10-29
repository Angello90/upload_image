import "./css/DragAndDrop.css";


function DragAndDrop() {
    return (
        <div id="drag_and_drop">
            <div id="drop_zone">
                <div className="section_text_upload">
                    <img src="src\assets\exit.svg" alt="exit"/>
                    <p>Drag & drop a file or <input type="file" name="browse_files" id="browse_files" /><button id="browse_files">browse files</button></p>
                    <p>JPG, PNG or GIF - Max file size 2MB</p>
                </div>
            </div>
        </div>
    );
}


export default DragAndDrop;