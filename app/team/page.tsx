import { Metadata } from 'next';
import { Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet the Team | Avni Project',
  description: 'Meet the passionate team behind Avni - building technology for social impact.',
};

const teamMembers = [
  {
    name: 'Vinay Venu',
    role: 'Co-Founder & Lead',
    linkedin: 'https://www.linkedin.com/in/vinayvenu/',
    avatar: 'https://ui-avatars.com/api/?name=Vinay+Venu&background=14B8A6&color=fff&size=256&bold=true',
    bio: 'Passionate about using technology for social good',
  },
  {
    name: 'Arjun Khandelwal',
    role: 'Co-Founder & Technical Lead',
    linkedin: 'https://www.linkedin.com/in/arjun-khandelwal/',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+Khandelwal&background=F59E0B&color=fff&size=256&bold=true',
    bio: 'Building scalable solutions for NGOs',
  },
  {
    name: 'Pradipta Kundu',
    role: 'Co-Founder & Senior Developer',
    linkedin: 'https://www.linkedin.com/in/pradipta-kundu/',
    avatar: 'https://ui-avatars.com/api/?name=Pradipta+Kundu&background=8B5CF6&color=fff&size=256&bold=true',
    bio: 'Creating impactful digital experiences',
  },
  {
    name: 'Vivek Singh',
    role: 'Co-Founder & Product Manager',
    linkedin: 'https://www.linkedin.com/in/vivek-singh/',
    avatar: 'https://ui-avatars.com/api/?name=Vivek+Singh&background=EC4899&color=fff&size=256&bold=true',
    bio: 'Driving product vision and strategy',
  },
  {
    name: 'Himesh R',
    role: 'Product Developer',
    linkedin: 'https://www.linkedin.com/in/himesh-r/',
    avatar: 'https://ui-avatars.com/api/?name=Himesh+R&background=3B82F6&color=fff&size=256&bold=true',
    bio: 'Developing innovative features',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
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
                  {/* Photo */}
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="text-sm font-semibold">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join Us CTA */}
            <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference through technology
              </p>
              <a
                href="mailto:avnipartnerships@samanvayfoundation.org"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
