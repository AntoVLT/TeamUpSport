
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Dumbbell,
  HeartHandshake,
  Users,
  Sparkles,
  Building2,
  CalendarDays,
  Trophy,
  ShieldCheck,
  Clock3,
} from "lucide-react";

// Landing page for TeamUp Sport with brand colors
// Colors: Dark teal (#032F36), White (#FFFFFF), Orange (#C57A2C)

const brand = {
  dark: "#032F36",
  orange: "#C57A2C",
  white: "#FFFFFF",
};

const features = [
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Cohésion d'équipe",
    desc: "Des séances qui rapprochent, dynamisent et créent des souvenirs communs.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" aria-hidden />,
    title: "Bien-être & prévention",
    desc: "Mobilité, posture, respiration : des bases simples pour réduire le stress.",
  },
  {
    icon: <Dumbbell className="h-6 w-6" aria-hidden />,
    title: "Coaching accessible",
    desc: "Adapté à tous les niveaux, en toute sécurité, dans vos locaux ou en plein air.",
  },
  {
    icon: <CalendarDays className="h-6 w-6" aria-hidden />,
    title: "Format flexible",
    desc: "Séance unique, cycle de 6 à 8 semaines, ou préparation à un évènement.",
  },
];

const program = [
  {
    icon: <Building2 className="h-5 w-5" aria-hidden />,
    title: "Sur site ou dehors",
    points: [
      "Nous venons chez vous (bureaux, parking, parc à proximité)",
      "Matériel léger inclus si nécessaire",
    ],
  },
  {
    icon: <Clock3 className="h-5 w-5" aria-hidden />,
    title: "45 à 60 minutes",
    points: [
      "Échauffement mobilité & respiration",
      "Circuit ludique (force légère, cardio doux)",
      "Retour au calme & conseils bien-être",
    ],
  },
  {
    icon: <Trophy className="h-5 w-5" aria-hidden />,
    title: "Préparation à un défi",
    points: [
      "5K/10K, marche solidaire, tri-relai, ou course locale",
      "Suivi collectif + présence le jour J (ravito & médias)",
    ],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" aria-hidden />,
    title: "Sécurité & adaptation",
    points: [
      "Exercices scalables, alternatives pour tous",
      "Assurance pro et encadrement diplômé",
    ],
  },
];

const testimonials = [
  {
    name: "Julie M.",
    role: "DRH, Fintech Lyon",
    quote:
      "En 6 semaines, on a vu un vrai boost d'énergie et d'entraide entre équipes. L'offre est simple et hyper pro.",
  },
  {
    name: "Thomas R.",
    role: "Manager, Scale-up Paris",
    quote:
      "Séances accessibles à tous, zéro jugement. La préparation au 10 km a soudé l'équipe comme jamais.",
  },
];

