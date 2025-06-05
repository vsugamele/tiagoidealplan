import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Check, Upload, User, Sparkles } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import Questionnaire from "@/components/Questionnaire";

const Video = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [leadData, setLeadData] = useState<any>(null);
  const navigate = useNavigate();
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
      source: 'landing_page_video_form'
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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Facebook Pixel Code */}
      <script dangerouslySetInnerHTML={{
      __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.com/en_US/fbevents.js');
            fbq('init', '1073091231347696');
            fbq('track', 'PageView');
          `
    }} />
      <noscript>
        <img height="1" width="1" style={{
        display: 'none'
      }} src="https://www.facebook.com/tr?id=1073091231347696&ev=PageView&noscript=1" alt="" />
      </noscript>

      {/* Hero Section with Video */}
      <div className="relative w-full min-h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-8 w-full max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Webinar Gratuito • 23/06 às 20h</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Mais que LUCRO: </span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent block">TRANSFORME sua operação</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">EM CAIXA real com segurança financeira</span>
              </h1>
            </div>
            
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-8 text-white/90 max-w-4xl">
              Assista ao vídeo e descubra como <span className="text-cyan-300 font-bold">GERAR CAIXA<br />
              FINANCEIRO</span> na sua empresa
            </h2>
            
            {/* YouTube Video Container - Centralized */}
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl mb-12 w-full max-w-5xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/l96QD7MjH-8"
                  title="Como Gerar Caixa Financeiro"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Benefits List */}
            <ul className="space-y-4 mb-8 max-w-2xl">
              {["Ter caixa forte mesmo com vendas parceladas", "Eliminar de vez o sufoco do fim do mês", "Saber exatamente o quanto podem parcelar sem quebrar"].map((item, index) => <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-lg">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>)}
            </ul>
          </div>
          
          {/* Form - Centered */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl mb-6 text-center shadow-lg">
                <h3 className="text-xl font-bold">WEBINAR GRATUITO</h3>
              </div>
              <p className="text-center font-bold mb-2 text-white text-sm sm:text-base">"COMO GERAR CAIXA FINANCEIRO NA SUA EMPRESA"</p>
              <p className="text-center text-cyan-300 font-bold mb-8">Dia 23/06 às 20h</p>
              
              <div className="space-y-4">
                <Input type="text" placeholder="Seu nome completo" className="bg-white/10 border-white/30 border-2 h-12 text-white placeholder:text-white/60 backdrop-blur-sm rounded-xl" value={name} onChange={e => setName(e.target.value)} />
                
                <Input type="email" placeholder="Insira seu Email" className="bg-white/10 border-white/30 border-2 h-12 text-white placeholder:text-white/60 backdrop-blur-sm rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
                
                <div className="flex items-center gap-3 p-3 bg-white/10 border-2 border-white/30 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold py-1 px-2 rounded">+55</span>
                  </div>
                  <span className="text-white/60">•</span>
                  <Input type="tel" placeholder="DDD • WhatsApp" className="bg-transparent border-0 h-8 text-white placeholder:text-white/60 p-0 focus-visible:ring-0" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={acceptTerms} onCheckedChange={checked => setAcceptTerms(checked as boolean)} className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 border-white/50 mt-1" />
                  <label htmlFor="terms" className="text-xs text-white/80 leading-tight">
                    Aceito os Termos de Uso e Política de Privacidade, conforme a LGPD (Lei nº 13.709/2018).
                  </label>
                </div>
                
                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white h-auto py-3 font-semibold disabled:opacity-50 text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center leading-tight">
                  {isLoading ? 'PROCESSANDO...' : <>
                      QUERO TRANSFORMAR<br />
                      MINHA EMPRESA EM UMA<br />
                      MÁQUINA DE LUCRO
                    </>}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Blue Banner with modern gradient */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 py-4 overflow-hidden">
        <div className="animate-marquee inline-block whitespace-nowrap">
          <span className="text-white font-bold mx-4">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
          <span className="mx-4">•</span>
          <span className="text-white font-bold mx-4">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
          <span className="mx-4">•</span>
          <span className="text-white font-bold mx-4">⚡ VAGAS LIMITADAS A 100 PARTICIPANTES</span>
        </div>
      </div>

      {/* Biography Section with modern design */}
      <div className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SOBRE </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">TIAGO LOPES</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-75"></div>
                <img alt="Tiago Lopes" className="relative w-80 h-96 lg:w-96 lg:h-[432px] object-cover rounded-2xl shadow-2xl" src="/lovable-uploads/b7a790d3-daf9-4f43-8094-9ea053691e77.jpg" />
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-white/20 shadow-2xl">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                Tiago Lopes é casado, pai orgulhoso de dois filhos e apaixonado por transformar desafios financeiros em oportunidades de crescimento. Com mais de 15 anos de experiência em finanças corporativas, ele não apenas domina os números, mas também entende as pessoas por trás deles.
              
                Autor e criador do revolucionário método <span className="text-brand-blue font-bold">"Gerar Caixa Financeiro"</span>, Tiago tem ajudado dezenas de organizações a prosperarem de forma sustentável. Sua abordagem prática e comprovada tem impactado empresas de diferentes setores, promovendo estabilidade, crescimento e uma contribuição direta para uma sociedade mais forte e saudável.
              
                Formado em Administração e Ciências Contábeis, com pós-graduação em Finanças Corporativas, Tiago alia uma base acadêmica sólida à experiência prática no mercado. Ele acredita que o sucesso de um negócio vai além do balanço patrimonial, envolvendo visão estratégica, propósito e o compromisso com um impacto positivo.
              
                Além de ser referência em finanças empresariais, Tiago é um eterno aprendiz e colaborador, cercando-se de outros especialistas excepcionais para criar soluções inovadoras que geram prosperidade para negócios e comunidades.
              
                Se você busca ferramentas práticas, insights transformadores e um caminho claro para alavancar o sucesso financeiro da sua empresa, a masterclass de Tiago é o lugar certo. Junte-se a ele e descubra como transformar sua visão em resultados duradouros.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with modern design */}
      <footer className="py-12 bg-gradient-to-r from-slate-900 to-blue-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-6 md:mb-0">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Questionnaire Modal */}
      <Questionnaire isOpen={showQuestionnaire} onClose={() => setShowQuestionnaire(false)} onSubmit={handleQuestionnaireSubmit} leadData={leadData} />
    </div>;
};
export default Video;
