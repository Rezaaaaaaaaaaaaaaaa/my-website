# Email Setup Guide for RMES Contact Form

## Current Status
The contact form now has two methods to send emails to che.eng@live.com:

1. **EmailJS** (Primary method) - Requires setup
2. **Mailto fallback** (Always works) - Opens user's default email client

## EmailJS Setup (Optional but Recommended)

To enable direct email sending without opening the user's email client:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Create a new service (Gmail, Outlook, etc.)

### 2. Create Email Template
Create a template with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{company}}` - Company name
- `{{service}}` - Service interested in
- `{{message}}` - The message content
- `{{to_email}}` - Recipient (che.eng@live.com)

### 3. Update Configuration
In `src/pages/ContactPage.js`, update these values:
```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id'; 
const userId = 'your_actual_user_id';
```

### 4. Test the Form
After setup, test by submitting the contact form.

## Current Behavior

**Without EmailJS setup:** 
- Form opens user's default email client with pre-filled message to che.eng@live.com
- User needs to click "Send" in their email client

**With EmailJS setup:**
- Form sends email directly to che.eng@live.com
- User sees success message immediately
- No additional steps required

## Security Notes
- EmailJS credentials are safe to use in client-side code
- No server setup required
- Free tier allows 200 emails/month