export default function TeamUpLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.dark, color: brand.white }}>
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#032F36]/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src='/logo.png' alt='TeamUp Sport' className='h-10 w-auto' />
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#features" className="text-sm text-gray-200 hover:text-white">Bénéfices</a>
            <a href="#program" className="text-sm text-gray-200 hover:text-white">Format</a>
            <a href="#prep" className="text-sm text-gray-200 hover:text-white">Défi</a>
            <a href="#contact" className="text-sm text-gray-200 hover:text-white">Séance gratuite</a>
          </div>
          <div className="flex items-center gap-3">
            <Badge style={{ backgroundColor: brand.orange + "22", color: brand.orange }}>B2B bien-être</Badge>
            <a href="#contact">
              <Button className="rounded-2xl px-4 transition-colors" style={{ backgroundColor: brand.orange, color: brand.white }}
                onMouseEnter={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a56422";}}
                onMouseLeave={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = brand.orange;}}
              >Réserver une séance</Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Nouveau : séance découverte offerte
            </div>
            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              Le sport qui soude <span style={{ color: brand.orange }}>vos équipes</span>
            </h1>
            <p className="mb-6 text-gray-200">
              Programmes bien-être & team-building clés en main. On s'occupe de tout : coaching, logistique, et <span className="font-medium text-white">préparation à un évènement</span> si vous le souhaitez.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button size="lg" className="rounded-2xl px-6 transition-colors" style={{ backgroundColor: brand.orange, color: brand.white }}
                  onMouseEnter={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a56422";}}
                  onMouseLeave={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = brand.orange;}}
                >Planifier la séance gratuite</Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="secondary" className="rounded-2xl px-6 transition-colors" style={{ backgroundColor: "transparent", border: `1px solid ${brand.orange}`, color: brand.orange }}
                  onMouseEnter={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff0f";}}
                  onMouseLeave={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";}}
                >Voir les bénéfices</Button>
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-300">Sans engagement • Adapté à tous • Île-de-France & Rhône-Alpes</p>
          </div>
          <div className="relative">
            <Card className="overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_30%,#C57A2C22,transparent_60%),radial-gradient(circle_at_70%_70%,#ffffff22,transparent_60%)]" />
                <div className="grid grid-cols-3 gap-3 p-4">
                  {["Mobilité","Renfo doux","Respiration","Cardio fun","Stretch","Défi 5/10K"].map((k) => (
                    <div key={k} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-gray-200">{k}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Pourquoi TeamUp ?</h2>
          <Badge style={{ backgroundColor: "#ffffff0f", color: brand.white, border: "1px solid rgba(255,255,255,0.1)" }}>Simple & efficace</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-200">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Program */}
      <section id="program" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Comment ça se passe ?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {program.map((b) => (
            <Card key={b.title} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">{b.icon}</div>
                <CardTitle className="text-base">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1 text-sm text-gray-200">
                  {b.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preparation */}
      <section id="prep" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <Trophy className="h-5 w-5" style={{ color: brand.orange }} aria-hidden />
          <h2 className="text-2xl font-semibold">Préparez un évènement avec vos équipes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Choix du défi", "Cycle d'entraînement", "Jour J & médias"].map((step, i) => (
            <Card key={step} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-base">{i + 1}. {step}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-200">
                {i === 0 && (<p>5K/10K en ville, marche caritative, ou format adapté à votre culture d'entreprise.</p>)}
                {i === 1 && (<p>6–8 semaines ludiques : mobilité, renfo, cardio progressif, éducation (sommeil, nutrition).</p>)}
                {i === 2 && (<p>Encadrement, ravitaillement, photos & vidéos pour votre communication interne/externe.</p>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5" style={{ color: brand.orange }} aria-hidden />
          <h2 className="text-2xl font-semibold">Ils ont essayé, ils recommandent</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl border border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-base">{t.name} • {t.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing / Offers */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Formules simples</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Découverte",
              price: "Séance gratuite",
              bullets: ["45–60 min", "Jusqu'à 20 pers.", "Adaptée à tous"],
              cta: "Réserver",
              highlight: true,
            },
            {
              name: "Cycle TeamUp",
              price: "Sur devis",
              bullets: ["6–8 semaines", "2 à 4 séances/mois", "Suivi collectif"],
              cta: "Demander un devis",
            },
            {
              name: "Défi Entreprise",
              price: "Sur devis",
              bullets: ["Prépa 5/10K ou marche", "Présence jour J", "Médias inclus"],
              cta: "Parler à un coach",
            },
          ].map((p) => (
            <Card key={p.name} className={`rounded-2xl border ${p.highlight ? "border-[#C57A2C33] bg-[#C57A2C1a]" : "border-white/10 bg-white/5"}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  {p.highlight && (
                    <Badge style={{ backgroundColor: brand.orange + "22", color: brand.white, border: "1px solid #C57A2C55" }}>Le + choisi</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-2xl font-semibold">{p.price}</p>
                <ul className="mb-6 space-y-1 text-sm text-gray-200">
                  {p.bullets.map((b) => (<li key={b}>• {b}</li>))}
                </ul>
                <a href="#contact">
                  <Button className="w-full rounded-2xl transition-colors" style={{ backgroundColor: brand.orange, color: brand.white }}
                    onMouseEnter={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a56422";}}
                    onMouseLeave={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = brand.orange;}}
                  >{p.cta}</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="h-5 w-5" style={{ color: brand.orange }} aria-hidden />
          <h2 className="text-2xl font-semibold">Planifier votre séance gratuite</h2>
        </div>
        <Card className="rounded-2xl border border-white/10 bg-white/5">
          <CardContent className="grid gap-6 p-6 md:grid-cols-2">
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Merci ! Nous vous recontactons sous 24h ouvrées."); }}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-gray-200">Prénom</label>
                  <Input required placeholder="Votre prénom" className="bg-white/10" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-200">Nom</label>
                  <Input required placeholder="Votre nom" className="bg-white/10" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-200">Email pro</label>
                <Input type="email" required placeholder="vous@entreprise.com" className="bg-white/10" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-200">Société</label>
                <Input required placeholder="Nom de l'entreprise" className="bg-white/10" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-200">Message</label>
                <Textarea placeholder="Parlez-nous de votre équipe et de vos objectifs…" className="min-h-[100px] bg-white/10" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="h-4 w-4" style={{ color: brand.orange }} aria-hidden />
                <span>Nous répondons sous 24h ouvrées.</span>
              </div>
              <Button type="submit" className="w-full rounded-2xl transition-colors" style={{ backgroundColor: brand.orange, color: brand.white }}
                onMouseEnter={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#a56422";}}
                onMouseLeave={(e)=>{(e.currentTarget as HTMLButtonElement).style.backgroundColor = brand.orange;}}
              >Envoyer</Button>
            </form>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-200"><span className="font-medium">Île-de-France & Rhône-Alpes</span><br />Déplacements possibles ailleurs selon projet.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-200">Besoin d'une <span className="font-medium">plaquette PDF</span> pour vos équipes ?<br />Indiquez-le dans le message, on vous l'envoie.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-200">Délais habituels : <span className="font-medium">1 à 3 semaines</span> pour démarrer.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-xs text-gray-300">© {new Date().getFullYear()} TeamUp Sport — Bien-être & cohésion en entreprise</p>
          <div className="flex items-center gap-4 text-xs text-gray-300">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Confidentialité</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
