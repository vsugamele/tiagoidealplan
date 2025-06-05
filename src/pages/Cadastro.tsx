import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users, TrendingUp, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir URL com parâmetros para webhook
    const webhookUrl = "https://hook.us2.make.com/ykwer71h9m5qmrplfnrfdqr9tkc83l3z";
    const params = new URLSearchParams({
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      pagina: 'cadastro'
    });

    // Enviar para webhook
    fetch(`${webhookUrl}?${params.toString()}`, {
      method: 'GET',
    }).catch(console.error);

    // Redirecionar para página de confirmação
    navigate('/confirmacao-pendente');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header com urgência moderno */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-3 md:py-4 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-white font-bold flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg">
            <Clock className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            <span className="leading-tight">WEBINAR GRATUITO • 23/06 às 20h<br className="md:hidden"/>• VAGAS LIMITADAS</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Headline Principal com Design Moderno */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight px-2">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">Descubra o Método que Está Fazendo</span><br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pequenas Empresas Lucrarem</span><br/>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">como Grandes</span><br/>
              <span className="text-gray-800">— Mesmo Vendendo Parcelado</span>
            </h1>
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-xl border border-white/20 inline-block mx-2">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-800">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <span className="text-center leading-tight">Webinar 100% Online e Gratuito<br className="md:hidden"/> • 23/06 às 20h • Vagas Limitadas</span>
            </h2>
          </div>
        </div>

        {/* Bloco de Dor e Transformação */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0 shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-3xl font-bold text-red-600 mb-6 md:mb-8 leading-tight">
                Você vende bem, mas vive no sufoco no fim do mês?
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">Sua empresa fatura, mas o dinheiro nunca sobra?</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">Precisa de empréstimos para fechar o mês?</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">Vive com medo de dar prazo e quebrar?</p>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-orange-100 rounded-xl">
                <p className="font-bold text-orange-700 text-lg md:text-xl leading-tight">
                  Você não está sozinho. E o problema NÃO é falta de vendas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bloco de Transformação */}
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-3xl font-bold text-emerald-600 mb-6 md:mb-8 leading-tight">
                Transformação Garantida
              </h3>
              
              <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Neste webinar gratuito, você vai aprender o método que transforma empresas comuns em máquinas de lucro — sem complicação, sem promessas vazias e sem precisar virar "planilheiro".
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">Receber à vista, mesmo vendendo parcelado</span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">Acabar com o sufoco dos boletos no fim do mês</span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">Saber exatamente quanto pode parcelar sem risco</span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">Identificar produtos que geram lucro de verdade</span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">Ter clareza total sobre o que está drenando seu caixa</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulário de Cadastro Moderno */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-12">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
                Garanta sua vaga agora mesmo!
              </h3>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 md:p-6 rounded-2xl text-white shadow-lg">
                <p className="text-lg md:text-xl font-semibold leading-relaxed">
                  Data: 23/06 às 20h<br/>
                  100% Online<br/>
                  <span className="text-base md:text-lg">Exclusivo para empresários que faturam<br className="md:hidden"/> entre R$50 mil e R$200 mil por mês</span>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <Label htmlFor="nome" className="text-gray-800 font-semibold text-base md:text-lg mb-2 md:mb-3 block">Nome completo *</Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl bg-white"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-800 font-semibold text-base md:text-lg mb-2 md:mb-3 block">Melhor e-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl bg-white"
                  placeholder="Digite seu melhor e-mail"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-gray-800 font-semibold text-base md:text-lg mb-2 md:mb-3 block">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="h-12 md:h-14 text-base md:text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl bg-white"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base md:text-xl py-5 md:py-6 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-center leading-tight">
                  QUERO PARTICIPAR DO<br/>WEBINAR GRATUITO
                </span>
              </Button>
            </form>

            <p className="text-xs md:text-sm text-gray-500 text-center mt-4 md:mt-6 px-2">
              Ao se inscrever, você concorda em receber comunicações sobre o evento.
            </p>
          </CardContent>
        </Card>

        {/* Prova Social Moderna */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <span className="text-xl md:text-2xl">💬</span>
                </div>
                <p className="text-lg md:text-xl italic text-gray-700 mb-4 md:mb-6 leading-relaxed px-2">
                  "Minha loja faturava bem, mas o caixa vivia no vermelho. Em 30 dias, virei o jogo com esse método."
                </p>
                <p className="text-blue-600 font-semibold text-base md:text-lg">
                  — Maria Clara, empresária do varejo
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
