/**
 * Case Studies Data
 * 
 * This file contains all case study content in a structured format.
 * Add new case studies by following the template below.
 */

export interface CaseStudyData {
  slug: string;
  title: string;
  organization: string;
  sector: string;
  location: string;
  beneficiaries: string;
  impact: string;
  date: string;
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  implementation: {
    description: string;
    phases: Array<{
      title: string;
      description: string;
    }>;
  };
  results: {
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  '2025-05-28-bridging-the-nutrition-gap-apf-odisha': {
    slug: '2025-05-28-bridging-the-nutrition-gap-apf-odisha',
    title: 'Bridging the Nutrition Gap - APF Odisha',
    organization: 'Azim Premji Foundation',
    sector: 'Health & Nutrition',
    location: 'Odisha, India',
    beneficiaries: '50,000+',
    impact: '30% improvement in malnutrition tracking',
    date: '2025-05-28',
    
    challenge: {
      description: 'The Azim Premji Foundation faced significant challenges in tracking nutritional outcomes for children across rural Odisha. Traditional paper-based systems created multiple barriers:',
      points: [
        'Delayed data collection and reporting cycles',
        'Inconsistent tracking across field workers',
        'Difficulty in identifying at-risk children quickly',
        'Limited visibility into program effectiveness',
      ],
    },
    
    solution: {
      description: 'APF implemented Avni to digitize their entire nutrition tracking workflow, transforming their operations from paper to digital.',
      features: [
        {
          title: 'Custom Forms',
          description: 'Designed specifically for nutritional assessments with skip logic and validations',
        },
        {
          title: 'Offline Capability',
          description: 'Field workers could collect data without internet connectivity',
        },
        {
          title: 'Real-time Dashboards',
          description: 'Program managers could monitor progress instantly',
        },
        {
          title: 'Automated Alerts',
          description: 'System flagged at-risk children automatically for immediate action',
        },
      ],
    },
    
    implementation: {
      description: 'The rollout was completed in 3 phases over 2 months:',
      phases: [
        {
          title: 'Phase 1',
          description: 'Pilot with 10 field workers to test and refine the system',
        },
        {
          title: 'Phase 2',
          description: 'Training and expansion to 50 workers across multiple locations',
        },
        {
          title: 'Phase 3',
          description: 'Full deployment across all 200+ field workers',
        },
      ],
    },
    
    results: {
      description: 'After 6 months of using Avni, APF achieved remarkable outcomes:',
      metrics: [
        {
          value: '30% improvement',
          label: 'in malnutrition tracking accuracy',
        },
        {
          value: '50% faster',
          label: 'identification of at-risk children',
        },
        {
          value: '100% digital',
          label: 'data collection across all field operations',
        },
        {
          value: 'Real-time insights',
          label: 'for program managers enabling data-driven decisions',
        },
      ],
    },
    
    testimonial: {
      quote: 'Avni has transformed how we track and respond to malnutrition. The offline capability is crucial for our remote areas, and the dashboards give us insights we never had before. It\'s been a game-changer for our nutrition program.',
      author: 'Dr. Priya Sharma',
      role: 'Program Lead, APF Odisha',
    },
  },
  
  // Add more case studies here following the same structure
};

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudiesData[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudiesData);
}
