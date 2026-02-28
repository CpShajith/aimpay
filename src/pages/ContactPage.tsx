import { ContactForm } from "./ContactForm";
import { useNavigate } from "react-router";

export function ContactPage() {
    const navigate = useNavigate();
    return (
        <div className="pt-24 pb-12 w-full">
            <ContactForm onBack={() => navigate('/')} />
        </div>
    );
}
