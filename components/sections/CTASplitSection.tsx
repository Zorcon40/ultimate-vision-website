import { Button } from "@/components/ui/button";
import { Phone, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CTASplitSection() {
  return (
    <section className="min-h-screen flex items-center bg-gray-900">
      <div className="w-full grid lg:grid-cols-2">
        {/* Book Clark Side */}
        <div className="bg-white text-foreground p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-[50vh] border-r-4 border-gray-900">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Book Clark for<br />Your Event
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Transform your school, business, or community with a presentation that creates lasting change
          </p>
          
          <div className="relative w-full max-w-sm aspect-[4/3] mb-8 rounded-lg overflow-hidden bg-muted">
            <Image
              src="/images/IMG_3881.HEIC.png"
              alt="Clark speaking to engaged audience"
              fill
              className="object-cover"
            />
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 mb-6 text-lg">
            <Link href="/contact">Get Started</Link>
          </Button>

          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold text-foreground">425-891-9008</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Monday-Friday, 9AM-5PM PST
          </p>
        </div>

        {/* Donate Side */}
        <div className="bg-muted text-foreground p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-[50vh] border-l-4 border-gray-900">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Support Our<br />Mission
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Every donation helps us reach more students and communities, spreading kindness nationwide
          </p>
          
          <div className="relative w-full max-w-sm aspect-[4/3] mb-8 rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/IMG_9375 (2).jpg"
              alt="Students engaged with guide dog"
              fill
              className="object-cover"
            />
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 mb-6 text-lg">
            <Link href="/donate">Donate Now</Link>
          </Button>

          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Award className="h-5 w-5" />
            <span className="font-semibold text-foreground">501(c)(3) Non-Profit</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tax Deductible Donations
          </p>
        </div>
      </div>
    </section>
  );
}
