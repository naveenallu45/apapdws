import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../page.css';

// Enhanced data with detailed content, bullet points, and side headings.
const programsData: Record<string, { title: string, introduction: string, fullDesc: string, img: string, objectives: string[], features: string[], impact: string[], beneficiaries: string }> = {
  "agricultural-training": {
    title: "Agricultural Training",
    img: "/images/farmer_training.png",
    introduction: "Modernizing Indian agriculture through precision farming and sustainable organic practices.",
    fullDesc: "Agriculture is the backbone of our rural economy, yet many farmers struggle with outdated methods and high input costs. Our Agricultural Training program empowers local farmers with the latest techniques in organic, sustainable, and technology-driven farming. By shifting away from chemical dependency and utilizing modern practices, farmers can restore soil health naturally, improve crop resilience against climate change, and significantly increase their yield. We do this by bringing experts directly to the villages, hosting weekly on-ground workshops, practical field demonstrations, and offering one-on-one consultation sessions to tailor solutions to individual farm needs.",
    objectives: [
      "Transition farmers from chemical-heavy to organic and natural farming.",
      "Reduce the financial burden of costly chemical fertilizers.",
      "Promote climate-resilient, high-yield crop varieties to ensure food security."
    ],
    features: [
      "Comprehensive organic farming workshops and hands-on tutorials",
      "Free scientific soil testing and personalized crop advisory",
      "Demonstrations of modern, cost-effective machinery and smart tools",
      "Training in eco-friendly pest and weed management strategies",
      "Assistance in securing government agricultural subsidies"
    ],
    impact: [
      "Increased average crop yield by 30% across participating villages",
      "Significantly reduced chemical fertilizer dependency, saving farmers money",
      "Trained, certified, and actively supported over 5,000 local farmers",
      "Rehabilitated over 1,000 acres of degraded agricultural land"
    ],
    beneficiaries: "Local Farmers, Agricultural Workers, Landless Laborers"
  },
  "self-help-groups": {
    title: "Self Help Groups",
    img: "/images/women_shg.png",
    introduction: "Empowering rural women through financial independence, leadership, and collective community support.",
    fullDesc: "Economic independence is the first step towards gender equality and social empowerment. We facilitate the creation and sustained operation of women-led Self Help Groups (SHGs) across rural districts. These groups serve as a vital platform for women to meet regularly, pool their modest financial resources, and secure micro-loans to start or expand small businesses. Beyond just financial support, our SHG initiative is a powerful tool for social change, teaching vital leadership, negotiation, and financial literacy skills. This initiative has transformed hundreds of families by breaking the cycle of poverty and providing a steady, reliable secondary income source.",
    objectives: [
      "Inculcate a habit of systematic savings among rural women.",
      "Provide accessible micro-credit without the need for strict collateral.",
      "Foster women leadership and active community participation."
    ],
    features: [
      "Micro-finance and highly accessible internal savings systems",
      "Vocational training in tailoring, handicrafts, and local food processing",
      "Leadership, entrepreneurship, and confidence-building workshops",
      "Advanced financial literacy camps (banking, digital payments)",
      "Market linkage support to help sell locally manufactured products"
    ],
    impact: [
      "Formed 200+ highly active and financially independent women-led groups",
      "Created and funded 500+ successful micro-enterprises",
      "Improved long-term household financial stability and children's education rates",
      "Generated a collective internal savings pool exceeding ₹50 Lakhs"
    ],
    beneficiaries: "Rural Women, Marginalized Communities, Single Mothers"
  },
  "health-camps": {
    title: "Health Camps",
    img: "/images/health_camp.png",
    introduction: "Bringing essential healthcare directly to the doorsteps of remote and underserved rural communities.",
    fullDesc: "Access to quality, timely healthcare is a fundamental human right, yet many rural residents are forced to travel vast distances and spend heavily on basic medical consultations. Our comprehensive Health Camps are designed to bridge this gap by bringing free medical check-ups, diagnostics, basic medicines, and vital health awareness directly to remote villages. By partnering with experienced volunteer doctors, local hospitals, and medical students, we ensure that rural communities receive timely diagnoses and effective care for both common ailments and severe chronic conditions before they become critical.",
    objectives: [
      "Provide immediate medical relief to areas without nearby hospital access.",
      "Identify and manage chronic lifestyle diseases like diabetes and hypertension early.",
      "Spread awareness regarding sanitation, maternal health, and child nutrition."
    ],
    features: [
      "Free general physician consultations and initial diagnostics",
      "Distribution of essential vitamins, supplements, and prescribed medicines",
      "Specialized screening camps for vision, dental, and women's health issues",
      "Community workshops focusing on hygiene, sanitation, and disease prevention",
      "Referral support for patients requiring advanced surgical procedures"
    ],
    impact: [
      "Reached, diagnosed, and treated 15,000+ individuals over the last three years",
      "Identified and initiated treatment for 2,000+ unmanaged chronic cases",
      "Improved overall village sanitation practices, drastically reducing seasonal infections",
      "Successfully performed free cataract surgeries for 300+ elderly residents"
    ],
    beneficiaries: "Villagers, Elderly Citizens, Pregnant Women, Children"
  },
  "skill-development": {
    title: "Skill Development",
    img: "/images/skill_training.png",
    introduction: "Bridging the rural-urban divide by equipping youth with industry-relevant skills and secure employment.",
    fullDesc: "The youth form the core of our nation’s future, but unemployment in rural areas remains a significant crisis due to a lack of practical skills. Our Skill Development centers operate as hubs of opportunity, providing high-quality vocational training for unemployed, ambitious youth and school dropouts. Courses are carefully curated based on current market demands, ranging from basic computer literacy and modern tailoring to advanced technical skills required in mechanical and IT industries. Our ultimate goal is not just training, but direct placement—equipping the next generation with the exact tools they need to secure stable employment, build successful careers, and support their families.",
    objectives: [
      "Reduce rural youth unemployment through practical, market-driven training.",
      "Prevent forced urban migration by creating local entrepreneurial opportunities.",
      "Instill confidence through personality development and English communication skills."
    ],
    features: [
      "Comprehensive basic and advanced computer literacy classes",
      "Practical electrician, plumbing, mobile repair, and mechanical courses",
      "Soft skills, spoken English, and intensive interview preparation sessions",
      "Direct job placement and internship assistance with industry partners",
      "Post-placement tracking and continuous career counseling"
    ],
    impact: [
      "Trained over 3,000 ambitious youths in various specialized trades",
      "Secured stable jobs for 1,200+ candidates in top regional and national firms",
      "Substantially boosted rural employment rates in our target districts",
      "Helped 400+ graduates launch their own successful local servicing businesses"
    ],
    beneficiaries: "Unemployed Youth, School Dropouts, Young Adults"
  },
  "environmental-protection": {
    title: "Environmental Protection",
    img: "/images/tree_plantation.png",
    introduction: "Preserving natural ecosystems and fighting climate change through grass-roots community action.",
    fullDesc: "Climate change is already affecting weather patterns and agricultural stability. Protecting our environment is no longer optional; it is crucial for sustainable rural life and global survival. Our Environmental Protection initiatives take a grass-roots approach, mobilizing entire communities to take ownership of their local ecosystems. We focus heavily on massive tree plantation drives to increase green cover, aggressively promote the transition to renewable energy sources, and conduct widespread educational campaigns about effective waste management and eco-friendly daily practices to preserve our soils, rivers, and forests.",
    objectives: [
      "Increase localized forest cover and combat soil erosion.",
      "Reduce carbon footprints by transitioning villages to solar and biogas energy.",
      "Eliminate single-use plastics from rural ecosystems and water bodies."
    ],
    features: [
      "Community-driven mass tree plantation and strict afforestation drives",
      "Solar panel awareness, subsidies assistance, and rural installation",
      "Plastic waste reduction, segregation, and effective recycling campaigns",
      "Eco-friendly farming and biodiversity preservation advocacy",
      "Workshops on creating organic compost from household waste"
    ],
    impact: [
      "Successfully planted, nurtured, and maintained 50,000+ native saplings",
      "Converted 5 entire villages to run on 50% sustainable solar usage",
      "Reduced local plastic waste by over 40% through strict community initiatives",
      "Restored biodiversity to 3 major local water bodies"
    ],
    beneficiaries: "Local Ecosystems, Farmers, the General Public, Future Generations"
  },
  "water-management": {
    title: "Water Management",
    img: "/images/drone_farming.png",
    introduction: "Securing the future of farming by conserving every drop of water and recharging depleted aquifers.",
    fullDesc: "Water scarcity is arguably the most severe threat facing modern agriculture. In regions suffering from unpredictable monsoons and rapidly depleting water tables, traditional flood irrigation is no longer viable. Our Water Management program acts as a critical intervention, rigorously educating farmers on highly efficient modern irrigation methods, large-scale rainwater harvesting, and scientific groundwater recharging techniques. By adopting these sustainable methodologies, communities can halt the decline of their water reserves, ensure a reliable water supply for their crops year-round, and protect themselves against devastating droughts.",
    objectives: [
      "Drastically reduce agricultural water wastage through micro-irrigation.",
      "Capture and store seasonal monsoon rains for year-round agricultural use.",
      "Recharge and protect underground aquifers to secure long-term water availability."
    ],
    features: [
      "Drip, micro, and sprinkler irrigation system training sessions",
      "Community-led rainwater harvesting pit design and construction",
      "Effective groundwater recharge mechanisms and watershed management",
      "Water quality testing and aggressive regional conservation drives",
      "Desilting and rejuvenation of traditional village ponds and lakes"
    ],
    impact: [
      "Saved tens of millions of liters of vital agricultural water annually",
      "Successfully desilted, deepened, and restored 10+ local ponds and lakes",
      "Trained 2,000+ farmers to permanently transition to modern drip irrigation",
      "Observed a 15% measurable rise in the groundwater table in target areas"
    ],
    beneficiaries: "Farmers, Village Communities, Regional Ecology"
  }
};

