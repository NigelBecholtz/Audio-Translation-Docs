import{p as r,j as e}from"./entry.client-CAKTKa86.js";const d=[{depth:1,text:"04 – Architecture",id:"04--architecture",children:[{depth:2,text:"Directory Structure (Key Parts)",id:"directory-structure-key-parts"},{depth:2,text:"Routes",id:"routes"},{depth:2,text:"Service Flow (Audio Translation)",id:"service-flow-audio-translation"},{depth:2,text:"Service Flow (Text-to-Audio)",id:"service-flow-text-to-audio"}]}],c={lastModifiedTime:"2026-02-27T08:47:35.111Z"},t="pages/04-architecture.md";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"04--architecture",children:"04 – Architecture"}),`
`,e.jsx(n.h2,{id:"directory-structure-key-parts",children:"Directory Structure (Key Parts)"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{children:e.jsxs(n.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"app/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Actions/           # CreateAudioTranslationAction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Constants/         # AudioConstants (TTS chunk size, etc.)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Http/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── Controllers/   # AudioController, TextToAudioController, PaymentController, Admin, etc."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── Middleware/    # Admin, AudioLimits, WebhookThrottle"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   └── Requests/      # StoreAudioRequest"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Jobs/              # ProcessAudioJob, ProcessTextToAudioJob, ProcessCsvTranslationJob, etc."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Models/            # User, AudioFile, TextToAudio, Payment, etc."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── Services/          # Core business logic"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── AudioProcessingService.php   # Orchestrates transcription, translation, TTS"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── GeminiTtsService.php         # Gemini TTS with chunking"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── GoogleOAuthService.php       # Service account auth, token cache"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── GoogleTranslationService.php # Translation API v3"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── LanguageDetectionService.php # Detect language"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── SimpleTtsService.php         # OpenAI TTS fallback (optional)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── CsvParserService.php         # CSV parsing"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── ExcelParserService.php       # XLSX parsing"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── MultiSheetService.php        # Multi-sheet XLSX"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── CreditService.php            # Credit deduction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── FFmpegService.php            # Audio extraction (optional)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   ├── RateLimiter.php              # TTS rate limiting"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"│   └── SanitizationService.php      # Cleanup"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"└── Traits/            # HasAudioFiles"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"config/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── audio.php          # Languages, voices, limits"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── gemini.php         # TTS config"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── services.php       # Google Cloud"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"├── stripe.php         # Payments"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"└── openai.php         # OpenAI"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"routes/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"└── web.php            # All routes"})})]})})}),`
`,e.jsx(n.h2,{id:"routes",children:"Routes"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Route"}),e.jsx(n.th,{children:"Method"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Welcome"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{inline:"true",children:"/login"}),", ",e.jsx(n.code,{inline:"true",children:"/register"}),", ",e.jsx(n.code,{inline:"true",children:"/logout"})]}),e.jsx(n.td,{children:"GET/POST"}),e.jsx(n.td,{children:"Auth"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{inline:"true",children:"/admin/login"}),", ",e.jsx(n.code,{inline:"true",children:"/admin/logout"})]}),e.jsx(n.td,{children:"GET/POST"}),e.jsx(n.td,{children:"Admin auth"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/webhook/stripe"})}),e.jsx(n.td,{children:"POST"}),e.jsx(n.td,{children:"Stripe webhook (no auth)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/audio"})}),e.jsx(n.td,{children:"GET/POST"}),e.jsx(n.td,{children:"Create, index, show"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/audio/{id}/status"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Poll processing status"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/audio/{id}/download"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Download translated audio"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{inline:"true",children:"/audio/{id}/approve-transcription"}),", ",e.jsx(n.code,{inline:"true",children:"/approve-tts"})]}),e.jsx(n.td,{children:"POST"}),e.jsx(n.td,{children:"Approval steps"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/text-to-audio"})}),e.jsx(n.td,{children:"GET/POST"}),e.jsx(n.td,{children:"Create, index, show"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/text-to-audio/{id}/status"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Poll status"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/credits"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Credits page"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/checkout"})}),e.jsx(n.td,{children:"POST"}),e.jsx(n.td,{children:"Stripe checkout"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/admin/dashboard"})}),e.jsx(n.td,{children:"GET"}),e.jsx(n.td,{children:"Admin dashboard"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"/admin/csv-translations"})}),e.jsx(n.td,{children:"GET/POST"}),e.jsx(n.td,{children:"CSV translation upload, status, download"})]})]})]}),`
`,e.jsx(n.h2,{id:"service-flow-audio-translation",children:"Service Flow (Audio Translation)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["User uploads audio → ",e.jsx(n.code,{inline:"true",children:"AudioController::store"})," → ",e.jsx(n.code,{inline:"true",children:"CreateAudioTranslationAction"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"ProcessAudioJob"})," dispatched"]}),`
`,e.jsxs(n.li,{children:["Job: ",e.jsx(n.code,{inline:"true",children:"AudioProcessingService::transcribeAudio"})," (Whisper)"]}),`
`,e.jsxs(n.li,{children:["Job: ",e.jsx(n.code,{inline:"true",children:"AudioProcessingService::translateText"})," (Google Translation) – or use ",e.jsx(n.code,{inline:"true",children:"GoogleTranslationService"})," for batch"]}),`
`,e.jsxs(n.li,{children:["Job: ",e.jsx(n.code,{inline:"true",children:"AudioProcessingService::generateAudio"})," (Gemini TTS)"]}),`
`,e.jsxs(n.li,{children:["User polls ",e.jsx(n.code,{inline:"true",children:"/audio/{id}/status"})," for progress"]}),`
`,e.jsx(n.li,{children:"User downloads result"}),`
`]}),`
`,e.jsx(n.h2,{id:"service-flow-text-to-audio",children:"Service Flow (Text-to-Audio)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["User submits text → ",e.jsx(n.code,{inline:"true",children:"TextToAudioController::store"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"ProcessTextToAudioJob"})," dispatched"]}),`
`,e.jsxs(n.li,{children:["Job: ",e.jsx(n.code,{inline:"true",children:"AudioProcessingService::generateAudio"})," (Gemini TTS)"]}),`
`,e.jsxs(n.li,{children:["User polls ",e.jsx(n.code,{inline:"true",children:"/text-to-audio/{id}/status"})]}),`
`,e.jsx(n.li,{children:"User downloads result"}),`
`]})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as __filepath,a as default,c as frontmatter,d as tableOfContents};
//# sourceMappingURL=04-architecture-B2yefT-C.js.map
