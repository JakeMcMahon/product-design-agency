import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialProps {
  name: string;
  position: string;
  content: string;
  avatar?: string;
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, position, content, avatar }, ref) => {
    return (
      <Card ref={ref} className="hover:shadow-lg transition-shadow h-full">
        <CardContent className="pt-6">
          <div className="flex items-start mb-4">
            <Avatar className="mr-4">
              {avatar ? (
                <img src={avatar} alt={name} />
              ) : (
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{position}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{content}"</p>
        </CardContent>
      </Card>
    );
  }
);
Testimonial.displayName = "Testimonial";

export { Testimonial };