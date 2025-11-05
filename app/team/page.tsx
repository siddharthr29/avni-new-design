import { Metadata } from 'next';
import { Linkedin, Mail } from 'lucide-react';
import { buildPageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: 'Meet the Team - Passionate Technologists Building Avni for Social Impact',
    description: 'Meet the passionate team of 19+ technologists, designers, and social sector experts building Avni - the best data collection platform for NGOs and social impact organizations.',
    path: '/team',
    keywords: [
      'Avni team',
      'NGO technology team',
      'social impact technologists',
      'nonprofit software developers',
      'open source team',
      'digital public goods team',
    ],
  });
}

/**
 * TEAM MEMBERS DATA
 * Easy to add/remove members - just edit this array
 */
interface TeamMember {
  name: string;
  jobTitle: string;
  linkedinId: string;
  photo?: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Vinay Venu', jobTitle: 'Co founder', linkedinId: 'https://www.linkedin.com/in/ijkvinay/', photo: '/images/team/vinay.jpeg' },
  { name: 'Arjun Khandelwal', jobTitle: 'Co founder', linkedinId: 'https://www.linkedin.com/in/arjun-khandelwal-41614b8/', photo: '/images/team/arjun.jpeg' },
  { name: 'Vivek Singh', jobTitle: 'Co founder', linkedinId: 'https://www.linkedin.com/in/vivek-singh-4535a61/', photo: '/images/team/vivek.jpeg' },
  { name: 'Pradipta Kundu', jobTitle: 'Co founder', linkedinId: 'https://www.linkedin.com/in/pradiptakundu/', photo: '/images/team/pradipta_k.jpeg' },
  { name: 'Joy A', jobTitle: 'Product Developer', linkedinId: 'https://www.linkedin.com/in/joy-a-8a42b715b/', photo: '/images/team/joy_a.jpeg' },
  { name: 'Himesh R', jobTitle: 'Product Developer', linkedinId: 'https://www.linkedin.com/in/himeshr/', photo: '/images/team/himesh.jpeg' },
  { name: 'Maha Lakshme', jobTitle: 'Product Manager', linkedinId: 'https://www.linkedin.com/in/maha-lakshme-89bab383/', photo: '/images/team/maha.jpeg' },
  { name: 'Nupoor Khandelwal', jobTitle: 'Tech Lead', linkedinId: 'https://www.linkedin.com/in/nupoor-khandelwal-26aa9b1b/', photo: '/images/team/nupoor_k.jpeg' },
  { name: 'Anjali Bhagabati', jobTitle: 'Business Analyst', linkedinId: 'https://www.linkedin.com/in/anjali-bhagabati-68791049/', photo: '/images/team/anjali.png' },
  { name: 'Achala Belokar', jobTitle: 'Quality Analyst', linkedinId: 'https://www.linkedin.com/in/achala-belokar-212520108/', photo: '/images/team/achala_b.jpeg' },
  { name: 'Dinesh G', jobTitle: 'Quality Analyst', linkedinId: 'https://www.linkedin.com/in/dinesh-g-293198315/', photo: '/images/team/dinesh_g.jpeg' },
  { name: 'Noopur Varma', jobTitle: 'Design and Creative Lead', linkedinId: 'https://www.linkedin.com/in/noopurvarma/', photo: '/images/team/noopur_V.jpeg' },
  { name: 'A Ashok kumar', jobTitle: 'Consultant- Business Development and M&E', linkedinId: 'https://www.linkedin.com/in/a-ashok-kumar/', photo: '/images/team/ashok.png' },
  { name: 'Mohammed Taqi', jobTitle: 'Implementation & Support Engineer', linkedinId: 'https://www.linkedin.com/in/mohammed-taqi-69b6b221b/', photo: '/images/team/taqi.jpeg' },
  { name: 'ADAM SANADI', jobTitle: 'Software Engineer', linkedinId: 'https://www.linkedin.com/in/adamsanadi6/', photo: '/images/team/adam.jpeg' },
  { name: 'Pooja Harmalkar', jobTitle: 'Lead Implementation Engineer', linkedinId: 'https://www.linkedin.com/in/pooja-harmalkar-60ba3698/', photo: '/images/team/pooja.jpeg' },
  { name: 'Om Bhardwaj', jobTitle: 'Platform Engineer', linkedinId: 'https://www.linkedin.com/in/ombhardwaj/', photo: '/images/team/om.png' },
  { name: 'Subhamita Kanungo', jobTitle: 'Application Support Engineer', linkedinId: 'https://www.linkedin.com/in/subhamitakanungo/', photo: '/images/team/Subhamita_k.png' },
  { name: 'Siddharth Harsh Raj', jobTitle: 'Implementation Engineer', linkedinId: 'https://www.linkedin.com/in/siddharthharshraj/', photo: '/images/team/siddharth.png' },
];

/**
 * HELPING STAFF MEMBERS
 */
interface HelpingStaff {
  name: string;
}

const helpingStaff: HelpingStaff[] = [
  { name: 'Ajay H' },
  { name: 'Kala' },
  { name: 'Lakshamma' },
];

// Helper functions
function getInitials(name: string): string {
  return name.split(' ').map(part => part.charAt(0).toUpperCase()).slice(0, 2).join('');
}

function getLinkedInUrl(linkedinId: string): string {
  return linkedinId.startsWith('http') ? linkedinId : `https://www.linkedin.com/in/${linkedinId}`;
}

export default function TeamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Team', url: '/team' },
  ]);

  // Organization schema with team members
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avni',
    url: 'https://avniproject.org',
    description: 'Open-source data collection platform for NGOs and social impact organizations',
    numberOfEmployees: teamMembers.length + helpingStaff.length,
    employee: teamMembers.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.jobTitle,
      sameAs: getLinkedInUrl(member.linkedinId),
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Meet the Team
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Passionate individuals building technology for social impact
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  {/* Photo - Fixed Size Frame */}
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`${member.name} - ${member.jobTitle}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                    ) : (
                      <div className="text-6xl font-bold text-primary-600">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4">
                      {member.jobTitle}
                    </p>

                    {/* LinkedIn Link */}
                    <a
                      href={getLinkedInUrl(member.linkedinId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm font-semibold">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Join Us CTA Card */}
              <div className="group bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="aspect-square bg-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-9xl font-bold text-white/80">?</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Want Your Photo Here?
                  </h3>
                  <p className="text-white/90 font-semibold mb-4">
                    Join Our Team
                  </p>
                  <a
                    href="https://www.samanvayfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-colors font-semibold"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helping Staff Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Our Helping Staff
              </h2>
              <p className="text-lg text-neutral-600">
                The backbone of our operations, ensuring everything runs smoothly
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {helpingStaff.map((staff) => (
                <div
                  key={staff.name}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  {/* Initials */}
                  <div className="aspect-square bg-gradient-to-br from-secondary-100 to-primary-100 flex items-center justify-center">
                    <div className="text-6xl font-bold text-secondary-600">
                      {getInitials(staff.name)}
                    </div>
                  </div>
                  {/* Name */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-neutral-900">
                      {staff.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
