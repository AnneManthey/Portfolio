# Desk


- Textinhalte
- Allgemeines Layout
    - Padding/Randbegrenzung gleich?
        - 50px 95px
        - ab 750: 50px 30px
        - ab 450: 50px 16px (8?)



- Responsive 
    
        

# Server Upload
- Subdomains anlegen 
    - Projekte hochladen
- Contact mit PHP Emailfähig machen
    - Projektlinks verknüpfen

# Building Process

- Language Switch Logik
    - Mit Language-Switch Buttons verknüpfen
    - Text übersetzen





# Anforderungen

- Design exakt umgesetzt (mobile & desktop)
- Hero hat 100vh
- Bilder komprimiert (max. 500kb)
    - Bilder nicht verzerrt (object-fit: cover oder contain)
- Language-Switch über Button / Textübersetzung deutsch & englisch, sprachlich gechecked (deepl/grammarly)
    - Echte Texte
- Projekte verlinkt, auf Subdomain des Servers verfügbar
    - lassen sich testen, laufen fehlerfrei
- Links sind verknüpft
- eigene Domain
    - SSL-Zertifikat (https)
    - Favicon & Seitentitel angepasst
- Kontaktformular
    - Formvalidierung erst beim verlassen des Feldes, nicht bei Texteingabe
    - keine Layoutverschiebung
    - Senden-Btn nur aktiv, wenn alles ausgefüllt ist
    - Browser-vervollständigung beeinträchtigt nicht das design(webkit)
    - Feedback nach Versand wird angezeigt (erfolg/error)
- Datenschutzerklärung & Impressum
- Seiten sind responsive und auf allgen Geräten gut lesbar