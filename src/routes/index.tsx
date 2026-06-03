import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Truck, Trash2, HardHat, Phone, Mail, MapPin, Star,
  CheckCircle2, ClipboardList, PackageCheck, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE_DISPLAY = "816-309-9435";
const PHONE_TEL = "+18163099435";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <WhyUs />
        <ServiceArea />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur border-b-2 border-brand-orange">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="It's A Mess Dumpsters" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide text-white">
          <a href="#services" className="hover:text-brand-orange transition">Services</a>
          <a href="#pricing" className="hover:text-brand-orange transition">Pricing</a>
          <a href="#how" className="hover:text-brand-orange transition">How It Works</a>
          <a href="#area" className="hover:text-brand-orange transition">Service Area</a>
          <a href="#contact" className="hover:text-brand-orange transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline-flex items-center gap-2 text-white font-display text-lg hover:text-brand-orange transition"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <a href="#contact">
            <Button className="bg-brand-orange text-brand-black hover:bg-brand-orange/90 font-display uppercase tracking-wide">
              Get a Quote
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-grain overflow-hidden">
      <div className="speed-streaks absolute inset-0" />
      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              Same-Day Service Available
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
              Kansas City's <span className="text-brand-orange">#1</span> Dumpster Rental & Junk Removal
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Same-day drop-off. Fair flat-rate pricing. No hidden fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact">
                <Button size="lg" className="bg-brand-orange text-brand-black hover:bg-brand-orange/90 font-display uppercase tracking-wide text-base h-12 px-7 w-full sm:w-auto">
                  Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href={`tel:${PHONE_TEL}`}>
                <Button size="lg" variant="outline" className="border-2 border-brand-green bg-transparent text-white hover:bg-brand-green hover:text-white font-display uppercase tracking-wide text-base h-12 px-7 w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call Now: {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-orange" /> Locally Owned</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-orange" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-orange" /> 5-Star Rated</span>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-10 bg-brand-orange/10 blur-3xl rounded-full" />
            <img src={logo} alt="It's A Mess Dumpsters logo" className="relative w-full max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Truck, title: "Dumpster Rental", desc: "Roll-off dumpsters dropped same-day. Keep it as long as you need." },
  { icon: Trash2, title: "Junk Removal", desc: "We load it, haul it, and dispose of it. You don't lift a thing." },
  { icon: HardHat, title: "Construction Debris", desc: "Heavy debris, concrete, drywall. Built for job sites and contractors." },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="What We Do" title="Services Built For The Mess" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-brand-green text-white rounded-xl p-8 overflow-hidden border-b-4 border-brand-orange hover:-translate-y-1 transition">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-brand-orange text-brand-black mb-5">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl uppercase">{s.title}</h3>
              <p className="mt-3 text-white/80">{s.desc}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-brand-orange font-semibold uppercase text-sm tracking-wide">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: ClipboardList, title: "Book Online", desc: "Pick your size and date. Takes under 2 minutes." },
  { icon: Truck, title: "We Drop The Dumpster", desc: "Same-day or scheduled drop-off, right where you want it." },
  { icon: PackageCheck, title: "We Pick It Up", desc: "Fill it up. Call us. We haul it away. Done." },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="How It Works" title="Three Steps. Zero Hassle." />
        <div className="relative mt-14 grid md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-brand-orange/40" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-brand-orange text-brand-black font-display text-2xl flex items-center justify-center ring-8 ring-muted relative z-10">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase">{s.title}</h3>
              <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sizes = [
  { yard: "10", price: "299", uses: ["Garage cleanouts", "Small remodels", "Yard waste"], popular: false },
  { yard: "20", price: "449", uses: ["Whole-home cleanouts", "Roofing jobs", "Large remodels"], popular: true },
  { yard: "30", price: "599", uses: ["New construction", "Major demo", "Commercial sites"], popular: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Dumpster Sizes" title="Flat-Rate. No Surprises." />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {sizes.map((s) => (
            <div
              key={s.yard}
              className={`relative rounded-2xl p-8 border-2 ${
                s.popular
                  ? "bg-brand-black text-white border-brand-orange scale-[1.03] shadow-2xl"
                  : "bg-white text-foreground border-border"
              }`}
            >
              {s.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <div className="font-display uppercase text-sm tracking-widest opacity-70">Roll-Off</div>
              <div className="font-display text-6xl mt-1">
                {s.yard}<span className="text-2xl ml-1">YD</span>
              </div>
              <ul className="mt-6 space-y-2">
                {s.uses.map((u) => (
                  <li key={u} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 ${s.popular ? "text-brand-orange" : "text-brand-green"}`} />
                    {u}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="text-sm opacity-70">Starting at</div>
                <div className="font-display text-4xl">${s.price}</div>
              </div>
              <a href="#contact" className="block mt-6">
                <Button className={`w-full font-display uppercase tracking-wide ${
                  s.popular
                    ? "bg-brand-orange text-brand-black hover:bg-brand-orange/90"
                    : "bg-brand-green text-white hover:bg-brand-green/90"
                }`}>
                  Book This Size
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  "Same-Day Service",
  "Flat-Rate Pricing",
  "No Hidden Fees",
  "Locally Owned & Operated",
];

function WhyUs() {
  return (
    <section className="py-20 bg-concrete relative">
      <div className="container mx-auto px-4 relative">
        <SectionHeading eyebrow="Why Choose Us" title="No B.S. Just Good Service." light />
        <div className="grid sm:grid-cols-2 gap-5 mt-12 max-w-3xl mx-auto">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
              <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl uppercase text-white">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cities = [
  "Kansas City MO", "Kansas City KS", "Lee's Summit", "Independence",
  "Overland Park", "Olathe", "Lenexa", "Shawnee", "Blue Springs", "Liberty",
];

function ServiceArea() {
  return (
    <section id="area" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading eyebrow="Service Area" title="Proudly Serving Kansas City" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          We cover Kansas City and surrounding areas — both sides of the state line.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {cities.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green text-white text-sm font-semibold">
              <MapPin className="h-3.5 w-3.5 text-brand-orange" /> {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Mike R.", role: "Homeowner", quote: "Dumpster showed up that same afternoon. Pricing was exactly what they quoted. Couldn't ask for more." },
  { name: "Sarah T.", role: "General Contractor", quote: "We use them on every job site now. Reliable, on-time, and the crew is professional." },
  { name: "Dave L.", role: "Property Manager", quote: "Booking took 2 minutes. They handled a huge cleanout without a single hiccup. Highly recommend." },
];

function Testimonials() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Reviews" title="What Our Customers Say" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-7 border-t-4 border-brand-orange shadow-sm">
              <div className="flex gap-1 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 italic">"{r.quote}"</p>
              <div className="mt-5">
                <div className="font-display text-lg uppercase">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request sent! We'll be in touch within the hour.");
    }, 600);
  }
  return (
    <section id="contact" className="py-20 bg-grain relative">
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <div className="text-brand-orange font-semibold uppercase tracking-widest text-sm">Get In Touch</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase mt-2">Request Your Free Quote</h2>
            <p className="mt-4 text-white/80 max-w-md">
              Tell us about your project. We'll get back to you fast with a flat-rate quote — no hidden fees, no runaround.
            </p>
            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 group">
                <div className="h-11 w-11 rounded-lg bg-brand-orange text-brand-black flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Call us</div>
                  <div className="font-display text-xl group-hover:text-brand-orange transition">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a href="mailto:ItsAmessDumpsters@gmail.com" className="flex items-center gap-3 group">
                <div className="h-11 w-11 rounded-lg bg-brand-green text-white flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Email</div>
                  <div className="font-display text-xl group-hover:text-brand-orange transition">ItsAmessDumpsters@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required className="mt-1.5" placeholder="John Smith" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-1.5" placeholder="(816) 555-0123" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-1.5" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="service">Service Type</Label>
                <select
                  id="service" name="service" required
                  className="mt-1.5 w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option>Dumpster Rental</option>
                  <option>Junk Removal</option>
                  <option>Construction Debris Cleanup</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} className="mt-1.5" placeholder="Tell us about your project..." />
              </div>
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full h-12 bg-brand-orange text-brand-black hover:bg-brand-orange/90 font-display uppercase tracking-wide text-base"
            >
              {submitting ? "Sending..." : "Request My Free Quote"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground text-center">We typically respond within the hour during business hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 pt-14 pb-8 border-t-2 border-brand-orange">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="It's A Mess Dumpsters" className="h-20 w-auto" />
            <p className="mt-3 font-display uppercase tracking-widest text-sm text-brand-orange">Dumpster & Junk Removal</p>
            <p className="mt-2 text-sm text-white/60">Kansas City's go-to crew for fast, flat-rate dumpster rental and junk hauling.</p>
          </div>
          <div>
            <h4 className="font-display uppercase text-lg">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-orange">Services</a></li>
              <li><a href="#pricing" className="hover:text-brand-orange">Pricing & Sizes</a></li>
              <li><a href="#how" className="hover:text-brand-orange">How It Works</a></li>
              <li><a href="#contact" className="hover:text-brand-orange">Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-lg">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-orange flex-shrink-0" /><span>{PHONE_DISPLAY}</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-orange flex-shrink-0" /><span>ItsAmessDumpsters@gmail.com</span></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-orange flex-shrink-0" /><span>Serving Greater Kansas City</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
          <div>© 2026 It's A Mess Dumpsters. All rights reserved.</div>
          <div>Locally owned & operated · Licensed & insured</div>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className={`font-semibold uppercase tracking-widest text-sm ${light ? "text-brand-orange" : "text-brand-orange"}`}>
        {eyebrow}
      </div>
      <h2 className={`font-display text-4xl md:text-5xl uppercase mt-2 ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 mx-auto bg-brand-orange rounded-full" />
    </div>
  );
}
