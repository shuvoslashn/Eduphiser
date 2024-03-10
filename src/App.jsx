import Stripe from "./components/Stripe";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Banner from "./components/sections/Banner";
import ContactBoxes from "./components/sections/ContactBoxes";
import ContactFormSection from "./components/sections/ContactFormSection";

export default function App() {
    return (
        <>
            <Header />

            <Banner />
            <ContactBoxes />
            <Stripe />
            <ContactFormSection />
            <Footer />
        </>
    );
}
