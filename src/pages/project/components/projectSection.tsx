import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const projects = [
    {
      title: "Brand Voice Guidelines for Fintech",
      description:
        "Created a comprehensive brand tone and voice guide for a rising fintech startup. Resulted in a 30% uplift in customer engagement.",
    },
    {
      title: "Ghostwriting for Tech CEO",
      description:
        "Wrote LinkedIn thought-leadership content for a high-profile founder, helping them reach over 1M views in under 3 months.",
    },
    {
      title: "UX Microcopy for SaaS App",
      description:
        "Crafted onboarding flows and in-app messages that reduced churn by 18% over 60 days.",
    },
  ];

  return (
    <section className="py-12 px-0 md:px-8 lg:px-16 font-body text-foreground">
      <h2 className="text-3xl font-heading font-bold tracking-tight mb-8">
        Selected Work
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="hover:shadow-lg transition-shadow bg-card text-card-foreground h-full">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-mono">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};