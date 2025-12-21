# Quick Fix for EmailJS Template

## The Problem
Your emails are showing your own email as both sender and recipient, and the visitor's name/subject aren't displaying properly.

## The Solution
You need to update your EmailJS template configuration. Here's exactly what to do:

### Step 1: Go to EmailJS Dashboard
1. Login to [EmailJS](https://www.emailjs.com/)
2. Go to **Email Templates**
3. Find your template (template_759aros) and click **Edit**

### Step 2: Update Template Settings

**Subject Line:**
```
New message from {{from_name}} - {{subject}}
```

**Email Body:**
```
Hi Kali,

You have received a new message from your portfolio contact form:

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📝 Subject: {{subject}}

💬 Message:
{{message}}

---
Sent from your portfolio website
You can reply directly to this email to respond to {{from_name}}.
```

### Step 3: Configure Template Settings
In the template configuration panel, set:

- **From Name**: Portfolio Contact Form
- **From Email**: noreply@emailjs.com (or your verified domain)
- **Reply To**: {{from_email}}
- **To Email**: kalithiresh811@gmail.com

### Step 4: Save and Test
1. Save the template
2. Test your contact form again
3. The email should now show:
   - Proper subject with visitor's name
   - Clear visitor information
   - Ability to reply directly to the visitor

## Expected Result
Your next email should look like:
```
From: Portfolio Contact Form <noreply@emailjs.com>
Reply-To: visitor@example.com
To: kalithiresh811@gmail.com
Subject: New message from John Doe - Website Inquiry

Hi Kali,

You have received a new message from your portfolio contact form:

👤 Name: John Doe
📧 Email: visitor@example.com
📝 Subject: Website Inquiry

💬 Message:
I'm interested in your services...
```

This way you'll clearly see who contacted you and can reply directly!