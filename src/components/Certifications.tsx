import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Award, CheckCircle2, Scroll } from 'lucide-react';

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
}: CertificationProps) => {
  return (
    <Card className='portfolio-card h-full'>
      <CardHeader>
        <div className='flex items-start justify-between'>
          <CardTitle className='text-xl font-bold'>{title}</CardTitle>
          <Scroll className='h-6 w-6 text-primary' />
        </div>
        <CardDescription className='flex items-center gap-1.5'>
          <span>{issuer}</span>
          <span className='text-xs opacity-60'>•</span>
          <span>{date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className='pt-2'>
        {credentialId && (
          <p className='text-sm text-muted-foreground mb-3'>
            <span className='font-medium text-foreground'>Credential ID:</span>{' '}
            {credentialId}
          </p>
        )}
        {credentialUrl && (
          <div className='mt-4'>
            <a
              href={credentialUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 text-sm text-primary hover:underline'
            >
              <CheckCircle2 className='h-4 w-4' />
              Verify Credential
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: 'React.JS',
      issuer: 'Udemy',
      date: '2022',
      credentialId: 'UC-cbf64009-eddb-4ce6-9c8f-f9ba170595c8',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-cbf64009-eddb-4ce6-9c8f-f9ba170595c8/',
    },
    {
      title: 'Verizon - Cloud Platform Job Simulation',
      issuer: 'Forage',
      date: '2025',
      credentialId: 'WynKr75TxmusXxGzK',
      credentialUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_TaxuzmE87dNNyDNYu_1740728183956_completion_certificate.pdf',
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS',
      date: '2025',
      credentialId: '',
      credentialUrl:
        'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044',
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: '2024',
      credentialId: '',
      credentialUrl:
        'https://www.credly.com/badges/ae7b94e8-d317-4c29-8563-678d6fcb6b79/linked_in_profile',
    },
    {
      title: 'Python Essentials 1',
      issuer: 'CISCO',
      date: '2025',

      credentialUrl:
        'https://aws.amazon.com/verificationhttps://www.credly.com/badges/8a55a902-7ef7-4b16-b6ab-d11ebc4b6fb9/linked_in_profile',
    },
    {
      title: 'Machine Learning Certification Course for Beginnners',
      issuer: 'Analytics Vidhya',
      date: '2022',
      credentialId: 'g0xd26ktqa',
      credentialUrl: '',
    },
  ];

  return (
    <section id='certifications' className='scroll-mt-16 py-16 bg-muted/20'>
      <div className='section-container'>
        <div className='flex flex-col items-center mb-12'>
          <Badge variant='success' className='mb-4'>
            Professional Development
          </Badge>
          <h2 className='section-title'>Certifications</h2>
          <p className='section-subtitle'>
            Professional certifications that validate my expertise and knowledge
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}

          <Card className='portfolio-card relative overflow-hidden border-dashed border-2 border-primary/30 bg-primary/5 flex flex-col items-center justify-center p-8 h-full'>
            <Award className='h-12 w-12 text-primary/50 mb-4' />
            <h3 className='text-xl font-medium text-center mb-2'>
              Continuously Learning
            </h3>
            <p className='text-muted-foreground text-center text-sm'>
              Currently pursuing additional certifications in Cloud Architecture
              and Bitcoin Development
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
