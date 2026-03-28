import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle2, RotateCcw } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Signature() {
  const [_, setLocation] = useLocation();
  const { t } = useI18n();
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasSignature(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{t.signSuccessTitle}</h1>
        <p className="text-muted-foreground mb-8">{t.signSuccessDesc}</p>
        <Button 
          className="w-full h-14 rounded-2xl text-base font-semibold max-w-xs"
          onClick={() => setLocation("/dashboard")}
        >
          {t.home}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-8 flex flex-col">
      <Header title={t.signContract} />
      
      <div className="px-4 mt-2 flex-1 flex flex-col">
        <div className="bg-blue-50 text-blue-800 p-4 rounded-2xl flex items-start gap-3 mb-6 text-sm">
          <FileText className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{t.signHint}</p>
        </div>

        <h3 className="font-bold mb-3">{t.uploadID}</h3>
        <label className="block w-full border-2 border-dashed border-primary/30 bg-primary/5 rounded-3xl p-8 text-center cursor-pointer hover:bg-primary/10 transition-colors mb-8 relative overflow-hidden">
          <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
          {uploadedFile ? (
            <div className="absolute inset-0 p-2">
              <img src={uploadedFile} className="w-full h-full object-contain" alt="ID Upload" />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-primary">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <span className="font-semibold text-sm">{t.photoUploadHint}</span>
            </div>
          )}
        </label>

        <h3 className="font-bold mb-3">{t.signHere}</h3>
        <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mb-4 relative">
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button 
              onClick={clearCanvas}
              className="p-2 bg-muted/80 backdrop-blur rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
          <canvas
            ref={canvasRef}
            width={400}
            height={200}
            className="w-full h-[200px] touch-none cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          {!hasSignature && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-muted-foreground/30 text-2xl font-bold font-heading -rotate-12">
              SIGN HERE
            </div>
          )}
        </div>

        <div className="mt-auto pt-6">
          <Button 
            className="w-full h-14 rounded-2xl text-base font-semibold shadow-lg shadow-primary/25"
            disabled={!hasSignature || !uploadedFile || isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? "..." : t.submit}
          </Button>
        </div>
      </div>
    </div>
  );
}