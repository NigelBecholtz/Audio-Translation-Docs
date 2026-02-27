import{p as l,j as e}from"./entry.client-CAKTKa86.js";const t="Step-by-step guide to set up or change the Google Cloud service account for Translation and TTS.",h=[{depth:1,text:"10 – Google Service Account Setup",id:"10--google-service-account-setup",children:[{depth:2,text:"1. Sign in with the correct account",id:"1-sign-in-with-the-correct-account"},{depth:2,text:"2. Billing",id:"2-billing"},{depth:2,text:"3. Enable APIs",id:"3-enable-apis"},{depth:2,text:"4. Create service account",id:"4-create-service-account"},{depth:2,text:"5. Assign roles",id:"5-assign-roles"},{depth:2,text:"6. Create JSON key",id:"6-create-json-key"},{depth:2,text:"7. Note your Project ID",id:"7-note-your-project-id"},{depth:2,text:"8. Configure in the app",id:"8-configure-in-the-app",children:[{depth:3,text:"Option A: File (local / VPS)",id:"option-a-file-local--vps"},{depth:3,text:"Option B: Environment variable (no file on server)",id:"option-b-environment-variable-no-file-on-server"}]},{depth:2,text:"9. Clear cache and test",id:"9-clear-cache-and-test"},{depth:2,text:"Summary",id:"summary"}]}],c={lastModifiedTime:"2026-02-27T08:47:53.588Z"},d="pages/10-google-service-account-setup.md";function s(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"10--google-service-account-setup",children:"10 – Google Service Account Setup"}),`
`,e.jsx(i.p,{children:"Step-by-step guide to set up or change the Google Cloud service account for Translation and TTS."}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"1-sign-in-with-the-correct-account",children:"1. Sign in with the correct account"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Go to ",e.jsx(i.a,{href:"https://console.cloud.google.com",children:"Google Cloud Console"}),"."]}),`
`,e.jsx(i.li,{children:"Sign in with the Google account you want to use."}),`
`,e.jsx(i.li,{children:"Select the project (or create a new one)."}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"2-billing",children:"2. Billing"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Billing"})," → ",e.jsx(i.strong,{children:"Link a billing account"}),"."]}),`
`,e.jsx(i.li,{children:"Translation API v3 requires billing (free tier is usually sufficient)."}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"3-enable-apis",children:"3. Enable APIs"}),`
`,e.jsxs(i.p,{children:["Go to ",e.jsx(i.strong,{children:"APIs & Services"})," → ",e.jsx(i.strong,{children:"Library"})," and enable:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Cloud Translation API"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Cloud Text-to-Speech API"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Vertex AI API"})," (required for Gemini TTS)"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"4-create-service-account",children:"4. Create service account"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"IAM & Admin"})," → ",e.jsx(i.strong,{children:"Service Accounts"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Create Service Account"}),"."]}),`
`,e.jsxs(i.li,{children:["Name: e.g. ",e.jsx(i.code,{inline:"true",children:"audio-translation"})," → ",e.jsx(i.strong,{children:"Create and continue"}),"."]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"5-assign-roles",children:"5. Assign roles"}),`
`,e.jsxs(i.p,{children:["Under ",e.jsx(i.em,{children:"Grant this service account access to project"}),", add:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Cloud Translation API User"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Cloud Text-to-Speech User"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Service Usage Consumer"})}),`
`]}),`
`,e.jsxs(i.p,{children:["Click ",e.jsx(i.strong,{children:"Done"}),"."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"6-create-json-key",children:"6. Create JSON key"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Open the new service account."}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Keys"})," tab → ",e.jsx(i.strong,{children:"Add key"})," → ",e.jsx(i.strong,{children:"Create new key"})," → ",e.jsx(i.strong,{children:"JSON"}),"."]}),`
`,e.jsx(i.li,{children:"Download the JSON file."}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"7-note-your-project-id",children:"7. Note your Project ID"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"IAM & Admin"})," → ",e.jsx(i.strong,{children:"Project Settings"}),"."]}),`
`,e.jsxs(i.li,{children:["Copy the ",e.jsx(i.strong,{children:"Project ID"})," (not the Project Number)."]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"8-configure-in-the-app",children:"8. Configure in the app"}),`
`,e.jsx(i.h3,{id:"option-a-file-local--vps",children:"Option A: File (local / VPS)"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Place the JSON file at: ",e.jsx(i.code,{inline:"true",children:"storage/app/google-service-account.json"})]}),`
`,e.jsxs(i.li,{children:["In ",e.jsx(i.code,{inline:"true",children:".env"}),":"]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"GOOGLE_CLOUD_PROJECT_ID=your-project-id"})})})})}),`
`,e.jsx(i.p,{children:"Optional custom path:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"GOOGLE_SERVICE_ACCOUNT_PATH=/path/to/credentials.json"})})})})}),`
`,e.jsx(i.h3,{id:"option-b-environment-variable-no-file-on-server",children:"Option B: Environment variable (no file on server)"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Encode the JSON to base64:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Windows (PowerShell):"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-powershell shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"Convert"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]::ToBase64String(["}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"IO.File"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]::ReadAllBytes("}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"path\\to\\credentials.json"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"))"})]})})})}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Linux/Mac:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"base64"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -i"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" credentials.json"})]})})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["Add to ",e.jsx(i.code,{inline:"true",children:".env"}),":"]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsxs(i.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"GOOGLE_SERVICE_ACCOUNT_JSON=eyJ0eXBlIjoic2VydmljZV9hY2NvdW50Ii..."})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"GOOGLE_CLOUD_PROJECT_ID=your-project-id"})})]})})}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"9-clear-cache-and-test",children:"9. Clear cache and test"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{children:e.jsxs(i.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" config:clear"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" cache:clear"})]})]})})}),`
`,e.jsxs(i.p,{children:["Test a translation or TTS in the app. Check ",e.jsx(i.code,{inline:"true",children:"storage/logs/laravel.log"})," if anything fails."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Step"}),e.jsx(i.th,{children:"Action"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"1"}),e.jsx(i.td,{children:"Sign in with correct Google account in Cloud Console"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"2"}),e.jsx(i.td,{children:"Link billing"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"3"}),e.jsx(i.td,{children:"Enable Cloud Translation API, Cloud Text-to-Speech API, Vertex AI API"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"4"}),e.jsx(i.td,{children:"Create service account"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"5"}),e.jsx(i.td,{children:"Assign roles (Translation, TTS, Service Usage)"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"6"}),e.jsx(i.td,{children:"Create and download JSON key"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"7"}),e.jsx(i.td,{children:"Note Project ID"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"8"}),e.jsxs(i.td,{children:["Add JSON file or base64 in ",e.jsx(i.code,{inline:"true",children:".env"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"9"}),e.jsxs(i.td,{children:["Run ",e.jsx(i.code,{inline:"true",children:"config:clear"})," and ",e.jsx(i.code,{inline:"true",children:"cache:clear"}),", then test"]})]})]})]})]})}function a(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as __filepath,a as default,t as excerpt,c as frontmatter,h as tableOfContents};
//# sourceMappingURL=10-google-service-account-setup-CnvvyUXd.js.map
