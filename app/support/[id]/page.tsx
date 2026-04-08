import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../../page.css';

const supportData: Record<string, { title: string, introduction: string, fullDesc: string, img: string, objectives: string[], features: string[], impact: string[], beneficiaries: string }> = {
  "financial-support": {
    title: "Financial Support",
    img: "/images/rural_finance_support.png",
    introduction: "Providing crucial financial assistance to farmers, small business owners, and marginalized families.",
    fullDesc: "Financial stability is essential for growth and security. Our Financial Support initiatives are designed to help vulnerable communities access funds for essential needs, be it for agricultural investments, medical emergencies, or launching a micro-enterprise. We work closely with banking institutions and government schemes to ensure that eligible individuals receive the financial aid they deserve without falling into debt traps with private moneylenders.",
    objectives: [
      "Facilitate access to low-interest loans and micro-finance for small-scale entrepreneurs.",
      "Help farmers navigate and secure government financial subsidies.",
      "Provide emergency relief funds for critical medical and natural disaster situations."
    ],
    features: [
      "Assistance with loan applications and banking formalities",
      "Formation and funding of community savings groups",
      "Financial literacy and management workshops",
      "Direct monetary aid for extreme poverty cases",
      "Crowdfunding for specialized community needs"
    ],
    impact: [
      "Helped over 1,000 families clear high-interest informal debts",
      "Facilitated the processing of ₹1 Crore+ in agricultural subsidies",
      "Enabled the start of 300+ new micro-businesses",
      "Established secure emergency funding pools in 50+ villages"
    ],
    beneficiaries: "Debt-ridden Farmers, Widows, Micro-entrepreneurs, Low-income Families"
  },
  "social-support": {
    title: "Social Support",
    img: "/images/village_social_gathering.png",
    introduction: "Building inclusive, supportive communities through advocacy and collective action.",
    fullDesc: "Social isolation and discrimination often compound the struggles of rural and marginalized communities. Our Social Support platform emphasizes unity, equality, and collective problem-solving. We mediate community disputes, champion the rights of the underprivileged, and ensure that marginalized groups are integrated into mainstream developmental programs. By fostering a culture of mutual help, we aim to eliminate social barriers.",
    objectives: [
      "Eradicate social discrimination and promote communal harmony.",
      "Support marginalized groups including the elderly, disabled, and orphans.",
      "Create platforms for open community dialogue and dispute resolution."
    ],
    features: [
      "Community mediation and localized grievance redressal",
      "Advocacy for the rights of the differently-abled",
      "Support systems and care homes for the destitute and elderly",
      "Awareness campaigns on gender equality and social rights",
      "Rehabilitation for victims of domestic and social abuse"
    ],
    impact: [
      "Successfully mediated and resolved hundreds of local family and land disputes",
      "Established community support circles for marginalized individuals",
      "Conducted extensive awareness drives reaching over 20,000 people",
      "Assisted 500+ differently-abled individuals in acquiring disability certificates and aids"
    ],
    beneficiaries: "Elderly, Differently-abled, Orphans, Marginalized Communities"
  },
  "educational-support": {
    title: "Educational Support",
    img: "/images/rural_education_kids.png",
    introduction: "Ensuring every child and adult has access to quality education and continuous learning.",
    fullDesc: "Education is the most powerful tool for breaking the cycle of poverty. We believe that no child should be deprived of learning due to financial constraints, and no adult should be left behind due to illiteracy. Our Educational Support programs range from providing basic school supplies to rural children to conducting adult literacy camps, ensuring that knowledge reaches every corner of our society.",
    objectives: [
      "Reduce the school dropout rate among rural and underprivileged children.",
      "Promote adult literacy to empower older generations in daily transactions.",
      "Provide scholarships and financial aid for higher education."
    ],
    features: [
      "Distribution of free textbooks, uniforms, and digital tablets",
      "After-school tutoring centers built within villages",
      "Adult literacy programs focusing on basic reading, writing, and math",
      "Merit-based scholarships for exceptionally talented rural students",
      "Setting up community libraries and resource centers"
    ],
    impact: [
      "Distributed school supplies to 10,000+ underprivileged students",
      "Helped 2,000+ adults achieve basic functional literacy",
      "Awarded full scholarships to 150 students pursuing higher education",
      "Established 20 active community libraries in remote areas"
    ],
    beneficiaries: "School Children, Illiterate Adults, College Aspirants from Low-income Families"
  },
  "health-support": {
    title: "Health Support",
    img: "/images/rural_medical_camp.png",
    introduction: "Advocating for accessible healthcare, nutrition, and well-being for all rural residents.",
    fullDesc: "Good health is the foundation of a productive life. Our Health Support initiative goes beyond conducting occasional camps; it aims to build a sustainable, continuous healthcare network. We focus on preventive care, maternal and infant health, and managing chronic illnesses. We also work to improve local sanitation standards as a key preventive measure against seasonal outbreaks.",
    objectives: [
      "Ensure timely medical interventions for critical illnesses.",
      "Reduce maternal and infant mortality rates through proper nutrition and care.",
      "Establish sustainable local sanitation systems."
    ],
    features: [
      "Nutritional support programs for pregnant women and nursing mothers",
      "Assistance in utilizing government health insurance schemes (e.g., Ayushman Bharat)",
      "Free distribution of sanitary pads and hygiene kits",
      "Ambulance support for emergency medical transport from remote villages",
      "Regular deworming and immunization drives in schools"
    ],
    impact: [
      "Improved the nutritional metrics of 3,000+ expecting mothers",
      "Helped 5,000+ families enroll in national health insurance programs",
      "Provided life-saving emergency transport for over 400 critical patients",
      "Significantly reduced the incidence of waterborne diseases in target areas"
    ],
    beneficiaries: "Expecting Mothers, Infants, Chronic Patients, General Villagers"
  },
  "legal-support": {
    title: "Legal Support",
    img: "/images/village_legal_awareness.png",
    introduction: "Providing free legal counsel and rights awareness to protect the vulnerable from exploitation.",
    fullDesc: "Many rural individuals fall victim to land grabs, unfair labor practices, and domestic disputes simply because they are unaware of their legal rights and cannot afford professional counsel. Our Legal Support services aim to democratize access to justice. We provide pro-bono legal consultation, help with drafting essential documents, and conduct extensive 'Know Your Rights' campaigns.",
    objectives: [
      "Protect farmers against unfair land acquisitions and tenant disputes.",
      "Provide accessible legal aid for women facing domestic violence.",
      "Educate rural communities about fundamental civil rights."
    ],
    features: [
      "Free legal advisory clinics held monthly in regional centers",
      "Assistance in property registration and land dispute resolution",
      "Support in filing FIRs and navigating the local judicial system",
      "Awareness seminars on labor laws, women's rights, and child protection",
      "Mediation services to resolve minor civil disputes outside of court"
    ],
    impact: [
      "Successfully resolved 250+ long-standing land and property disputes",
      "Provided crucial legal intervention for 100+ domestic violence survivors",
      "Educated over 5,000 individuals on their basic legal rights",
      "Helped numerous laborers secure unpaid or unfairly withheld wages"
    ],
    beneficiaries: "Farmers, Laborers, Women in Distress, Marginalized Groups"
  },
  "environmental-support": {
    title: "Environmental Support",
    img: "/images/community_tree_planting.png",
    introduction: "Championing eco-friendly initiatives and sustainable living practices for a healthier planet.",
    fullDesc: "A safe, clean environment is vital for agriculture and human health. Our Environmental Support initiatives are designed to foster harmony between human activities and nature. We provide resources and education to help communities transition towards sustainable methods, focusing on waste management, reducing chemical usage, and conserving natural habitats.",
    objectives: [
      "Promote zero-waste villages and effective recycling.",
      "Protect local wildlife and natural water resources.",
      "Encourage the adoption of renewable energy technologies."
    ],
    features: [
      "Village-level waste segregation and organic composting systems",
      "Distribution of subsidized solar lamps and biogas units",
      "Initiatives to clean and rejuvenate polluted rivers and streams",
      "Workshops on sustainable, low-impact living",
      "Tree adoption programs encouraging long-term care of saplings"
    ],
    impact: [
      "Implemented effective waste management systems in 15 villages",
      "Distributed 2,000+ solar lighting units replacing dangerous kerosene lamps",
      "Cleared over 5 tons of plastic waste from local water bodies",
      "Achieved a 90% survival rate for our newly planted community forests"
    ],
    beneficiaries: "Rural Communities, Local Ecosystems, General Public"
  },
  "information-support": {
    title: "Information Support",
    img: "/images/drone_farming.png",
    introduction: "Bridging the digital divide by providing crucial access to information, news, and digital tools.",
    fullDesc: "In the modern world, information is power. Many rural communities are disadvantaged simply due to a lack of access to timely data and digital literacy. Our Information Support program acts as a conduit, connecting villages to global knowledge, weather forecasts, market prices, and government schemes through digital hubs and mobile networks.",
    objectives: [
      "Ensure farmers have real-time access to weather and market pricing data.",
      "Improve digital literacy among the youth and elderly alike.",
      "Provide a centralized source of information regarding government subsidies."
    ],
    features: [
      "Establishment of rural digital kiosks with high-speed internet",
      "Daily SMS/WhatsApp alerts for weather patterns and crop prices",
      "Digital literacy training focusing on online banking and fraud prevention",
      "Help desks specifically to assist with online government applications",
      "A localized community radio/announcement system"
    ],
    impact: [
      "Connected 5,000+ farmers to real-time market price alerts, increasing their profit margins",
      "Trained 1,500+ villagers in safe online financial transactions",
      "Facilitated over 3,000 successful online applications for state benefits",
      "Set up 10 fully operational village digital information centers"
    ],
    beneficiaries: "Farmers, Students, Small Business Owners, the Elderly"
  },
  "employment-support": {
    title: "Employment Support",
    img: "/images/youth_skill_workshop.png",
    introduction: "Empowering job seekers with the right tools, connections, and opportunities to succeed.",
    fullDesc: "Finding sustainable employment is a major challenge in rural economies. Our Employment Support services go beyond simple skill development; we act as an active bridge between job seekers and potential employers. We prepare candidates for the modern workforce and actively network with regional industries to ensure our trainees find secure, respectful jobs.",
    objectives: [
      "Reduce the unemployment rate in local target districts.",
      "Ensure fair wages and safe working conditions for rural placements.",
      "Foster a local culture of entrepreneurship and self-employment."
    ],
    features: [
      "Regular local job fairs connecting youth with regional businesses",
      "Resume building, interview preparation, and professional grooming workshops",
      "Apprenticeship and internship placements in technical roles",
      "Seed funding and mentorship for local startup ideas",
      "Labor rights advocacy to ensure fair contracts for migrant workers"
    ],
    impact: [
      "Organized 20+ successful regional job fairs over the past two years",
      "Supported 50+ local startup ideas with initial mentorship and seed funding",
      "Successfully placed 800+ candidates in long-term, stable roles",
      "Helped transition 200+ daily wage earners into salaried, secure positions"
    ],
    beneficiaries: "Unemployed Youth, Daily Wage Earners, Aspiring Entrepreneurs"
  }
};

export default async function SupportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const support = supportData[id];

  if (!support) {
    return (
      <div className="section" style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Support Category not found</h2>
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
              <div className="section-title" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{support.title}</div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '600', marginBottom: '2rem' }}>
                {support.introduction}
              </h4>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '3rem' }}>
                {support.fullDesc}
              </p>
              
              <div className="about-grid" style={{ alignItems: 'flex-start', gap: '3rem' }}>
                <div>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                      Key Objectives
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {support.objectives.map((obj, idx) => (
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
                      Features & Interventions
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {support.features.map((feature, idx) => (
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
                      Direct Impact
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {support.impact.map((imp, idx) => (
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
                       Primary Beneficiaries
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', paddingLeft: '1.5rem' }}>{support.beneficiaries}</p>
                  </div>
                  
                  <div style={{ marginTop: '3rem', paddingLeft: '1.5rem' }}>
                    <Link href="/#contact" className="btn btn-primary">Seek Assistance</Link>
                  </div>
                </div>
                
                <div style={{ position: 'sticky', top: '120px' }}>
                  <img src={support.img} alt={support.title} style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
