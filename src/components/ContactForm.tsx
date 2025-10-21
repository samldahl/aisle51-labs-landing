import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({
        title: "Setup Required",
        description: "Please enter your N8N webhook URL first",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name,
          phone,
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-foreground">Contact Us</DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono">
            Fill out the form and we'll reach out to you
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="webhook" className="text-sm font-mono text-foreground">
              N8N Webhook URL (setup)
            </Label>
            <Input
              id="webhook"
              type="url"
              placeholder="https://your-n8n-webhook-url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="bg-background/50 border-white/10 font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-mono text-foreground">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-background/50 border-white/10 font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-mono text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-background/50 border-white/10 font-mono"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-mono text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 border-white/10 font-mono"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
