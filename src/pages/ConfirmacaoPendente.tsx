
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Mail, MessageCircle, Instagram, ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConfirmacaoPendente = () => {
  const navigate = useNavigate();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/seuinstagram', '_blank');
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-16">
        {/* Success Animation with Modern Design */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/25 animate-pulse">
              <Check className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-sm" />
            </div>
            <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent leading-tight px-2">
            PARABÉNS!<br/>
            <span className="text-emerald-600">SUA VAGA ESTÁ</span><br/>
            <span className="text-emerald-600">CONFIRMADA</span>
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6 font-medium leading-relaxed px-2">
              Você deu o primeiro passo para transformar sua empresa em uma máquina de lucro.
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 md:p-6 rounded-xl text-white shadow-lg">
              <p className="text-lg md:text-xl font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-2">
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-center">Reserve a data: 23/06 às 20h</span>
              </p>
              <p className="text-blue-100 text-sm md:text-base text-center px-2">
                Você vai receber o link no seu e-mail e WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Próximos Passos com Design Moderno */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 px-4">
            O que fazer agora:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800 leading-tight">Verifique seu e-mail</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  (e o spam) para confirmar sua inscrição
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800 leading-tight">Salve nosso número</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  no WhatsApp para garantir que receba os lembretes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800 leading-tight">Coloque na agenda</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  agora — não perca essa chance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Depoimento com Visual Moderno */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 px-4 leading-tight">
            Assista ao que outros empresários estão dizendo sobre o método
          </h3>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-10">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 md:mb-8 shadow-inner">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-base md:text-lg">Vídeo depoimento em breve</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg md:text-xl italic text-gray-700 mb-4 md:mb-6 leading-relaxed px-2">
                  "Implementei o método em 15 dias e já vi a diferença no meu fluxo de caixa. Finalmente entendi como trabalhar com margem real."
                </p>
                <p className="text-blue-600 font-semibold text-base md:text-lg">
                  — João Silva, empresário do setor de construção
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTAs Secundárias com Design Moderno */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-10 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 leading-tight px-2">Enquanto o dia do evento não chega...</h4>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base px-2">
                Siga nosso Instagram e acompanhe dicas diárias para fortalecer o caixa da sua empresa.
              </p>
              <Button 
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold w-full h-auto py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
              >
                <span className="text-center leading-tight">
                  SIGA NO<br className="md:hidden"/> INSTAGRAM
                </span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-10 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 leading-tight">Quer saber mais?</h4>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base px-2">
                Volte ao site principal e conheça mais sobre nossa metodologia.
              </p>
              <Button 
                onClick={handleVoltar}
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold w-full h-auto py-3 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base"
              >
                <span className="text-center leading-tight">
                  VOLTAR AO<br className="md:hidden"/> SITE PRINCIPAL
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lembrete Final com Design Moderno */}
        <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 p-6 md:p-10 rounded-2xl text-center shadow-2xl text-white">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <span>🔥</span>
            <span className="leading-tight">LEMBRETE IMPORTANTE</span>
          </h4>
          <p className="text-lg md:text-xl mb-4 md:mb-6 leading-relaxed px-2">
            Este webinar acontece apenas UMA VEZ. Se você perder, terá que esperar até o próximo ano.
          </p>
          <p className="text-xl md:text-2xl font-bold bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-xl leading-tight">
            Marque na sua agenda:<br className="md:hidden"/> 23/06 às 20h
          </p>
        </div>

        {/* Footer Moderno */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Sua transformação empresarial começa agora. Prepare-se para descobrir os segredos que grandes empresas usam para manter o caixa sempre positivo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacaoPendente;
