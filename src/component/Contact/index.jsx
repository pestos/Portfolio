import React, { useState } from "react";
import "./Contact.scss";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Ce champ est requis.";
        tempErrors.email = formData.email ? "" : "Ce champ est requis.";
        tempErrors.subject = formData.subject ? "" : "Ce champ est requis.";
        tempErrors.message = formData.message ? "" : "Ce champ est requis.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).every((key) => !tempErrors[key]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Formulaire soumis avec succès!");
            // Ajouter le code de soumission du formulaire ici (e.g., appel API)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <h3>{errors.name}</h3>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <h3>{errors.email}</h3>}
            </div>
            <div>
                <label>Sujet</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                {errors.subject && <h3>{errors.subject}</h3>}
            </div>
            <div className="send">
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <h3>{errors.message}</h3>}
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
