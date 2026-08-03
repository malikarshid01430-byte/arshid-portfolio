import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Arshid Ahmad Malik",
  description: "Technical articles and tutorials on Embedded Systems, IoT, VLSI, Android Development, and Full Stack Development by Arshid Ahmad Malik.",
  openGraph: {
    title: "Blog | Arshid Ahmad Malik",
    description: "Technical articles and tutorials on Embedded Systems, IoT, VLSI, Android Development, and Full Stack Development.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}