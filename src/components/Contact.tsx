import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - replace with your actual service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kalithiresh811@gmail.com',
        reply_to: formData.email, // This allows you to reply directly to the sender
        to_name: 'Kali Thiresh K' // Your name for personalization
      };

      // Send email using EmailJS
      // You need to set up EmailJS account and get these IDs:
      // SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY from EmailJS dashboard
      await emailjs.send(
        'service_9z5taeu', // Replace with your EmailJS service ID
        'template_759aros', // Replace with your EmailJS template ID
        templateParams,
        'u-aeIxDl1xxE0F5o8' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat about technology? I'd
            love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                creative minds. Whether you have a specific project in mind or
                just want to explore possibilities, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "kalithiresh811@gmail.com",
                  link: "mailto:kalithiresh811@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 9150715913",
                  link: "tel:+919150715913",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Ramanathapuram, Tamil Nadu",
                  link: "#",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="glass-card p-4 flex items-center gap-4 interactive group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.title}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* 🔥 LinkedIn & GitHub Get in Touch cards */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kalithiresh811/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-center gap-3 px-6 py-4 w-full sm:w-1/2 interactive hover:text-primary"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Kali-Thiresh-K"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-center gap-3 px-6 py-4 w-full sm:w-1/2 interactive hover:text-primary"
              >
                <Github className="w-6 h-6 text-primary" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass border-glass-border bg-glass/30 focus:bg-glass/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="glass border-glass-border bg-glass/30 focus:bg-glass/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="glass border-glass-border bg-glass/30 focus:bg-glass/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="glass border-glass-border bg-glass/30 focus:bg-glass/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground interactive"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Floating action button for quick contact */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};