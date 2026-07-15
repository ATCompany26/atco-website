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
  {
    image: "/manual-chopper.png.png",
    title: "Kitchen Essentials",
    description: "Manual push and pull choppers for convenient everyday cooking."
  },
  {
    image: "/microfiber-cloths.png.png",
    title: "Cleaning Essentials",
    description: "Reusable cleaning cloths and practical household cleaning supplies."
  },
  {
    image: "/garbage-bags-medium.png.png",
    title: "Waste Management",
    description: "Dustbin covers and garbage bags available in useful household sizes."
  },
  {
    image: "/oxidised-earrings-lavender.png.png",
    title: "Fashion Jewellery",
    description: "Oxidised silver earrings with traditional and contemporary styling."
  },
  {
    image: "/cotton-pants-white.png.png",
    title: "Comfort Wear",
    description: "Comfortable cotton drawstring pants for relaxed everyday wear."
  },
  {
    image: "/umbrella-black.png",
    title: "Rainwear",
    description: "Compact umbrellas and practical rainwear for Indian monsoons."
  }
];

const products = [
  {
    image: "/manual-chopper.png.png",
    category: "Kitchen",
    title: "750ml Manual Pull Chopper",
    description:
      "Pull-cord food chopper with three stainless steel blades for quick everyday food preparation.",
    href: AMAZON
  },
  {
    image: "/umbrella-black.png",
    category: "Rainwear",
    title: "2-Fold Umbrella",
    description:
      "Compact manual umbrella with a 40-inch canopy for commuting, travel and monsoon use.",
    href: AMAZON
  },
  {
    image: "/garbage-bags-medium.png.png",
    category: "Cleaning",
    title: "Garbage Bags",
    description:
      "Strong non-chlorinated oxo-degradable garbage bags available in multiple household sizes.",
    href: AMAZON
  },
  {
    image: "/microfiber-cloths.png.png",
    category: "Cleaning",
    title: "Microfiber Cleaning Cloths",
    description:
      "Highly absorbent reusable microfiber cloths for home, kitchen, glass and vehicle cleaning.",
    status: "Coming soon"
  },
  {
    image: "/oxidised-earrings-lavender.png.png",
    category: "Jewellery",
    title: "Oxidised Silver Earrings",
    description:
      "Elegant oxidised silver earrings featuring stone, enamel and pearl detailing.",
    href: AMAZON
  },
  {
    image: "/cotton-pants-white.png.png",
    category: "Comfort Wear",
    title: "Comfy Cotton Pants",
    description:
      "Comfortable cotton drawstring pants designed for relaxed and practical everyday wear.",
    status: "Coming soon"
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
              <span className="eyebrow">
                ATCo · Everyday Essentials
              </span>

              <h1>
                Everyday essentials.
                <br />
                <em>Thoughtfully chosen.</em>
              </h1>

              <p className="heroLead">
                Discover practical products for your kitchen, home, cleaning,
                fashion and everyday lifestyle.
              </p>

              <div className="heroActions">
                <a className="button primary" href="#featured">
                  Explore products <ArrowRight size={18} />
                </a>

                <a
                  className="button secondary"
                  href={AMAZON}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Amazon Store
                </a>
              </div>

              <div className="trustRow">
                <span>
                  <Check size={16} /> Practical value
                </span>
                <span>
                  <Check size={16} /> Clear information
                </span>
                <span>
                  <Check size={16} /> India-focused selection
                </span>
              </div>
            </div>

            <div className="heroPanel">
              <div className="orb orbOne" />
              <div className="orb orbTwo" />

              <div className="heroShowcase">
                <div className="heroShowcaseMain">
                  <img
                    src="/manual-chopper.png.png"
                    alt="ATCo manual pull chopper"
                  />
                </div>

                <div className="heroShowcaseSmall heroTop">
                  <img
                    src="/oxidised-earrings-lavender.png.png"
                    alt="ATCo oxidised silver earrings"
                  />
                </div>

                <div className="heroShowcaseSmall heroBottom">
                  <img
                    src="/umbrella-black.png"
                    alt="ATCo two-fold umbrella"
                  />
                </div>

                <div className="heroShowcaseLabel">
                  <span className="eyebrow">Featured collection</span>
                  <strong>Useful products for everyday living</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featureBand">
          <div className="container featureBandGrid">
            <div>
              <Store size={22} />
              <strong>Trusted Marketplaces</strong>
              <span>Shop through established platforms</span>
            </div>

            <div>
              <ShieldCheck size={22} />
              <strong>Clear Product Details</strong>
              <span>Accurate and easy to understand</span>
            </div>

            <div>
              <Truck size={22} />
              <strong>India Focused</strong>
              <span>Products selected for local needs</span>
            </div>

            <div>
              <Sparkles size={22} />
              <strong>Growing Catalogue</strong>
              <span>New products added regularly</span>
            </div>
          </div>
        </section>

        <section id="collections" className="section">
          <div className="container">
            <div className="sectionHeading">
              <span className="eyebrow">Shop by collection</span>
              <h2>Essentials for every part of daily life</h2>
              <p>
                Explore a growing selection of useful products across home,
                kitchen, cleaning, jewellery, comfort wear and rainwear.
              </p>
            </div>

            <div className="collectionGrid">
              {collections.map((collection) => (
                <article className="collectionCard" key={collection.title}>
                  <div className="collectionImage">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="collectionBody">
                    <h3>{collection.title}</h3>
                    <p>{collection.description}</p>
                    <a href="#featured" className="collectionLink">
                      Explore collection <ArrowRight size={16} />
                    </a>
                  </div>
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
                Explore our active catalogue and upcoming additions. Products
                currently available can be purchased through our marketplace
                store.
              </p>
            </div>

            <div className="productGrid">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section whySection">
          <div className="container">
            <div className="sectionHeading centeredHeading">
              <span className="eyebrow">Why choose ATCo</span>
              <h2>Practical value without unnecessary complexity</h2>
              <p>
                We focus on useful products, honest information and a reliable
                shopping experience.
              </p>
            </div>

            <div className="whyGrid">
              <article>
                <ShieldCheck size={28} />
                <h3>Carefully Selected</h3>
                <p>
                  Products are evaluated for usefulness, presentation and
                  everyday value.
                </p>
              </article>

              <article>
                <Store size={28} />
                <h3>Trusted Platforms</h3>
                <p>
                  Purchase through established marketplaces with familiar
                  payment and delivery systems.
                </p>
              </article>

              <article>
                <Truck size={28} />
                <h3>Made for Indian Needs</h3>
                <p>
                  Our growing range is selected with Indian homes, lifestyles
                  and seasons in mind.
                </p>
              </article>

              <article>
                <Sparkles size={28} />
                <h3>Constant Improvement</h3>
                <p>
                  We test, learn and improve our product selection with every
                  new launch.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <div className="container aboutGrid">
            <div>
              <span className="eyebrow">About ATCo</span>
              <h2>Everyday essentials. Thoughtfully chosen.</h2>

              <p>
                ATCo is the consumer-facing brand of Atharva Trading Co. We
                bring together practical products that make everyday living
                simpler.
              </p>

              <p>
                Our catalogue spans kitchen essentials, cleaning supplies,
                jewellery, comfort wear, rainwear and home organisation.
              </p>

              <a className="textLink aboutLink" href="#contact">
                Contact ATCo <ArrowRight size={17} />
              </a>
            </div>

            <div className="valueGrid">
              <article>
                <strong>Useful first</strong>
                <span>Every product should solve a genuine everyday need.</span>
              </article>

              <article>
                <strong>Clear and honest</strong>
                <span>Accurate information supports confident decisions.</span>
              </article>

              <article>
                <strong>Practical pricing</strong>
                <span>Value matters just as much as presentation.</span>
              </article>

              <article>
                <strong>Built to grow</strong>
                <span>Our catalogue will keep expanding across categories.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="marketplaceSection">
          <div className="container marketplaceInner">
            <div>
              <span className="eyebrow light">Shop ATCo</span>
              <h2>Available through trusted marketplaces</h2>
              <p>
                Browse our currently available catalogue through the official
                ATCo Amazon storefront.
              </p>
            </div>

            <a
              className="button lightButton"
              href={AMAZON}
              target="_blank"
              rel="noreferrer"
            >
              Visit Amazon Store <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contactGrid">
            <div>
              <span className="eyebrow">Contact ATCo</span>
              <h2>Questions, wholesale enquiries or partnerships?</h2>
              <p>
                Send us an email and our team will respond as soon as possible.
              </p>

              <a
                className="emailCard"
                href="mailto:info@atharvatradingco.com"
              >
                <Mail size={22} />

                <span>
                  <strong>Business email</strong>
                  <small>info@atharvatradingco.com</small>
                </span>
              </a>
            </div>

            <aside className="contactCard">
              <span className="eyebrow">Growing with purpose</span>
              <h3>A catalogue designed to evolve</h3>
              <p>
                New products, category pages and individual product details
                will continue to be added as ATCo grows.
              </p>

              <div className="contactPoints">
                <span>
                  <Check size={16} /> New product launches
                </span>
                <span>
                  <Check size={16} /> Marketplace expansion
                </span>
                <span>
                  <Check size={16} /> Direct shopping in the future
                </span>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerGrid">
          <div className="footerBrand">
            <img src="/atco-logo.jpg" alt="ATCo logo" />
            <p>Everyday Essentials. Thoughtfully Chosen.</p>
          </div>

          <div>
            <strong>Explore</strong>
            <a href="#collections">Collections</a>
            <a href="#featured">Featured Products</a>
            <a href="#about">About ATCo</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <strong>Legal</strong>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms & Conditions</a>
          </div>

          <div>
            <strong>Business</strong>
            <a href="mailto:info@atharvatradingco.com">Email us</a>
            <a href={AMAZON} target="_blank" rel="noreferrer">
              Amazon Store
            </a>
          </div>
        </div>

        <div className="container footerBottom">
          © 2026 Atharva Trading Co. ATCo is a consumer brand of Atharva
          Trading Co.
        </div>
      </footer>
    </>
  );
}
