function Footer() {
    const fName = "Irina";
    const currentYear = new Date().getFullYear();

    return(
        <div>
            <p>Created by {fName}.</p>
            <p>Copyright {currentYear}</p>
        </div>
    )
}
export default Footer;