export default async function ProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = programsData[id];

  if (!program) {
    return (
      <div className="section" style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Program not found</h2>
        <Link href="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <main>
      <nav className="navbar scrolled">
        <div className="container">
          <Link href="/" className="logo">
            <img src="/logo.jpeg" alt="APAPDWS Logo" className="logo-img" />
            <span className="logo-text">APAPDWS</span>
          </Link>
        </div>
      </nav>

      <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', paddingBottom: '4rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          {/* Back Button */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
            <Link 
              href="/" 
              className="btn" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white', 
                padding: '0.6rem 1.25rem', 
                borderRadius: '8px',
                fontWeight: 600,
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>

          <div style={{ padding: '0' }}>
            <div>
              <div className="section-title" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{program.title}</div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '2rem' }}>
                {program.introduction}
              </h4>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '3rem' }}>
                {program.fullDesc}
              </p>
              
              <div className="about-grid" style={{ alignItems: 'flex-start', gap: '3rem' }}>
                <div>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                      Key Objectives
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {program.objectives.map((obj, idx) => (
                        <li key={idx} style={{ marginBottom: '0.75rem', position: 'relative', paddingLeft: '1.5rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                      Features & Activities
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {program.features.map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: '0.75rem', position: 'relative', paddingLeft: '1.5rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                      Our Impact
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {program.impact.map((imp, idx) => (
                        <li key={idx} style={{ marginBottom: '0.75rem', position: 'relative', paddingLeft: '1.5rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                       Target Beneficiaries
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', paddingLeft: '1.5rem' }}>{program.beneficiaries}</p>
                  </div>
                  
                  <div style={{ marginTop: '3rem', paddingLeft: '1.5rem' }}>
                    <Link href="/#contact" className="btn btn-primary">Join This Program</Link>
                  </div>
                </div>
                
                <div style={{ position: 'sticky', top: '120px' }}>
                  <img src={program.img} alt={program.title} style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
