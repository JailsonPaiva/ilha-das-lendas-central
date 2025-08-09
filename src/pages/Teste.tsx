// pages/teste.tsx
import FramedImage from "@/components/FramedImage";

export default function Teste() {
  return (
    <main className="flex justify-center items-center h-screen bg-black">
      <FramedImage
        src="/jogadores/tatu.jpg"
        alt="Jogador Tatu"
        width={300}
        height={400}
      />
    </main>
  );
}
