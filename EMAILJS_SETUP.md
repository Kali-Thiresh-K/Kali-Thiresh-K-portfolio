# EmailJS Setup Guide for Contact Form

Your contact form has been configured to send emails to **kalithiresh811@gmail.com** using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (kalithiresh811@gmail.com)
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **IMPORTANT**: Configure the template exactly like this:

**Template Settings:**
- **Template Name**: Portfolio Contact Form
- **Subject**: New message from {{from_name}} - {{subject}}

**Email Content (Body):**
```
Hi Kali,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website contact form.
Time: {{reply_to}}
```

**Template Variables to Use:**
- {{from_name}} - visitor's name
- {{from_email}} - visitor's email
- {{subject}} - message subject
- {{message}} - message content
- {{reply_to}} - can be used for timestamp

4. **CRITICAL**: In the template settings, make sure to set:
   - **From Name**: Your Portfolio
   - **From Email**: Use your verified email (kalithiresh811@gmail.com)
   - **Reply To**: {{from_email}} (this allows you to reply directly to the visitor)

5. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it for the next step

## Step 5: Update Your Code

Replace the placeholders in your Contact.tsx file:

```tsx
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## Step 6: Test Your Contact Form

1. Run your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email (kalithiresh811@gmail.com) for the message

## Example Configuration

After setup, your code should look like:

```tsx
await emailjs.send(
  'service_abc1234',     // Your actual Service ID
  'template_xyz5678',    // Your actual Template ID
  templateParams,
  'user_9876543210'      // Your actual Public Key
);
```

## Troubleshooting

- Make sure all IDs are correct (no typos)
- Check EmailJS dashboard for any quota limits
- Verify Gmail service is connected properly
- Check browser console for any error messages

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 1 email service
- 1 email template
- EmailJS branding in emails

This should be sufficient for a portfolio contact form!