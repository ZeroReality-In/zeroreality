
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "./ThemeProvider";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().optional()
});

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted with data:", data);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-32 overflow-hidden bg-background">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/4 -ml-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-1/4 -mr-20 w-64 h-64 rounded-full bg-green-500/20 blur-3xl"
      />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight">
              Ready to <span className="text-[#9b87f5]">talk?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Schedule a free intro call with our team and discover how we can transform your digital presence.
            </p>
            
            <motion.div 
              className="flex flex-col gap-4 md:flex-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => setIsOpen(true)}
                className="bg-neon-green hover:bg-neon-green/90 text-black font-medium rounded-full text-lg px-8 py-6 h-auto"
              >
                <Calendar className="mr-2 h-5 w-5" /> Book an intro call
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full text-lg px-8 py-6 h-auto border-foreground/20 hover:border-foreground/40"
              >
                View our work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 md:p-8 border border-foreground/10 bg-card/50 backdrop-blur-sm shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your-email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (optional)</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="How can we help you?"
                          className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-neon-green hover:bg-neon-green/90 text-black font-medium text-lg py-6 h-auto"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>Send message <ArrowRight className="ml-2 h-5 w-5" /></>
                  )}
                </Button>
              </form>
            </Form>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-500"
              >
                <Check className="h-5 w-5" />
                <span>Thanks for your message! We'll get back to you soon.</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Booking dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book an intro call</DialogTitle>
            <DialogDescription>
              Schedule a free 30-minute consultation with our team to discuss your project.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 flex flex-col gap-6">
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="font-medium mb-2">Our availability</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Monday to Friday, 9 AM - 5 PM EST
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> 30-minute introduction call
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> No obligation, free consultation
                </li>
              </ul>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="booking-name">Name</Label>
                  <Input id="booking-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-email">Email</Label>
                  <Input id="booking-email" placeholder="your-email@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-phone">Phone (optional)</Label>
                  <Input id="booking-phone" placeholder="(123) 456-7890" />
                </div>
              </div>
            </form>
          </div>
          
          <DialogFooter>
            <Button 
              className="w-full rounded-full bg-neon-green hover:bg-neon-green/90 text-black font-medium text-base py-6 h-auto"
              onClick={() => {
                console.log("Booking requested");
                setIsOpen(false);
                // Here you would typically integrate with a calendar booking system
              }}
            >
              Schedule call <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
