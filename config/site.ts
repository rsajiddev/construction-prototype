export const siteConfig = {
  companyName: "Vanguard Built Developments Ltd",
  shortName: "Vanguard Built",
  tagline: "Building Foundations. Shaping Futures.",
  subTagline: "Chartered building contractors, property developers, bespoke interior specialists, and premier building material stockists based in London, serving the UK and internationally.",
  location: "One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom",
  phone: "+44 (0) 20 7946 0912",
  phoneRaw: "+442079460912",
  email: "enquiries@vanguardbuilt.co.uk",
  whatsapp: "+447700900148",
  whatsappUrl: "https://wa.me/447700900148?text=Hello%20Vanguard%20Built,%20I%20would%20like%20to%20discuss%20a%20project.",
  workingHours: "Monday – Friday: 08:00 – 18:00 | Saturday: 09:00 – 14:00 GMT",

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Materials", href: "#materials" },
    { label: "Interiors", href: "#interiors" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  statistics: [
    { label: "Years of Industry Excellence", value: 18, suffix: "+" },
    { label: "Delivered Major Programmes", value: 240, suffix: "+" },
    { label: "Chartered Engineers & Surveyors", value: 65, suffix: "+" },
    { label: "British Standard Compliance", value: 100, suffix: "%" },
  ],

  accreditations: [
    { name: "CIOB Chartered Building Company", code: "Chartered Institute of Building" },
    { name: "RIBA Chartered Practice", code: "Royal Institute of British Architects" },
    { name: "ISO 9001:2015 & ISO 14001", code: "Quality & Environmental Systems" },
    { name: "CHAS Premium Plus", code: "Contractors Health & Safety Scheme" },
  ],

  services: [
    {
      id: "construction",
      title: "Commercial & Civil Construction",
      description: "Full-cycle general contracting, groundworks, structural steel erection, and multi-storey reinforced concrete frameworks built to rigorous British engineering codes.",
      tag: "Contracting",
    },
    {
      id: "property-development",
      title: "Turnkey Property Development",
      description: "End-to-end residential schemes and commercial property assets from feasibility studies, planning permissions, and architectural draughtsmanship through to completion.",
      tag: "Development",
    },
    {
      id: "interior-fitout",
      title: "Interior Design & Fit-Out",
      description: "Category A & B corporate workspace fit-outs and high-end residential interiors featuring tailored joinery, acoustic zoning, and luxury finishing.",
      tag: "Interiors",
    },
    {
      id: "materials-supply",
      title: "Building Materials Supply",
      description: "Bulk wholesale merchanting of certified structural steel, British-standard cements, facing bricks, designer tiling, sanitaryware, and mechanical supplies.",
      tag: "Wholesale",
    },
    {
      id: "renovation",
      title: "Refurbishment & Restoration",
      description: "Specialist structural retrofitting, historic facade conservation, and deep thermal decarbonisation upgrades across listed and period properties.",
      tag: "Conservation",
    },
    {
      id: "project-management",
      title: "Quantity Surveying & Management",
      description: "Stringent project programme management, cost controls, CDM 2015 health and safety coordination, and independent quality auditing.",
      tag: "Management",
    },
  ],

  materialsCategories: [
    { title: "Cements, Aggregates & Ready-Mix", grade: "BS EN 197-1 CEM I & II", items: "Sulphate-resistant cement, high-slump ready-mix concrete, sharp sand, limestone, crushed granite ballasts." },
    { title: "Structural Steel & Rebar", grade: "BS 4449 Grade B500B / S355JR", items: "High-yield deformed rebars, custom cut-and-bend fabrications, universal beams (UB), universal columns (UC)." },
    { title: "Facing Bricks & Engineering Blocks", grade: "BS EN 771-1 Class A & B", items: "London stock wirecut bricks, high-density 7.3N concrete blocks, thermal aerated masonry, architectural slip systems." },
    { title: "Porcelain, Marble & Ceramic Tiles", grade: "R10 / R11 Slip-Rated Commercial", items: "Large-format sintered stone slabs, Italian honed marbles, anti-slip external pavers, vitrified commercial floorings." },
    { title: "Architectural Sanitaryware", grade: "WRAS Certified Fixtures", items: "Concealed dual-flush cisterns, anti-microbial vitreous china, brushed brass thermostatic mixers, disabled Doc M packs." },
    { title: "Paints, Primers & Thermal Finishes", grade: "Low-VOC Class 0 Fire-Rated", items: "Silicate masonry breathers, scrub-resistant eggshell coatings, epoxy floor resins, intumescent fireproofing sprays." },
    { title: "LV Electricals & Cable Systems", grade: "BS 7671 (18th Edition)", items: "Steel wire armoured (SWA) cables, three-phase distribution boards, commercial LED arrays, EV charger infrastructure." },
    { title: "Plumbing, HVAC & Drainage", grade: "BS EN 12056 / BS EN 752", items: "Multi-layer press-fit barrier pipework, commercial air handling ductwork, cast iron acoustic soil and storm drainage." },
  ],

  projects: [
    { id: 1, title: "The Shoreditch Tech Interchange", category: "Commercial", location: "Hackney, London", image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80", description: "A 9-storey low-carbon commercial hub utilising exposed post-tensioned concrete and solar-tracking kinetic facades.", scope: "Full Design & Build (£24.5M)" },
    { id: 2, title: "Kensington Crest Luxury Mansions", category: "Residential", location: "Royal Borough of Kensington, London", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", description: "Four bespoke residences featuring subterranean swimming facilities, private cinema vaults, and bookmatched marble.", scope: "Turnkey Development (£18.2M)" },
    { id: 3, title: "Mayfair Corporate Wealth Suites", category: "Interiors", location: "Berkeley Square, London", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", description: "Cat-B bespoke interior fit-out featuring fluted walnut panelling, acoustic wool baffles, and smart circadian lighting.", scope: "Interior Architectural Fit-Out (£4.8M)" },
    { id: 4, title: "Canary Riverside Quay Logistics Hub", category: "Commercial", location: "Isle of Dogs, London", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", description: "Fast-track erection of 14,000 m² heavy logistics facility with laser-screeded slab flooring.", scope: "Structural Engineering & Civils (£14.1M)" },
    { id: 5, title: "St John's Wood Modernist Villa", category: "Residential", location: "St John's Wood, London", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", description: "Minimalist cantilevered architectural home with triple-glazed frameless structural glass envelopes.", scope: "Main Contractor (£7.4M)" },
    { id: 6, title: "Belgravia Heritage Townhouse Restoration", category: "Interiors", location: "Eaton Square, London", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", description: "Grade II listed Regency townhouse renovation; preservation of fibrous plaster cornices with concealed smart services.", scope: "Restoration & Fit-Out (£6.1M)" },
  ],

  testimonials: [
    { quote: "Vanguard Built executed our multi-storey commercial headquarters ahead of programme and within the agreed GMP. Direct materials pipeline eliminated supply delays.", author: "Alistair Sterling", role: "Director of Capital Estates, Meridian Global Asset Management", location: "City of London", rating: 5 },
    { quote: "The interior fit-out of our flagship Mayfair gallery was executed with breathtaking draughtsmanship. The joinery tolerances reflect the finest British contracting.", author: "Helena Fitzalan-Howard", role: "Managing Principal, Howard Fine Art Partners", location: "Mayfair, London", rating: 5 },
    { quote: "Reliable bulk materials supply is rare in today’s volatile market. Vanguard Built’s direct pipeline for B500B rebar saved our programme six valuable weeks.", author: "Marcus Davenport", role: "Chief Operating Officer, Davenport Residential Plc", location: "Surrey & Hampshire", rating: 5 },
  ],

  whyChooseUs: [
    { title: "Fully Certified British Standards", desc: "All works adhere strictly to the Building Regulations 2010, Eurocodes, and CIOB professional codes." },
    { title: "Direct Merchant Supply Chain", desc: "By holding direct trade distribution for key materials, we eliminate middleman markup and guarantee delivery certainty." },
    { title: "Transparent Guaranteed Max Price (GMP)", desc: "No hidden extras. Open-book commercial accounting with rigorous quantity surveyor oversight throughout the lifecycle." },
    { title: "Uncompromising CDM & HSE Safety", desc: "CHAS Premium Plus registered with an industry-leading zero Reportable Incident (RIDDOR) safety track record." },
    { title: "Full In-House Multi-Disciplinary Team", desc: "From chartered civil engineers to master carpenters, we maintain complete operational control under one organisation." },
    { title: "Dedicated 10-Year Structural Warranty", desc: "Complete post-handover peace of mind supported by comprehensive latent defects insurance and responsive aftercare teams." },
  ],
};