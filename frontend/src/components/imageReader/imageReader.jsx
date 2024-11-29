import "./css/imageReader.css";
import Share from "../share/share";
import { useState } from "react";


function ImageReader({ image, theme }) {
    const [flag_Share, setflags_Share] = useState(false);

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

    const handle_share = () => {
        setflags_Share(!flag_Share);
    }

    const close_share = () => {
        setflags_Share(false);
    }


    return (
        <>
            <div id="container_image_reader" className={theme === 'dark'? "container_image_dark": ""}>
                <div id="drag_and_drop">
                    <img id="image_file" src={image} alt="image" />
                </div>
                <div className="links">
                    <button onClick={handle_share}><img src="src\assets\Link.svg" alt="share image" />Share</button>
                    {flag_Share && <Share theme={theme} image={image} handle_close={close_share}/>}
                    {/* <a href={image} target="_blank" rel="noreferrer"><img src="src\assets\Link.svg" alt="share image" />Share</a> */}
                    <button onClick={handle_download}><img src="src\assets\download.svg" alt="dowload image" />Download</button>
                </div>
            </div>
        </>
    )
}

export default ImageReader;