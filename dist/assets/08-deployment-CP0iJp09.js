import{p as l,j as i}from"./entry.client-CAKTKa86.js";const r="Run via supervisor or systemd:",t=[{depth:1,text:"08 – Deployment",id:"08--deployment",children:[{depth:2,text:"VPS Checklist",id:"vps-checklist",children:[{depth:3,text:"1. Server Requirements",id:"1-server-requirements"},{depth:3,text:"2. Deploy Code",id:"2-deploy-code"},{depth:3,text:"3. Environment",id:"3-environment"},{depth:3,text:"4. Google Credentials",id:"4-google-credentials"},{depth:3,text:"5. Database",id:"5-database"},{depth:3,text:"6. Storage",id:"6-storage"},{depth:3,text:"7. Cache & Config",id:"7-cache--config"},{depth:3,text:"8. Queue Worker",id:"8-queue-worker"},{depth:3,text:"9. Web Server",id:"9-web-server"},{depth:3,text:"10. Logs",id:"10-logs"},{depth:3,text:"11. Stripe Webhook",id:"11-stripe-webhook"}]}]}],d={lastModifiedTime:"2026-02-27T08:47:44.837Z"},a="pages/08-deployment.md";function n(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"08--deployment",children:"08 – Deployment"}),`
`,i.jsx(e.h2,{id:"vps-checklist",children:"VPS Checklist"}),`
`,i.jsx(e.h3,{id:"1-server-requirements",children:"1. Server Requirements"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"PHP 8.2+"}),`
`,i.jsx(e.li,{children:"Composer"}),`
`,i.jsx(e.li,{children:"Node.js & NPM"}),`
`,i.jsx(e.li,{children:"SQLite or MySQL/PostgreSQL"}),`
`,i.jsx(e.li,{children:"Web server (Apache/Nginx)"}),`
`]}),`
`,i.jsx(e.h3,{id:"2-deploy-code",children:"2. Deploy Code"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsxs(e.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"cd"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /var/www/your-app"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"git"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" pull"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" origin"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"composer"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --no-dev"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --optimize-autoloader"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"npm"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ci"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"npm"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" build"})]})]})})}),`
`,i.jsx(e.h3,{id:"3-environment",children:"3. Environment"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Copy ",i.jsx(e.code,{inline:"true",children:".env.example"})," to ",i.jsx(e.code,{inline:"true",children:".env"})," (if not exists)"]}),`
`,i.jsxs(e.li,{children:["Set ",i.jsx(e.code,{inline:"true",children:"APP_ENV=production"}),", ",i.jsx(e.code,{inline:"true",children:"APP_DEBUG=false"})]}),`
`,i.jsxs(e.li,{children:["Set ",i.jsx(e.code,{inline:"true",children:"APP_URL"})," to your domain"]}),`
`,i.jsx(e.li,{children:"Configure all API keys"}),`
`]}),`
`,i.jsx(e.h3,{id:"4-google-credentials",children:"4. Google Credentials"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Place ",i.jsx(e.code,{inline:"true",children:"google-service-account.json"})," in ",i.jsx(e.code,{inline:"true",children:"storage/app/"})]}),`
`,i.jsxs(e.li,{children:["Or set ",i.jsx(e.code,{inline:"true",children:"GOOGLE_SERVICE_ACCOUNT_JSON"})," (base64)"]}),`
`,i.jsxs(e.li,{children:["Set ",i.jsx(e.code,{inline:"true",children:"GOOGLE_CLOUD_PROJECT_ID"})]}),`
`]}),`
`,i.jsx(e.h3,{id:"5-database",children:"5. Database"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" migrate"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --force"})]})})})}),`
`,i.jsx(e.h3,{id:"6-storage",children:"6. Storage"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" storage:link"})]})})})}),`
`,i.jsx(e.h3,{id:"7-cache--config",children:"7. Cache & Config"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsxs(e.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" config:cache"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" route:cache"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" view:cache"})]})]})})}),`
`,i.jsx(e.h3,{id:"8-queue-worker",children:"8. Queue Worker"}),`
`,i.jsxs(e.p,{children:["Run via ",i.jsx(e.strong,{children:"supervisor"})," or ",i.jsx(e.strong,{children:"systemd"}),":"]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-bash shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"php"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" artisan"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" queue:work"}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" database"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --timeout=600"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --tries=3"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --memory=512"}),i.jsx(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --sleep=3"})]})})})}),`
`,i.jsx(e.p,{children:"Example supervisor config:"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{children:i.jsxs(e.code,{className:"language-text shiki shiki-themes github-light github-dark",inline:"false",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",children:[i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"[program:laravel-worker]"})}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"command=php /var/www/your-app/artisan queue:work database --timeout=600 --sleep=3 --tries=3"})}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"directory=/var/www/your-app"})}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"autostart=true"})}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"autorestart=true"})}),`
`,i.jsx(e.span,{className:"line",children:i.jsx(e.span,{children:"user=www-data"})})]})})}),`
`,i.jsx(e.h3,{id:"9-web-server",children:"9. Web Server"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Point document root to ",i.jsx(e.code,{inline:"true",children:"public/"})]}),`
`,i.jsxs(e.li,{children:["Ensure ",i.jsx(e.code,{inline:"true",children:"storage"})," and ",i.jsx(e.code,{inline:"true",children:"bootstrap/cache"})," are writable"]}),`
`]}),`
`,i.jsx(e.h3,{id:"10-logs",children:"10. Logs"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:i.jsx(e.code,{inline:"true",children:"storage/logs/laravel.log"})}),`
`,i.jsxs(e.li,{children:["Use ",i.jsx(e.code,{inline:"true",children:"tail -f storage/logs/laravel.log"})," for debugging"]}),`
`]}),`
`,i.jsx(e.h3,{id:"11-stripe-webhook",children:"11. Stripe Webhook"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Configure webhook URL: ",i.jsx(e.code,{inline:"true",children:"https://yourdomain.com/webhook/stripe"})]}),`
`,i.jsxs(e.li,{children:["Event: ",i.jsx(e.code,{inline:"true",children:"checkout.session.completed"})]}),`
`,i.jsxs(e.li,{children:["Set ",i.jsx(e.code,{inline:"true",children:"STRIPE_WEBHOOK_SECRET"})," in ",i.jsx(e.code,{inline:"true",children:".env"})]}),`
`]})]})}function c(s={}){const{wrapper:e}={...l(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(n,{...s})}):n(s)}export{a as __filepath,c as default,r as excerpt,d as frontmatter,t as tableOfContents};
//# sourceMappingURL=08-deployment-CP0iJp09.js.map
