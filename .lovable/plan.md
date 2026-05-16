## Resend Integration — Final Setup

The code wiring is already in place from the previous turn:
- `src/routes/api/contact.ts` — TanStack server route that validates input with Zod, escapes HTML, and calls `https://api.resend.com/emails` using `process.env.RESEND_API_KEY`.
- `src/components/ContactForm.tsx` — POSTs to `/api/contact`, shows a loading spinner, and surfaces success/error via sonner toasts.

What's left is the runtime secret and a verification pass.

### Steps

1. **Request the `RESEND_API_KEY` secret** via the secrets tool. You'll paste it into a secure form — it never appears in code or chat. Stored as a runtime env var available to the server route.
2. **Optional `CONTACT_TO_EMAIL` secret** — the inbox that receives enquiries. Defaults to `gaipov5791@gmail.com` if unset.
3. **Sender address** — stays as `onboarding@resend.dev` (Resend's verified sandbox). This works immediately for testing without domain verification. For production, you'd verify `bakyt.dev` on resend.com and swap the `FROM` constant.
4. **Verify end-to-end**:
   - Submit the contact form in the live preview.
   - Confirm the success toast ("Message transmitted via Resend…") appears.
   - Check the recipient inbox for the formatted enquiry email.
   - Test the failure path by temporarily submitting with an invalid value to confirm the error toast renders.
5. **Check server logs** if anything fails — the route returns Resend's error detail on 502 so toast messages stay actionable.

### Where to get the API key

resend.com → sign in → **API Keys** → **Create API Key** (sending permission, all domains). Copy the `re_...` string when prompted.

### Notes for course submission

- Secret is injected at runtime, never bundled into client code.
- Server route validates input (Zod), escapes HTML to prevent injection in the email body, sets `reply_to` to the submitter, and returns structured JSON errors.
- No API key is ever exposed to the browser.
