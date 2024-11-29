import { useEffect, useState } from 'react';
import "./css/DragAndDrop.css";

function DragAndDrop({ ondrop, theme}) {
    const [isDragOver, setIsDragOver] = useState(false);

    const ondragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const ondragenter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
        console.log('drag enter');
    };

    const ondragexit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
        console.log('drag exit');
    };

    const ondragleave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
        console.log('drag leave');
    };

    const handleDrop = (e) => {
        ondrop(e);
        setIsDragOver(false);
    };

    return (
        <div id="drag_and_drop" className={theme === 'dark'? "drag_dark" : ""}>
            <div
                className={isDragOver === true ? "IsHovered" : ""}
                id="drop_zone"
                onDrop={handleDrop}
                onDragOver={ondragover}
                onDragEnter={ondragenter}
                onDragLeave={ondragleave}
                onDragExit={ondragexit}
            >
                <div className="section_text_upload">
                    <img id='image_exit' src="src/assets/exit.svg" alt="exit" />
                    <p id="title_of_this">Drag & drop a file or <input type="file" accept="image/png, image/jpeg, image/gif" name="browse_files" id="browse_files" style={{ display: 'none' }} /><label htmlFor="browse_files" id="browse_files">browse files</label></p>
                    <p id="format">JPG, PNG or GIF - Max file size 2MB</p>
                </div>
            </div>
        </div>
    );
}

export default DragAndDrop;
