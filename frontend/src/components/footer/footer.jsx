import "./css/footer.css";



function Footer({theme}) {
    return (
        <footer>
            <div id="footer" className={theme === "dark"?"dark_footer": ""}>
                <p>© 2024 - All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer;