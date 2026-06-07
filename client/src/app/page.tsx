import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-sand)] font-sans text-[var(--color-slate)]">
      <Section variant="sand">
        <Container>
          <SectionHeading 
            title="KBT Core UI Components" 
            eyebrow="F02.2 Preview"
            description="Warm Tropical Premium foundation preview. This is not the full landing page."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Buttons & CTAs</CardTitle>
                <CardDescription>Primary and secondary interaction elements</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)] mt-2">
                  <WhatsAppButton />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges & Tags</CardTitle>
                <CardDescription>Small status and category indicators</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Default Badge</Badge>
                  <Badge variant="accent">Accent Badge</Badge>
                  <Badge variant="soft">Soft Badge</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
