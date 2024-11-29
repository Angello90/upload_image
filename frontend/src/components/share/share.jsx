import "./css/share.css";



function Share({ theme, image, handle_close}) {
    const copyLink = () => {
        navigator.clipboard.writeText(image);
    }

    const shareLink = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Share Image',
                text: 'Check out this image',
                url: image,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            console.log('Web Share API not supported.');
        }
    }

    const openInBrowser = () => {
        window.open(image);
    }

    return (
        <>
            <div className="blur_share">
                <div className="container_share">
                    <nav className="nav_bar_share">
                        <button id="close_bp_share" onClick={handle_close}><img width="20" height="20" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/></button>
                    </nav>
                    <div className="share_options">
                        <button onClick={copyLink}>Copy Link</button>
                        <button onClick={openInBrowser}>Open Browser</button>
                        <button onClick={shareLink}>Share Link</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Share;