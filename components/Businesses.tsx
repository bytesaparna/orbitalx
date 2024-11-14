"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

export default function BussinessSection() {
  const [visibleCount, setVisibleCount] = useState(9);
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 9 : 4);
    };

    updateVisibleCount(); // Initial setup
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  
  return (
    <div className="mx-auto max-w-7xl w-full mt-11 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mt-24 text-center mb-7 ">
        Businesses
      </h2>
      <div className="flex overflow-x-auto space-x-4 justify-center mt-40 gap-x-6">
        {contacts.slice(0, visibleCount).map((contact, index) => (
          <div key={index} className="flex flex-col items-center">
            <Avatar className="h-17 w-14 mb-2   transform transition-transform duration-200 hover:scale-125 hover:shadow-lg">
              <AvatarImage src={contact.imageUrl} alt={contact.name} />
              <AvatarFallback>{contact.icon}</AvatarFallback>
            </Avatar>
            <p className="text-xs text-center">{contact.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
const contacts = [
  { name: "JACK", icon: "JD", imageUrl: "/pppp.jpg" },
  { name: "LEO", icon: "JD", imageUrl: "/p10.jpg" },
  { name: "NEJI", icon: "JD", imageUrl: "/p6.jpg" },
  { name: "DANE", icon: "JD", imageUrl: "/p4.jpg" },
  { name: "ACE", icon: "JD", imageUrl: "/p5.png" },
  { name: "ALIXE", icon: "JS", imageUrl: "/pp.jpg" },
  { name: "AMIR", icon: "JD", imageUrl: "/p5.png" },
  { name: "ASHER", icon: "JD", imageUrl: "/ppp.jpg" },
  { name: "LEVI", icon: "JD", imageUrl: "/p7.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p7.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p9.jpg" },
  { name: "Jane Smith", icon: "JS", imageUrl: "/pp.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/ppp.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p4.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p7.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p4.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/pppp.jpg" },
  { name: "Jane Smith", icon: "JS", imageUrl: "/pp.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/ppp.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/pp.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p9.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p8.jpg" },
  { name: "John Doe", icon: "JD", imageUrl: "/p7.jpg" },
  { name: "Jane Smith", icon: "JS", imageUrl: "/p6.jpg" },
];