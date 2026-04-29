import { useEffect, useState } from "react";
import { Heart, Sparkles, Star, Gift, Crown, Cake, Camera, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/birthday/FloatingHearts";
import Reveal from "@/components/birthday/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import rose from "@/assets/rose.jpg";
import mom1 from "@/assets/mom-1.jpg";
import mom2 from "@/assets/mom-2.jpg";
import mom3 from "@/assets/mom-3.jpg";
import mom4 from "@/assets/mom-4.jpg";

const reasons = [
  { icon: Heart, title: "Endless Love", text: "Your love has been the warmest place I've ever known — soft, safe, and forever." },
  { icon: Crown, title: "Quiet Strength", text: "You carry the world with grace, and somehow still have arms wide enough to hold mine." },
  { icon: Sparkles, title: "Pure Light", text: "You walk into a room and the whole room becomes kinder. That's a gift only you have." },
  { icon: Star, title: "My First Hero", text: "Long before I knew what brave meant, I had already learned it from watching you." },
  { icon: Gift, title: "Generous Soul", text: "You give without keeping count — your time, your heart, your last piece of cake." },
  { icon: Cake, title: "Joy Maker", text: "You turn ordinary days into memories I'll carry my whole life." },
];

const memories = [
  { year: "Then", title: "The Beginning", text: "The very first hand I ever held was yours — and it still feels like home." },
  { year: "Childhood", title: "Bedtime Stories", text: "Your voice taught me that magic was real long before I could read it on a page." },
  { year: "Growing Up", title: "Always There", text: "Through every fall, every fear, every late-night doubt — you were the steady light." },
  { year: "Today", title: "Forever Grateful", text: "I hope you know: every good thing in me began with you." },
  { year: "Always", title: "To Infinity", text: "There aren't enough birthdays in a lifetime to thank you. But I'll keep trying." },
];

const Index = () => {
  const [revealed, setRevealed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [giftOpened, setGiftOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-soft overflow-hidden">
      <FloatingHearts count={20} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-blush/30 to-ivory" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="font-script text-2xl md:text-3xl text-gradient-gold mb-4">For the most beautiful soul</p>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-8">
              <span className="block text-foreground">Happy</span>
              <span className="block text-gradient-rose italic">Birthday</span>
              <span className="block text-foreground">
                Mom <Heart className="inline-block w-12 h-12 md:w-16 md:h-16 text-rose fill-rose glow-pulse rounded-full p-1" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={600}>
            <p className="font-serif-display italic text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Today the world celebrates the woman who quietly made my whole world.
            </p>
          </Reveal>
          <Reveal delay={900}>
            <Button
              size="lg"
              onClick={() => {
                setGiftOpened(true);
                document.getElementById("message")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative bg-gradient-rose text-primary-foreground border-0 px-10 py-7 text-base rounded-full glow-pulse hover:scale-105 transition-transform duration-500"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Open Your Gift
            </Button>
          </Reveal>
        </div>

        {giftOpened && (
          <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-gold animate-bounce z-10" />
        )}
      </section>

      {/* MESSAGE */}
      <section id="message" className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-3xl text-gradient-gold mb-4">A Letter From My Heart</p>
            <div className="w-24 h-px bg-gradient-gold mx-auto mb-12" />
          </Reveal>
          <Reveal delay={200}>
            <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-elegant border border-blush/50">
              <Heart className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-rose fill-rose bg-background rounded-full p-2 shadow-rose" />
              <p className="font-serif-display text-2xl md:text-3xl leading-relaxed text-foreground/90 italic">
                "Mom, if love had a face, it would look like yours. Thank you for every prayer whispered for me,
                every meal made with care, every silent sacrifice I'm only now beginning to understand. You are
                my home, my hero, my forever."
              </p>
              <p className="font-script text-2xl text-gradient-rose mt-8">— Yours, always</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REASONS */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blush/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <p className="font-script text-3xl text-gradient-gold mb-3">Why You're Extraordinary</p>
              <h2 className="font-serif-display text-5xl md:text-6xl text-foreground mb-4">
                Six of the <em className="text-gradient-rose">infinite</em> reasons
              </h2>
              <div className="w-24 h-px bg-gradient-gold mx-auto" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group relative h-full bg-card/70 backdrop-blur-sm rounded-2xl p-8 border border-blush/40 shadow-elegant hover:shadow-rose transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-rose opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-500">
                      <r.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif-display text-3xl text-foreground mb-3">{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="font-script text-3xl text-gradient-gold mb-3">Frozen Moments</p>
              <h2 className="font-serif-display text-5xl md:text-6xl text-foreground mb-4">Our <em className="text-gradient-rose">memories</em>, curated</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                <Camera className="inline w-4 h-4 mr-1" /> Tap to add your favorite photos with her
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: mom1, caption: "Always safe in your arms" },
              { img: mom2, caption: "Your smile, my home" },
              { img: mom3, caption: "Forever your little one" },
              { img: mom4, caption: "A kiss that says it all" },
            ].map(({ img, caption }, i) => (
              <Reveal key={i} delay={i * 100} className={i % 3 === 0 ? "md:row-span-2 md:col-span-2" : ""}>
                <button
                  onClick={() => setLightbox(img)}
                  className="group relative overflow-hidden rounded-2xl shadow-elegant aspect-[3/4] md:aspect-auto md:h-full w-full cursor-pointer block hover:shadow-rose transition-shadow duration-500"
                >
                  <img
                    src={img}
                    alt={caption}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose/80 via-rose/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <Heart className="w-5 h-5 text-ivory fill-ivory mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="font-script text-xl md:text-2xl text-ivory drop-shadow-lg">{caption}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6 italic">Tap any photo to view it bigger</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-champagne/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <p className="font-script text-3xl text-gradient-gold mb-3">Through the Years</p>
              <h2 className="font-serif-display text-5xl md:text-6xl text-foreground">A <em className="text-gradient-rose">timeline</em> of us</h2>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:-translate-x-1/2" />

            {memories.map((m, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className={`relative flex items-start mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-gold shadow-gold glow-pulse z-10" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-blush/40 shadow-elegant hover:shadow-rose transition-all duration-500">
                      <p className="font-script text-2xl text-gradient-gold mb-1">{m.year}</p>
                      <h3 className="font-serif-display text-2xl text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SURPRISE */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-3xl text-gradient-gold mb-3">One Last Thing...</p>
            <h2 className="font-serif-display text-5xl md:text-6xl text-foreground mb-10">
              A little <em className="text-gradient-rose">surprise</em>
            </h2>
            <Button
              size="lg"
              onClick={() => setRevealed(true)}
              className="relative bg-gradient-gold text-primary-foreground border-0 px-12 py-8 text-lg rounded-full shadow-gold glow-pulse hover:scale-110 transition-transform duration-500"
            >
              <Gift className="mr-3 h-5 w-5" />
              Press Here, Mom
              <Sparkles className="ml-3 h-5 w-5" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 text-center">
        <p className="font-script text-2xl text-gradient-rose mb-2">Made with all my love</p>
        <p className="text-sm text-muted-foreground">Forever your child <Heart className="inline w-3 h-3 fill-rose text-rose" /></p>
      </footer>

      {/* SURPRISE OVERLAY */}
      {revealed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero animate-bloom"
          onClick={() => setRevealed(false)}
        >
          <FloatingHearts count={40} />
          <button
            onClick={() => setRevealed(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/70 backdrop-blur flex items-center justify-center hover:scale-110 transition z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <Heart className="w-24 h-24 md:w-32 md:h-32 mx-auto text-rose fill-rose glow-pulse mb-8" />
            <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-tight">
              <span className="block text-foreground">I Love You</span>
              <span className="block text-gradient-rose italic my-2">Mom</span>
              <span className="block font-script text-gradient-gold text-6xl md:text-8xl mt-4">Forever</span>
            </h2>
            <p className="mt-10 text-muted-foreground italic font-serif-display text-lg">
              Tap anywhere to close — but please know it's true, every single day.
            </p>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 backdrop-blur-md p-4 animate-bloom"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:scale-110 transition z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Memory enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-rose"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
