import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;