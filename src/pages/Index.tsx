import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Check, Star, Shield, Wallet, AlertTriangle, DollarSign, TrendingUp, BarChart, Sparkles } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import Questionnaire from "@/components/Questionnaire";

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [leadData, setLeadData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, digite seu nome para continuar.",
        variant: "destructive"
      });
      return;
    }
    if (!email) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, digite seu e-mail para continuar.",
        variant: "destructive"
      });
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, digite um e-mail válido.",
        variant: "destructive"
      });
      return;
    }
    if (!acceptTerms) {
      toast({
        title: "Termos de uso",
        description: "Você precisa aceitar os termos de uso para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Store lead data and show questionnaire
    const currentLeadData = {
      nome: name.trim(),
      email: email.trim(),
      telefone: phoneNumber.trim(),
      source: 'landing_page_main_form'
    };
    setLeadData(currentLeadData);
    setShowQuestionnaire(true);
  };

  const handleQuestionnaireSubmit = async (questionnaireData: any) => {
    setIsLoading(true);
    try {
      const webhookUrl = 'https://n8n-n8n.p6yhvh.easypanel.host/webhook/eb132153-34ab-4287-aac3-cd2975d60e82';

      // Send complete data with questionnaire responses
      const params = new URLSearchParams({
        ...leadData,
        timestamp: new Date().toISOString(),
        // Questionnaire data
        razao_social: questionnaireData.razaoSocial,
        cnpj: questionnaireData.cnpj,
        responsavel: questionnaireData.responsavel,
        regime_tributario: questionnaireData.regimeTributario,
        receita_gerencial: questionnaireData.receitaGerencial,
        caixa_financeiro: questionnaireData.caixaFinanceiro,
        quantidade_colaboradores: questionnaireData.quantidadeColaboradores
      });
      console.log("Sending complete data to webhook with params:", params.toString());
      await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'POST',
        mode: 'no-cors'
      });
      setShowQuestionnaire(false);
      navigate('/obrigado');
    } catch (error) {
      console.error('Error sending webhook:', error);
      toast({
        title: "Erro",
        description: "Houve um problema ao processar sua inscrição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, digite seu e-mail para continuar.",
        variant: "destructive"
      });
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, digite um e-mail válido.",
        variant: "destructive"
      });
      return;
    }

    // Store lead data and show questionnaire
    const currentLeadData = {
      nome: name.trim() || 'Não informado',
      email: email.trim(),
      telefone: phoneNumber.trim() || 'Não informado',
      source: 'landing_page_footer_form'
    };
    setLeadData(currentLeadData);
    setShowQuestionnaire(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

      {/* Hero Section with modern design */}
      <div className="relative w-full min-h-[700px] overflow-hidden">
        {/* Background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center z-10">
          {/* Left content */}
          <div className="lg:w-3/5 text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Webinar Gratuito • 23/06 às 20h</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-8 leading-tight lg:text-xl">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent block font-normal text-5xl">
                  MAIS QUE LUCRO:
                </span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent block text-4xl">
                  TRANSFORME SUA
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block text-3xl">
                  OPERAÇÃO EM CAIXA
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent block text-2xl">REAL COM SEGURANÇA</span>
                <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent text-2xl">
                  FINANCEIRA
                </span>
              </h1>
              
              <h2 className="lg:text-3xl text-white/90 mb-8 font-medium leading-relaxed text-lg">
                O Jogo Que os Grandes <span className="text-cyan-300 font-bold">NEGÓCIOS<br />
                Jogam Para Sempre Ter Caixa</span> — E Que<br />
                Nunca Ensinaram Para Pequenos Empresários
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl mb-8">
              <p className="text-xl font-bold text-white mb-4 uppercase">PARE DE OPERAR SUA EMPRESA SEM CAIXA</p>
              <p className="text-white/80 mb-6">Descubra como pequenas empresas estão conseguindo:</p>
              
              <ul className="space-y-4">
                {["Ter caixa forte mesmo com vendas parceladas", "Eliminar de vez o sufoco do fim do mês", "Saber exatamente o quanto podem parcelar sem quebrar", "Dormir tranquilo sem medo de boletos surpresa"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-6 rounded-xl text-white shadow-2xl">
              <p className="text-xl font-bold mb-2">"VENDO MAIS DE R$ 1 MILHÃO POR ANO, MAS O DINHEIRO SOME..."</p>
              <p className="text-yellow-100">
                Você já se perguntou por que sua empresa vende bem, mas o dinheiro nunca sobra no caixa?
              </p>
            </div>
          </div>
          
          {/* Right form */}
          <div className="lg:w-2/5">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl mb-6 text-center shadow-lg">
                <h3 className="text-2xl font-bold">WEBINAR GRATUITO</h3>
              </div>
              
              <h4 className="text-center font-bold mb-2 text-white text-lg">
                "COMO GERAR CAIXA FINANCEIRO NA SUA EMPRESA"
              </h4>
              <p className="text-center text-cyan-300 font-bold mb-8 text-xl">Dia 23/06 às 20h</p>
              
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Seu nome completo" 
                  className="bg-white/10 border-white/30 border-2 h-14 text-white placeholder:text-white/60 backdrop-blur-sm rounded-xl text-lg" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
                
                <Input 
                  type="email" 
                  placeholder="Insira seu Email" 
                  className="bg-white/10 border-white/30 border-2 h-14 text-white placeholder:text-white/60 backdrop-blur-sm rounded-xl text-lg" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                
                <div className="flex items-center gap-3 p-4 bg-white/10 border-2 border-white/30 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold py-2 px-3 rounded-lg">+55</span>
                  </div>
                  <span className="text-white/60">•</span>
                  <Input 
                    type="tel" 
                    placeholder="DDD • WhatsApp" 
                    className="bg-transparent border-0 h-10 text-white placeholder:text-white/60 p-0 focus-visible:ring-0 text-lg" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms} 
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} 
                    className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 border-white/50 mt-1" 
                  />
                  <label htmlFor="terms" className="text-sm text-white/80 leading-tight">
                    Aceito os Termos de Uso e Política de Privacidade, conforme a LGPD (Lei nº 13.709/2018).
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white h-16 font-bold disabled:opacity-50 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? 'PROCESSANDO...' : 'TRANSFORMAR MINHA EMPRESA'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Banner with modern gradient */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 py-4 overflow-hidden">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <span className="text-white font-bold mx-4 text-lg">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
          <span className="mx-4">•</span>
          <span className="text-white font-bold mx-4 text-lg">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
          <span className="mx-4">•</span>
          <span className="text-white font-bold mx-4 text-lg">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
        </div>
      </div>

      {/* Pain Points Section with modern design */}
      <div className="relative py-20 bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-orange-100/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-red-200 mb-8">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-medium">Por que mesmo com a empresa cheia</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                VOCÊ AINDA<br />
                NÃO TEM<br />
                DINHEIRO?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {["Entra no cheque especial todo mês", "Corre atrás de fornecedores pedindo prazo", "Não consegue formar uma reserva de segurança", "Tem estoque alto, mas caixa sempre baixo"].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                NÃO É CULPA SUA!
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                O problema não é falta de venda. O problema é que ninguém nunca te mostrou como transformar vendas em <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CAIXA REAL</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-card-bg py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            VOCÊ VAI <span className="text-brand-blue">DESCOBRIR</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-dark-bg rounded-lg animate-slide-up">
              <div className="bg-brand-blue p-2 rounded-full mr-4">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white">
                  O método simples que vai acabar com seu sufoco de fim de mês (mesmo vendendo a prazo)
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-dark-bg rounded-lg animate-slide-up animate-delay-100">
              <div className="bg-brand-blue p-2 rounded-full mr-4">
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white">
                  Como saber exatamente quanto você pode parcelar sem comprometer seu fluxo de caixa
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-dark-bg rounded-lg animate-slide-up animate-delay-200">
              <div className="bg-brand-blue p-2 rounded-full mr-4">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white">
                  A estratégia que identifica quais produtos estão "comendo" seu dinheiro (e quais estão gerando lucro de verdade)
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-dark-bg rounded-lg animate-slide-up animate-delay-300">
              <div className="bg-brand-blue p-2 rounded-full mr-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white">
                  Como parar de depender de empréstimos e começar a construir uma reserva financeira sólida
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-dark-bg rounded-lg animate-slide-up animate-delay-400">
              <div className="bg-brand-blue p-2 rounded-full mr-4">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white">
                  O sistema que transforma seu controle financeiro sem precisar virar um "planilheiro"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            SOBRE <span className="text-brand-blue">TIAGO LOPES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img 
                  alt="Tiago Lopes" 
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-brand-blue" 
                  src="/lovable-uploads/3c2262e4-e61b-4cd1-8286-6c454eb0a4d6.jpg" 
                />
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="space-y-4 text-gray-300">
              <p>
                Tiago Lopes é casado, pai orgulhoso de dois filhos e apaixonado por transformar desafios financeiros em oportunidades de crescimento. Com mais de 15 anos de experiência em finanças corporativas, ele não apenas domina os números, mas também entende as pessoas por trás deles.
              </p>
              
              <p>
                Autor e criador do revolucionário método <span className="text-brand-blue font-bold">"Gerar Caixa Financeiro"</span>, Tiago tem ajudado dezenas de organizações a prosperarem de forma sustentável. Sua abordagem prática e comprovada tem impactado empresas de diferentes setores, promovendo estabilidade, crescimento e uma contribuição direta para uma sociedade mais forte e saudável.
              </p>
              
              <p>
                Formado em Administração e Ciências Contábeis, com pós-graduação em Finanças Corporativas, Tiago alia uma base acadêmica sólida à experiência prática no mercado. Ele acredita que o sucesso de um negócio vai além do balanço patrimonial, envolvendo visão estratégica, propósito e o compromisso com um impacto positivo.
              </p>
              
              <p>
                Além de ser referência em finanças empresariais, Tiago é um eterno aprendiz e colaborador, cercando-se de outros especialistas excepcionais para criar soluções inovadoras que geram prosperidade para negócios e comunidades.
              </p>
              
              <p className="text-white font-medium">
                Se você busca ferramentas práticas, insights transformadores e um caminho claro para alavancar o sucesso financeiro da sua empresa, a masterclass de Tiago é o lugar certo. Junte-se a ele e descubra como transformar sua visão em resultados duradouros.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* This is for you if... */}
      <div className="py-16 bg-card-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ESTE TREINAMENTO É <span className="text-brand-blue">PARA VOCÊ SE</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {["Sua loja vende bem, mas você nunca vê esse dinheiro no caixa", "Você respira aliviado quando consegue pagar os boletos do mês", "Tem medo de dar muito prazo e quebrar", "Não sabe exatamente o que está dando lucro na sua loja", "Fica em pânico quando um cliente atrasa um pagamento", "Já tentou organizar o financeiro mas desistiu por falta de tempo"].map((item, index) => (
              <div key={index} className="bg-dark-bg p-6 rounded-lg animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium">{item}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-black to-card-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GARANTA SUA <span className="text-brand-blue">VAGA GRATUITA AGORA!</span>
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            As vagas são limitadas a 100 participantes
          </p>
          
          <form onSubmit={handleFooterSubmit} className="w-full max-w-md mx-auto space-y-4">
            <Input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              className="bg-white/10 border-white/20 h-12 text-white placeholder:text-gray-400" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white h-14 disabled:opacity-50 font-medium text-sm px-4 py-3 leading-tight"
            >
              {isLoading ? 'PROCESSANDO...' : 'QUERO PARTICIPAR'}
            </Button>
          </form>
          
          <div className="mt-8">
            <Button 
              onClick={scrollToTop} 
              variant="outline" 
              className="bg-transparent border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white text-sm px-4 py-2 h-12"
            >
              VOLTAR AO TOPO
            </Button>
          </div>
          
          <div className="mt-12 space-y-4 text-left bg-card-bg p-6 rounded-lg border border-gray-800">
            <p className="text-sm font-bold">
              P.S.: Não é mais uma palestra teórica. É um método prático desenvolvido especificamente por mim para empresas que faturam entre R$50 mil e R$200 mil por mês e sofrem com fluxo de caixa.
            </p>
            <p className="text-sm font-bold">
              P.S.2: Você receberá GRATUITAMENTE nossa planilha de diagnóstico financeiro, que vai mostrar exatamente onde seu dinheiro está "vazando" - mesmo que você não tenha experiência com planilhas.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-dark-bg border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Questionnaire Modal */}
      <Questionnaire 
        isOpen={showQuestionnaire} 
        onClose={() => setShowQuestionnaire(false)} 
        onSubmit={handleQuestionnaireSubmit} 
        leadData={leadData} 
      />
    </div>
  );
};

export default Index;
