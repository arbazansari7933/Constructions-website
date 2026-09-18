# Ejaz Constructions — Website

React + Vite + Tailwind CSS website for Ejaz Constructions, a family-owned
construction company in Raza Bazaar, Kolkata.

## Getting started

```
npm install
npm run dev
```

Build for production:

```
npm run build
```

## Replacing placeholder content

All editable content lives in `src/data/`:

- `content.js` — phone, WhatsApp, email, stats, process steps, why-choose-us,
  testimonials, form options, nav links
- `services.js` — service list and the foundation-to-finish journey steps
- `projects.js` — project portfolio entries and areas served
- `legacy.js` — the four family generations (name, role, note, photo)

Search the project for `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`,
`[XX]+`, `[ADD ...]` and similar bracketed placeholders — these mark every
value that still needs real business information.

## Replacing placeholder graphics

The hero, about, legacy, locations, and project sections currently use
original SVG illustrations in place of real photography (no stock or
copyrighted images were used). Drop real photographs into
`src/assets/images/` and swap them in as you provide them — the legacy
section in particular is built to take one portrait photo per family member.

## Wiring up the contact form

`src/components/Contact.jsx` currently logs form submissions to the console.
Connect the `onSubmit` handler to your preferred destination (an email
service like Formspree/Resend, a CRM, or a backend endpoint) before going
live.
"# Constructions-website" 
