import { GlowCard } from "../ui/glow-card/glow-card";
import { CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const settings = {
  from_name: "Portfolio Contact",
  subject: "New submission from portfolio",
  access_key: "6b480288-51e6-4875-8b94-666fc1a290be",
};

const ContactCard = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().email(),
    message: z.string().min(1, "A message is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...data, ...settings }),
      });

      if (response.ok) {
        form.reset();
        toast({
          title: "Email Sent",
          description: "Thanks for reaching out.",
        });
      } else {
        throw new Error();
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
    setLoading(false);
  }

  return (
    <GlowCard className="w-full">
      <CardHeader className="text-xl font-bold">Contact Me</CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[100px]" placeholder="Your message here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" variant="secondary" disabled={loading}>
              {loading && <Loader2 className="animate-spin" />}
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </GlowCard>
  );
};

export default ContactCard;
