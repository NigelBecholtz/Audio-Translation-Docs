import{p as t,j as e}from"./entry.client-CAKTKa86.js";const d=[{depth:1,text:"05 – External Services",id:"05--external-services",children:[{depth:2,text:"Google Cloud",id:"google-cloud",children:[{depth:3,text:"APIs Used",id:"apis-used"},{depth:3,text:"Authentication",id:"authentication"},{depth:3,text:"Required IAM Roles",id:"required-iam-roles"},{depth:3,text:"Credentials Location",id:"credentials-location"}]},{depth:2,text:"OpenAI",id:"openai",children:[{depth:3,text:"APIs Used",id:"apis-used-1"},{depth:3,text:"Configuration",id:"configuration"}]},{depth:2,text:"Stripe",id:"stripe",children:[{depth:3,text:"Usage",id:"usage"},{depth:3,text:"Configuration",id:"configuration-1"}]}]}],l={lastModifiedTime:"2026-02-27T08:47:36.854Z"},c="pages/05-external-services.md";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"05--external-services",children:"05 – External Services"}),`
`,e.jsx(n.h2,{id:"google-cloud",children:"Google Cloud"}),`
`,e.jsx(n.h3,{id:"apis-used",children:"APIs Used"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"API"}),e.jsx(n.th,{children:"Endpoint"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Cloud Translation API"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"translation.googleapis.com/v3"})}),e.jsx(n.td,{children:"Translation, language detection"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Cloud Text-to-Speech API"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"texttospeech.googleapis.com/v1/text:synthesize"})}),e.jsx(n.td,{children:"Gemini 2.5 Pro TTS"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Vertex AI API"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Must be enabled for Gemini TTS"})]})]})]}),`
`,e.jsx(n.h3,{id:"authentication",children:"Authentication"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Service account"})," (JSON key file or base64 in env)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OAuth2"}),": JWT created from service account, exchanged for access token"]}),`
`,e.jsxs(n.li,{children:["Token cached in Laravel cache (",e.jsx(n.code,{inline:"true",children:"gemini_oauth_access_token"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"required-iam-roles",children:"Required IAM Roles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cloud Translation API User"})," (",e.jsx(n.code,{inline:"true",children:"roles/cloudtranslate.user"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cloud Text-to-Speech User"})," (",e.jsx(n.code,{inline:"true",children:"roles/texttospeech.user"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Service Usage Consumer"})," (",e.jsx(n.code,{inline:"true",children:"roles/serviceusage.serviceUsageConsumer"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"credentials-location",children:"Credentials Location"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{inline:"true",children:"storage/app/google-service-account.json"})]}),`
`,e.jsxs(n.li,{children:["Or: ",e.jsx(n.code,{inline:"true",children:"GOOGLE_SERVICE_ACCOUNT_JSON"})," (base64) in ",e.jsx(n.code,{inline:"true",children:".env"})]}),`
`,e.jsxs(n.li,{children:["Or: ",e.jsx(n.code,{inline:"true",children:"GOOGLE_SERVICE_ACCOUNT_PATH"})," (custom path) in ",e.jsx(n.code,{inline:"true",children:".env"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"openai",children:"OpenAI"}),`
`,e.jsx(n.h3,{id:"apis-used-1",children:"APIs Used"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"API"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Whisper"}),e.jsx(n.td,{children:"Audio transcription"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TTS (optional)"}),e.jsx(n.td,{children:"Fallback if Gemini fails (SimpleTtsService)"})]})]})]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"OPENAI_API_KEY"})," in ",e.jsx(n.code,{inline:"true",children:".env"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{inline:"true",children:"config/openai.php"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"stripe",children:"Stripe"}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Checkout session for credit packages"}),`
`,e.jsx(n.li,{children:"Webhook updates user credits on successful payment"}),`
`,e.jsxs(n.li,{children:["Webhook route: ",e.jsx(n.code,{inline:"true",children:"POST /webhook/stripe"})," (no auth, rate limited)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration-1",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"STRIPE_KEY"}),", ",e.jsx(n.code,{inline:"true",children:"STRIPE_SECRET"}),", ",e.jsx(n.code,{inline:"true",children:"STRIPE_WEBHOOK_SECRET"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"STRIPE_STARTER_PRICE_ID"})," for credit package"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"config/stripe.php"})," – credit packages, default cost per translation"]}),`
`]})]})}function h(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as __filepath,h as default,l as frontmatter,d as tableOfContents};
//# sourceMappingURL=05-external-services-BdHXKJSM.js.map
