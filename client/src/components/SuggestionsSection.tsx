import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const suggestionSchema = z.object({
  suggestion: z.string().min(10, "Suggestion must be at least 10 characters long"),
});

type SuggestionForm = z.infer<typeof suggestionSchema>;

export default function SuggestionsSection() {
  const { toast } = useToast();
  const form = useForm<SuggestionForm>({
    resolver: zodResolver(suggestionSchema),
    defaultValues: {
      suggestion: "",
    },
  });

  async function onSubmit(data: SuggestionForm) {
    try {
      const webhookUrl = "https://discord.com/api/webhooks/1297668626354143262/OHmrnK1QgPpkX8dpGt0paejtn9NTnAD2-BWdCbEmlwxKO-KxdPLUUnNBysAA4AnNdwGz";
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `**New Suggestion:**\n${data.suggestion}`,
        }),
      });

      toast({
        title: "Suggestion sent!",
        description: "Thank you for your feedback.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send suggestion. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <Card className="border-white/20 bg-black/50">
        <CardHeader>
          <CardTitle className="text-white">Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="suggestion"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Share your suggestions or feedback..."
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit Suggestion"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
