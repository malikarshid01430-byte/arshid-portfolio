// Component simplified for performance - removed mouse tracking animation
// Static decorative shapes only
export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden">
      {/* Static decorative shapes - no animations */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full border border-cyan-500/10 bg-cyan-500/5 blur-3xl"
      />
      
      <div
        className="absolute top-40 right-20 w-48 h-48 border border-violet-500/10 bg-violet-500/5 blur-2xl rotate-45"
      />
      
      <div
        className="absolute bottom-40 left-1/4 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-l-transparent border-r-transparent border-b-cyan-500/10"
      />
      
      <div
        className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full border border-teal-500/10 bg-teal-500/5 blur-3xl"
      />
      
      <div
        className="absolute top-1/3 left-1/3 w-16 h-16 border border-pink-500/10 bg-pink-500/5 rotate-12"
      />
      
      <div
        className="absolute top-2/3 right-1/4 w-20 h-20 border border-amber-500/10 bg-amber-500/5 -rotate-12"
      />
    </div>
  );
}