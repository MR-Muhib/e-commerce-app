import React from "react";
import ContactBanner from "../components/contactPage/ContactBanner";
import ContactHeader from "../components/contactPage/ContactHeader";
import ContactLocation from "../components/contactPage/ContactLocation";
import ContactForm from "../components/contactPage/ContactForm";
import IntroduceApplication from "../components/IntroducApplication/IntroduceApplication";

export default function page() {
  return (
    <div className="p-5">
      <ContactBanner />
      <ContactHeader />

      <div className="md:flex justify-around gap-4 my-12">
        <ContactLocation />
        <ContactForm />
      </div>
      <IntroduceApplication />
    </div>
  );
}
