
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Scroll } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

const CertificationCard = ({ title, issuer, date, credentialId, credentialUrl }: CertificationProps) => {
  return (
    <Card className="portfolio-card h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Scroll className="h-6 w-6 text-primary" />
        </div>
        <CardDescription className="flex items-center gap-1.5">
          <span>{issuer}</span>
          <span className="text-xs opacity-60">•</span>
          <span>{date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        {credentialId && (
          <p className="text-sm text-muted-foreground mb-3">
            <span className="font-medium text-foreground">Credential ID:</span> {credentialId}
          </p>
        )}
        {credentialUrl && (
          <div className="mt-4">
            <a 
              href={credentialUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <CheckCircle2 className="h-4 w-4" />
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
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MCAD-789012",
      credentialUrl: "https://learn.microsoft.com/en-us/certifications/azure-developer"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-345678",
      credentialUrl: "https://www.cncf.io/certification/cka/"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2020",
      credentialId: "ND0044",
      credentialUrl: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044"
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-16 py-16 bg-muted/20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <Badge variant="success" className="mb-4">Professional Development</Badge>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications that validate my expertise and knowledge</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
          
          <Card className="portfolio-card relative overflow-hidden border-dashed border-2 border-primary/30 bg-primary/5 flex flex-col items-center justify-center p-8 h-full">
            <Award className="h-12 w-12 text-primary/50 mb-4" />
            <h3 className="text-xl font-medium text-center mb-2">Continuously Learning</h3>
            <p className="text-muted-foreground text-center text-sm">
              Currently pursuing additional certifications in Cloud Architecture and Bitcoin Development
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

