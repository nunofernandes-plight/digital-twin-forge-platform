
import AIDesignStudio from "@/components/AIDesignStudio";
import Header from "@/components/Header";

const AIStudio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="pt-20">
        <AIDesignStudio />
      </div>
    </div>
  );
};

export default AIStudio;
