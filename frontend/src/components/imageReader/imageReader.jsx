import "./css/imageReader.css";


function ImageReader({ image, theme }) {
    const handle_download = async () => {
        try {
            const name = new URL(image).pathname.split("/").pop();
            const response = await fetch(image, {
                method: "GET",
                headers: {
                    "Content-Type": "image/jpeg",
                },
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", name); // Nom du fichier téléchargé
            document.body.appendChild(link);
            link.click();

            // Nettoyage
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Erreur lors du téléchargement de l'image:", error);
        }
    }
    return (
        <>
            <div id="container_image_reader" className={theme === 'dark'? "container_image_dark": ""}>
                <div id="drag_and_drop">
                    <img id="image_file" src={image} alt="image" />
                </div>
                <div className="links">
                    <a href={image} target="_blank" rel="noreferrer"><img src="src\assets\Link.svg" alt="share image" />Share</a>
                    <button onClick={handle_download}><img src="src\assets\download.svg" alt="dowload image" />Download</button>
                </div>
            </div>
        </>
    )
}

export default ImageReader;