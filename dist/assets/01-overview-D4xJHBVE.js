import{p as r,j as e}from"./entry.client-CAKTKa86.js";const l=[{depth:1,text:"01 – Overview",id:"01--overview",children:[{depth:2,text:"Tech Stack",id:"tech-stack"},{depth:2,text:"Main Features",id:"main-features"},{depth:2,text:"High-Level Architecture",id:"high-level-architecture"},{depth:2,text:"Important Paths",id:"important-paths"}]}],d={lastModifiedTime:"2026-02-27T08:47:23.658Z"},c="pages/01-overview.md";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"01--overview",children:"01 – Overview"}),`
`,e.jsx(n.h2,{id:"tech-stack",children:"Tech Stack"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Layer"}),e.jsx(n.th,{children:"Technology"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Backend"})}),e.jsx(n.td,{children:"PHP 8.2+, Laravel 12"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Frontend"})}),e.jsx(n.td,{children:"Blade templates, Tailwind CSS, Vite 7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Database"})}),e.jsxs(n.td,{children:["SQLite (default) or MySQL/PostgreSQL via ",e.jsx(n.code,{inline:"true",children:".env"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Queue"})}),e.jsxs(n.td,{children:["Database driver (",e.jsx(n.code,{inline:"true",children:"QUEUE_CONNECTION=database"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Cache / Session"})}),e.jsx(n.td,{children:"Database (configurable)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"APIs"})}),e.jsx(n.td,{children:"Google Cloud (Translation, Text-to-Speech), OpenAI (Whisper), Stripe (payments)"})]})]})]}),`
`,e.jsx(n.h2,{id:"main-features",children:"Main Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Audio translation pipeline"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["User uploads audio → stored in ",e.jsx(n.code,{inline:"true",children:"storage/app/public/"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transcription"}),": OpenAI Whisper (source language)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Translation"}),": Google Cloud Translation API v3 (batch)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TTS"}),": Google Cloud Text-to-Speech (Gemini 2.5 Pro TTS)"]}),`
`,e.jsx(n.li,{children:"Optional: user can approve/edit transcription and translated text before TTS"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Text-to-audio"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User enters text + language + optional voice/style → job generates audio via Gemini TTS"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Admin panel"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dashboard, users, payments, audio files"}),`
`,e.jsx(n.li,{children:"Credit management (add/remove credits)"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSV/XLSX translation"}),": upload file → background job translates empty cells"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Credits & payments"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pay-per-use credits; Stripe Checkout; webhook updates balance"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"high-level-architecture",children:"High-Level Architecture"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{children:e.jsxs(n.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"User (browser)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → Laravel routes (web.php)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → Controllers (AudioController, TextToAudioController, PaymentController, Admin)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → Services (AudioProcessingService, GeminiTtsService, GoogleTranslationService)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → External APIs (OpenAI Whisper, Google Translation, Google TTS)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → Queue jobs (ProcessAudioJob, ProcessTextToAudioJob, ProcessCsvTranslationJob)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"    → Database"})})]})})}),`
`,e.jsx(n.h2,{id:"important-paths",children:"Important Paths"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Path"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"app/Services/"})}),e.jsx(n.td,{children:"TTS, translation, transcription, CSV parsing, credits"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"app/Jobs/"})}),e.jsx(n.td,{children:"Queue job classes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"app/Http/Controllers/"})}),e.jsx(n.td,{children:"Web endpoints"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"app/Models/"})}),e.jsx(n.td,{children:"Eloquent models"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{inline:"true",children:"config/audio.php"}),", ",e.jsx(n.code,{inline:"true",children:"config/gemini.php"}),", ",e.jsx(n.code,{inline:"true",children:"config/services.php"}),", ",e.jsx(n.code,{inline:"true",children:"config/stripe.php"})]}),e.jsx(n.td,{children:"Configuration"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"storage/app/google-service-account.json"})}),e.jsx(n.td,{children:"Default Google credentials location"})]})]})]})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as __filepath,h as default,d as frontmatter,l as tableOfContents};
//# sourceMappingURL=01-overview-D4xJHBVE.js.map
