import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const Evento = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const navigate = useNavigate();
  const {
    toast
  } = useToast();

  // Facebook Pixel
  useEffect(() => {
    // Facebook Pixel Code
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    `;
    document.head.appendChild(script);

    // Initialize pixel after script loads
    setTimeout(() => {
      if (window.fbq) {
        window.fbq('init', '1073091231347696');
        window.fbq('track', 'PageView');
      }
    }, 100);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    try {
      // Track Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Evento DNA dos Cachos',
          content_category: 'Webinar',
          value: 0,
          currency: 'BRL'
        });
      }
      const response = await fetch('https://n8n-n8n.p6yhvh.easypanel.host/webhook/eb132153-34ab-4287-aac3-cd2975d60e82', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          source: 'evento_page',
          receita_gerencial: true,
          page: 'evento'
        })
      });
      if (response.ok) {
        navigate('/obrigado');
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro",
        description: "Erro ao cadastrar. Tente novamente.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const avatarImages = ["/lovable-uploads/79dc3450-ace8-4248-9bc7-a981c19057c2.png", "/lovable-uploads/91dc1428-8f3a-4184-a948-4b91ef576353.png", "/lovable-uploads/edff71bb-0ff5-4952-bd06-b746b8928791.png", "/lovable-uploads/a13ed4a5-b671-4f86-930f-22b879ac2ab7.png", "/lovable-uploads/7490d21a-7fd3-43d7-944c-170ab8555d0b.png", "/lovable-uploads/d7ccdb0c-77ed-4f6d-ad6f-7dfb521e8d3c.png"];

  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <noscript>
        <img height="1" width="1" style={{
        display: 'none'
      }} src="https://www.facebook.com/tr?id=1073091231347696&ev=PageView&noscript=1" />
      </noscript>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-4 md:py-8 text-center lg:text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">€</span>
            </div>
            <span className="text-lg font-bold">RECEITA GERENCIAL</span>
          </div>
          <div className="text-orange-400 font-semibold text-center text-sm md:text-base">
            🔴 WEBINAR AO VIVO: 23 DE JUNHO ÀS 20H
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center mx-auto w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2 mx-auto">
              MAIS QUE LUCRO: <span className="text-orange-400">TRANSFORME SUA OPERAÇÃO</span><br />
              <span className="text-orange-400">EM CAIXA REAL COM SEGURANÇA FINANCEIRA</span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-gray-300 leading-relaxed px-2 mx-auto max-w-3xl">
              O Jogo Que os Grandes NEGÓCIOS Jogam Para Sempre Ter Caixa — E Que Nunca Ensinaram Para Pequenos Empresários
            </h2>

            <div className="bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg inline-block font-bold text-sm md:text-base mx-auto">
              PARE DE VENDER MUITO E GANHAR POUCO!
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 text-base md:text-lg font-bold rounded-lg leading-tight w-[90%] mx-auto md:w-auto md:px-[18px] md:py-[32px]">
                  <span className="text-center">
                    SIM! QUERO AUMENTAR O CAIXA DA MINHA EMPRESA →
                  </span>
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700 mx-4">
                <DialogHeader>
                  <DialogTitle className="text-center text-white text-sm md:text-base">
                    <span className="text-orange-400">Digite o seu e-mail</span> abaixo e participe do<br />
                    <span className="text-orange-400">WEBINAR GRATUITO RECEITA GERENCIAL:</span>
                  </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input name="name" placeholder="Digite seu nome... *" value={formData.name} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400" required />
                  </div>
                  
                  <div>
                    <Input name="email" type="email" placeholder="Seu melhor e-mail... *" value={formData.email} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400" required />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                      🇧🇷 +55
                    </div>
                    <Input name="whatsapp" placeholder="Seu Whatsapp com DDD*" value={formData.whatsapp} onChange={handleInputChange} className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 pl-20" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-bold text-lg">
                    SIM! QUERO AUMENTAR O CAIXA DA MINHA EMPRESA →
                  </Button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    * Importante: O endereço de e-mail informado deve ser válido para que você possa receber 
                    todos os conteúdos da série gratuita. Os campos com "*" são obrigatórios para conclusão do 
                    formulário.
                  </p>
                </form>
              </DialogContent>
            </Dialog>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {avatarImages.map((image, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={image} alt={`Avatar ${i + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
              <span className="text-blue-400 font-semibold text-sm md:text-base">+2.000 Inscritos</span>
            </div>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="relative order-1 lg:order-2 mx-auto w-full max-w-md">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-4 md:p-8 text-center">
              <div className="bg-black/20 rounded-xl p-3 md:p-6 mb-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/l96QD7MjH-8"
                    title="Webinar Receita Gerencial"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="text-center">
                <div className="text-orange-200 font-bold mb-2 text-sm md:text-base">WEBINAR 100% ONLINE E GRATUITO</div>
                <div className="text-white font-bold text-sm md:text-base">DIA 23 DE JUNHO ÀS 20H</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-4 md:mb-6 flex items-center">
              ❌ Mesmo que você:
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Venda mais de R$ 1 milhão por ano, mas o dinheiro some</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Entre no cheque especial todo mês</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Corra atrás de fornecedores pedindo prazo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Tenha estoque alto, mas caixa sempre baixo</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4 md:mb-6 flex items-center">
              🚀 Você vai aprender:
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Como ter caixa forte mesmo com vendas parceladas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Como eliminar de vez o sufoco do fim do mês</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Saber exatamente o quanto pode parcelar sem quebrar</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>O segredo para formar uma reserva de segurança</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">🧠 Este webinar não é só sobre gestão... É sobre como gerenciar o fluxo de caixa da sua empresa com excelência e multiplicar seu faturamento consideravelmente.</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              O mercado está em transformação — quem domina o fluxo de caixa, domina o jogo.
            </p>
            <p className="text-base md:text-lg text-orange-300">Quer explodir seu faturamento mês que vem? Então essa é sua chance.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="text-xl md:text-2xl font-bold text-orange-400 mb-4">
            👉 Clique no botão abaixo e faça sua inscrição gratuita agora mesmo!
          </div>
          <div className="text-red-400 font-bold mb-6 md:mb-8 text-sm md:text-base">
            🔥 VAGAS LIMITADAS | TRANSMISSÃO EXCLUSIVA
          </div>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-bold leading-tight w-[90%] md:w-auto mx-auto md:mx-0 md:text-xl rounded-lg md:px-[24px] md:py-[36px]">
                <span className="text-center">
                  SIM! QUERO AUMENTAR O CAIXA DA MINHA EMPRESA →
                </span>
              </Button>
            </DialogTrigger>
          </Dialog>

          <div className="flex items-center justify-center space-x-4 mt-6 md:mt-8">
            <div className="flex -space-x-2">
              {avatarImages.map((image, i) => <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={image} alt={`Avatar ${i + 1}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
            <span className="text-blue-400 font-semibold text-sm md:text-base">+2.000 Inscritos</span>
          </div>
        </div>
      </div>
    </div>;
};

export default Evento;
