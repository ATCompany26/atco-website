import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import {
  ArrowRight,
  Check,
  Mail,
  ShieldCheck,
  Sparkles,
  Store,
  Truck
} from "lucide-react";

const AMAZON =
  "https://www.amazon.in/storefront?me=A4GFZNOXQ0KYK&ref_=ssf_share";

const collections = [
  ["🍳", "Kitchen", "Choppers, organisers and useful kitchen accessories."],
  ["🧽", "Cleaning", "Garbage bags, microfiber cloths and cleaning tools."],
  ["🗂️", "Home Organisation", "Simple storage solutions for everyday spaces."],
  ["✨", "Jewellery", "Oxidised silver earrings and traditional styles."],
  ["☔", "Rainwear", "Umbrellas and raincoats for Indian monsoons."],
  ["🆕", "New Arrivals", "Freshly sourced products under evaluation."]
];

const products = [
  {
    icon: "☔",
    category: "Rainwear",
    title: "2-Fold Umbrellas",
    description:
      "Compact umbrellas in practical colours for commuting, travel and everyday monsoon use.",
    href: AMAZON,
    tone: "toneOne"
  },
  {
    icon: "🗑️",
    category: "Cleaning",
    title: "Garbage Bags",
    description:
      "Convenient pack-of-3 garbage bags available in multiple household sizes.",
    href: AMAZON,
    tone: "toneTwo"
  },
  {
    icon: "💎",
    category: "Jewellery",
    title: "Oxidised Silver Earrings",
    description:
      "Traditional statement styles with enamel, pearl and stone detailing.",
    href: AMAZON,
    tone: "toneThree"
  },
  {
    icon: "🧼",
    category: "Cleaning",
    title: "Microfiber Cloths",
    description:
      "Reusable multipurpose cloths for kitchens, glass, vehicles and household cleaning.",
    status: "Coming soon",
    tone: "toneFour"
  },
  {
    icon: "🧊",
    category: "Organisation",
    title: "Fridge Organiser",
    description:
      "Compartment storage designed to separate and organise smaller food items.",
    status: "Coming soon",
    tone: "toneFive"
  },
  {
    icon: "🥘",
    category: "Kitchen",
    title: "Cotton Roti Covers",
    description:
      "Reusable cotton roti covers planned as a practical value pack for Indian homes.",
    status: "Testing phase",
    tone: "toneSix"
  }
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <span className="eyebrow">ATCo · Everyday Essentials</span>
              <h1>
                Useful products.
                <br />
                <em>Chosen with care.</em>
              </h1>
              <p className="heroLead">
                Practical, affordable and thoughtfully selected products for
                modern Indian homes.
              </p>

              <div className="heroActions">
                <a className="button primary" href="#featured">
                  Explore products <ArrowRight size={18} />
                </a>
                <a className="button secondary" href={AMAZON} target="_blank" rel="noreferrer">
                  Visit Amazon Store
                </a>
              </div>

              <div className="trustRow">
                <span><Check size={16} /> Practical value</span>
                <span><Check size={16} /> Clear information</span>
                <span><Check size={16} /> India-focused selection</span>
              </div>
            </div>

            <div className="heroPanel">
              <div className="orb orbOne" />
              <div className="orb orbTwo" />
              <div className="promiseCard">
                <span className="eyebrow">The ATCo promise</span>
                <h2>Everyday essentials that make daily life simpler.</h2>
                <p>Home. Kitchen. Cleaning. Jewellery. Rainwear.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="featureBand">
          <div className="container featureBandGrid">
            <div><Store size={22} /><strong>Marketplace Ready</strong><span>Shop through trusted platforms</span></div>
            <div><ShieldCheck size={22} /><strong>Clear Product Details</strong><span>Accurate and easy to understand</span></div>
            <div><Truck size={22} /><strong>India Focused</strong><span>Products selected for local needs</span></div>
            <div><Sparkles size={22} /><strong>Growing Catalogue</strong><span>New launches added regularly</span></div>
          </div>
        </section>

        <section id="collections" className="section">
          <div className="container">
            <div className="sectionHeading">
              <span className="eyebrow">Shop by collection</span>
              <h2>Essentials for every part of daily life</h2>
              <p>
                A growing range of practical products across the categories that
                matter most in everyday homes.
              </p>
            </div>

            <div className="collectionGrid">
              {collections.map(([icon, title, description]) => (
                <article className="collectionCard" key={title}>
                  <span className="collectionIcon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="section softSection">
          <div className="container">
            <div className="sectionHeading split">
              <div>
                <span className="eyebrow">Featured products</span>
                <h2>Current ATCo favourites</h2>
              </div>
              <p>
                The beta begins with our active categories. More product pages
                and marketplace links will be added as listings go live.
              </p>
            </div>

            <div className="productGrid">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container aboutGrid">
            <div>
              <span className="eyebrow">About ATCo</span>
              <h2>Built around practical value</h2>
              <p>
                ATCo is the consumer-facing brand of Atharva Trading Co. We focus
                on everyday products that solve real needs, are easy to understand
                and offer practical value.
              </p>
              <p>
                Our catalogue is growing across home, kitchen, cleaning,
                jewellery and rainwear. Each product is selected, presented and
                improved with the customer experience in mind.
              </p>
            </div>

            <div className="valueGrid">
              <article><strong>Useful first</strong><span>Products should make daily life simpler.</span></article>
              <article><strong>Clear and honest</strong><span>Accurate details help customers choose confidently.</span></article>
              <article><strong>Practical pricing</strong><span>Value matters as much as presentation.</span></article>
              <article><strong>Constant improvement</strong><span>We test, learn and improve every launch.</span></article>
            </div>
          </div>
        </section>

        <section className="marketplaceSection">
          <div className="container marketplaceInner">
            <div>
              <span className="eyebrow light">Shop ATCo</span>
              <h2>Available through trusted marketplaces</h2>
              <p>
                Browse our current catalogue on Amazon. More marketplace links
                will be added as the beta grows.
              </p>
            </div>
            <a className="button lightButton" href={AMAZON} target="_blank" rel="noreferrer">
              Visit Amazon Store <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contactGrid">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Questions, wholesale enquiries or partnerships?</h2>
              <p>Email us and we will respond as soon as possible.</p>
              <a className="emailCard" href="mailto:info@atharvatradingco.com">
                <Mail size={22} />
                <span>
                  <strong>Business email</strong>
                  <small>info@atharvatradingco.com</small>
                </span>
              </a>
            </div>

            <aside className="betaCard">
              <span className="eyebrow">ATCo Beta</span>
              <h3>Built to improve continuously</h3>
              <p>
                This is the first public version of our website. Product images,
                product pages, marketplace links and new collections will keep
                improving as the catalogue grows.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerGrid">
          <div>
            <img src="/atco-logo.jpg" alt="ATCo logo" />
            <p>Everyday Essentials</p>
          </div>
          <div><strong>Explore</strong><a href="#collections">Collections</a><a href="#featured">Featured</a><a href="#about">About</a></div>
          <div><strong>Legal</strong><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms & Conditions</a></div>
          <div><strong>Business</strong><a href="mailto:info@atharvatradingco.com">Email us</a><a href={AMAZON} target="_blank" rel="noreferrer">Amazon Store</a></div>
        </div>
        <div className="container footerBottom">
          © 2026 Atharva Trading Co. ATCo is a consumer brand of Atharva Trading Co.
        </div>
      </footer>
    </>
  );
}
