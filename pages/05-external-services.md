# 05 – External Services

## Google Cloud

### APIs Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| Cloud Translation API | `translation.googleapis.com/v3` | Translation, language detection |
| Cloud Text-to-Speech API | `texttospeech.googleapis.com/v1/text:synthesize` | Gemini 2.5 Pro TTS |
| Vertex AI API | - | Must be enabled for Gemini TTS |

### Authentication

- **Service account** (JSON key file or base64 in env)
- **OAuth2**: JWT created from service account, exchanged for access token
- Token cached in Laravel cache (`gemini_oauth_access_token`)

### Required IAM Roles

- **Cloud Translation API User** (`roles/cloudtranslate.user`)
- **Cloud Text-to-Speech User** (`roles/texttospeech.user`)
- **Service Usage Consumer** (`roles/serviceusage.serviceUsageConsumer`)

### Credentials Location

- Default: `storage/app/google-service-account.json`
- Or: `GOOGLE_SERVICE_ACCOUNT_JSON` (base64) in `.env`
- Or: `GOOGLE_SERVICE_ACCOUNT_PATH` (custom path) in `.env`

---

## OpenAI

### APIs Used

| API | Purpose |
|-----|---------|
| Whisper | Audio transcription |
| TTS (optional) | Fallback if Gemini fails (SimpleTtsService) |

### Configuration

- `OPENAI_API_KEY` in `.env`
- `config/openai.php`
