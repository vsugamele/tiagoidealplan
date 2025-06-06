import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Sparkles, Calendar, Mail, ArrowLeft } from "lucide-react";

const ThankYou = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/HMJUmW0FkRh7PuDaseRLwD";
  
  const handleWhatsAppClick = () => {
    window.open(whatsappGroupLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Facebook Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1073091231347696');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1073091231347696&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Success Animation with Modern Design */}
        <div className="text-center mb-16 md:mb-20">
          <div className="relative mb-8 md:mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/25 animate-pulse">
              <Check className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-sm" />
            </div>
            <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 leading-tight px-2">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">PARABÉNS!</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">SUA VAGA ESTÁ</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">GARANTIDA</span>
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-700 mb-6 md:mb-8 font-medium leading-relaxed px-2">
              Você deu o primeiro passo para transformar sua empresa em uma máquina de lucro e com caixa saudável..
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 md:p-8 rounded-2xl text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                <h3 className="text-xl md:text-2xl font-bold text-center">WEBINAR GRATUITO</h3>
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-center leading-tight">
                "COMO GERAR CAIXA FINANCEIRO<br className="md:hidden"/> NA SUA EMPRESA"
              </h4>
              <p className="text-xl md:text-2xl font-bold mb-4 text-center">
                Dia 23/06 às 20h
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/30">
                <p className="text-blue-100 text-base md:text-lg text-center leading-relaxed">
                  Você receberá um e-mail com todas as instruções de acesso em breve.<br/>
                  Verifique também sua caixa de spam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps with Modern Design */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent px-4 leading-tight">
            O QUE ACONTECE AGORA?
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Mail,
                title: "Verifique seu e-mail",
                description: "(e o spam) para confirmar sua inscrição",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: MessageCircle,
                title: "Entre no grupo VIP",
                description: "do WhatsApp para receber lembretes e bônus",
                gradient: "from-emerald-500 to-teal-600"
              },
              {
                icon: Calendar,
                title: "Coloque na agenda",
                description: "No dia 23/06 às 20h, acesse o link e transforme sua empresa",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 p-6 md:p-8 text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl`}>
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-full p-1 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA with Modern Design */}
        <div className="mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 md:p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 md:mb-0 md:mr-4">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
                ENTRE NO NOSSO<br className="md:hidden"/> GRUPO VIP
              </h3>
            </div>
            
            <p className="text-white/90 mb-6 md:mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2">
              Receba dicas exclusivas e conteúdos antecipados direto no seu WhatsApp
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-emerald-600 hover:bg-gray-100 text-base md:text-xl font-bold py-4 md:py-4 px-6 md:px-10 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-center leading-tight">
                ENTRAR NO GRUPO VIP<br className="md:hidden"/> DO WHATSAPP
              </span>
            </Button>
          </div>
        </div>

        {/* Footer note with modern design */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-xl max-w-3xl mx-auto">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed px-2">
              Não perca essa oportunidade única de aprender o método que vai revolucionar 
              seu controle financeiro e transformar sua empresa em uma máquina de lucro!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
