import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export function TestimonialCard({ quote, author, role, organization }: TestimonialCardProps) {
  return (
    <Card className="bg-white border-2">
      <CardContent className="pt-6">
        <p className="text-base italic mb-4 text-foreground leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted border-2 border-border flex items-center justify-center text-sm font-semibold">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-sm">{author}</div>
            <div className="text-xs text-muted-foreground">{role}, {organization}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
