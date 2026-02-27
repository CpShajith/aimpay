import { ContactForm } from "./ContactForm";

export function ContactPage() {
    return (
        <div className="pt-24 pb-12 w-full">
            {/* 
        The ContactForm component acts like a standalone page taking up full viewport height. 
        We pass a no-op function to onBack since we handle navigation via React Router now.
      */}
            <ContactForm onBack={() => { }} />
        </div>
    );
}
