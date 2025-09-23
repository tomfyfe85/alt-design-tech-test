export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  backgroundImage: string;
}

export const dnsTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We have been delighted with our DNS partnership. The club now has direction & delivery on all document processes with a clear road map for the foreseeable future.",
    author: "Paul Johnson, Director",
    company: "Nottingham Forest Football Club",
    backgroundImage: "forest-image.jpg"
  },
  {
    id: 2,
    quote: "DNS has transformed our document management system. Their expertise and support have been invaluable to our daily operations.",
    author: "Sarah Mitchell, Operations Manager",
    company: "TechFlow Solutions Ltd",
    backgroundImage: "forest-image.jpg"
  },
  {
    id: 3,
    quote: "Outstanding service and support. DNS helped us streamline our printing infrastructure and reduce costs significantly.",
    author: "David Thompson, IT Director",
    company: "Global Manufacturing Corp",
    backgroundImage: "forest-image.jpg"
  },
  {
    id: 4,
    quote: "Professional, reliable, and always responsive. DNS has been our trusted IT partner for over three years.",
    author: "Emma Wilson, CEO",
    company: "Creative Design Agency",
    backgroundImage: "forest-image.jpg"
  },
  {
    id: 5,
    quote: "The communications solutions provided by DNS have improved our client interactions and internal efficiency dramatically.",
    author: "Mark Roberts, Partner",
    company: "Roberts & Associates Law Firm",
    backgroundImage: "forest-image.jpg"
  }
];