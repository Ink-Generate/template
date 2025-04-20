import ProjectSection from "./components/projectSection";

export default function Project() {
    return (
        <div className="w-full border-t py-4 mt-8">
          <div className="container text-center text-sm text-muted-foreground">
            <ProjectSection />
          </div>
        </div>
    );
};