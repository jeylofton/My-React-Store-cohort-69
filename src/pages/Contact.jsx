import { IconPhone, IconBuilding, IconWorldWww } from "@tabler/icons-react"

function Contact() {
    return (
        <div>
            <div>
                <h1>Welcome to my Contact Us</h1>
                <div className="d-flex justify-content-center gap-2">
                    <IconBuilding />
                    <p>Address: Avenida Balboa, Bella Vista</p>
                    <p>Panamá City, Panamá</p>
                </div>

                <div className="d-flex justify-content-center gap-2">
                    <IconPhone />
                    <p>+507 6505 6898</p>
                </div>
                <div className="d-flex justify-content-center gap-2">
                    <IconWorldWww />
                    <p>www.onlinestore.store</p>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;