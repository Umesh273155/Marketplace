import React, { useEffect } from "react";
import "./GoogleTranslate.css";
import "./App.css";
import { Helmet } from "react-helmet";
const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      function googleTranslateElementInit() {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    `;

    const existingScript = document.getElementById("google-translate-script");
    if (existingScript) {
      existingScript.remove();
    }

    script.id = "google-translate-script";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async defer></script>
      </Helmet>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
