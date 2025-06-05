
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface QuestionnaireData {
  razaoSocial: string;
  cnpj: string;
  responsavel: string;
  regimeTributario: string;
  receitaGerencial: string;
  caixaFinanceiro: string;
  quantidadeColaboradores: string;
}

interface QuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: QuestionnaireData) => void;
  leadData: {
    nome: string;
    email: string;
    telefone: string;
    source: string;
  };
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ isOpen, onClose, onSubmit, leadData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuestionnaireData>({
    razaoSocial: '',
    cnpj: '',
    responsavel: '',
    regimeTributario: '',
    receitaGerencial: '',
    caixaFinanceiro: '',
    quantidadeColaboradores: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (field: keyof QuestionnaireData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.razaoSocial || !formData.cnpj || !formData.responsavel) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos para continuar.",
          variant: "destructive"
        });
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.regimeTributario || !formData.receitaGerencial) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, selecione todas as opções para continuar.",
          variant: "destructive"
        });
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (!formData.caixaFinanceiro || !formData.quantidadeColaboradores) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, selecione todas as opções para finalizar.",
        variant: "destructive"
      });
      return;
    }
    onSubmit(formData);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Informações da empresa</h3>
      
      <div>
        <Label className="text-sm font-medium text-gray-300">1° RAZÃO SOCIAL: *</Label>
        <Input
          placeholder="Sua resposta"
          className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 mt-1"
          value={formData.razaoSocial}
          onChange={(e) => handleInputChange('razaoSocial', e.target.value)}
        />
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-300">2° CNPJ DA EMPRESA: *</Label>
        <Input
          placeholder="Sua resposta"
          className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 mt-1"
          value={formData.cnpj}
          onChange={(e) => handleInputChange('cnpj', e.target.value)}
        />
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-300">3° RESPONSÁVEL DA EMPRESA: *</Label>
        <Input
          placeholder="Sua resposta"
          className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 mt-1"
          value={formData.responsavel}
          onChange={(e) => handleInputChange('responsavel', e.target.value)}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Regime tributário e faturamento</h3>
      
      <div>
        <Label className="text-sm font-medium text-gray-300 block mb-3">4° REGIME TRIBUTÁRIO: *</Label>
        <RadioGroup
          value={formData.regimeTributario}
          onValueChange={(value) => handleInputChange('regimeTributario', value)}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="simples_nacional" id="simples" className="border-gray-500" />
            <Label htmlFor="simples" className="text-gray-300">SIMPLES NACIONAL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="presumido" id="presumido" className="border-gray-500" />
            <Label htmlFor="presumido" className="text-gray-300">PRESUMIDO</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lucro_real" id="lucro_real" className="border-gray-500" />
            <Label htmlFor="lucro_real" className="text-gray-300">LUCRO REAL</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-300 block mb-3">5° RECEITA GERENCIAL ANUAL DA EMPRESA: *</Label>
        <RadioGroup
          value={formData.receitaGerencial}
          onValueChange={(value) => handleInputChange('receitaGerencial', value)}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="600k_1.5mi" id="600k_1.5mi" className="border-gray-500" />
            <Label htmlFor="600k_1.5mi" className="text-gray-300">600 MIL A 1,5 MILHÃO</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1.5mi_3mi" id="1.5mi_3mi" className="border-gray-500" />
            <Label htmlFor="1.5mi_3mi" className="text-gray-300">1,5 MILHÃO A 3 MILHÕES</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3mi_5mi" id="3mi_5mi" className="border-gray-500" />
            <Label htmlFor="3mi_5mi" className="text-gray-300">3 MILHÕES A 5 MILHÕES</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5mi_10mi" id="5mi_10mi" className="border-gray-500" />
            <Label htmlFor="5mi_10mi" className="text-gray-300">5 MILHÕES A 10 MILHÕES</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10mi_acima" id="10mi_acima" className="border-gray-500" />
            <Label htmlFor="10mi_acima" className="text-gray-300">10 MILHÕES ACIMA</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">Objetivos e estrutura</h3>
      
      <div>
        <Label className="text-sm font-medium text-gray-300 block mb-3">6° QUAL CAIXA FINANCEIRO QUE DESEJA CONSTRUIR NA EMPRESA: *</Label>
        <RadioGroup
          value={formData.caixaFinanceiro}
          onValueChange={(value) => handleInputChange('caixaFinanceiro', value)}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100k_500k" id="100k_500k" className="border-gray-500" />
            <Label htmlFor="100k_500k" className="text-gray-300">100 MIL A 500 MIL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="500k_1mi" id="500k_1mi" className="border-gray-500" />
            <Label htmlFor="500k_1mi" className="text-gray-300">500 MIL A 1 MILHÃO</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1mi_5mi" id="1mi_5mi" className="border-gray-500" />
            <Label htmlFor="1mi_5mi" className="text-gray-300">1 MILHÃO A 5 MILHÕES</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="acima_5mi" id="acima_5mi" className="border-gray-500" />
            <Label htmlFor="acima_5mi" className="text-gray-300">ACIMA DE 5 MILHÕES</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-300 block mb-3">7° QUANTIDADE DE COLABORADORES NA EMPRESA: *</Label>
        <RadioGroup
          value={formData.quantidadeColaboradores}
          onValueChange={(value) => handleInputChange('quantidadeColaboradores', value)}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1_15" id="1_15" className="border-gray-500" />
            <Label htmlFor="1_15" className="text-gray-300">1 A 15</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15_30" id="15_30" className="border-gray-500" />
            <Label htmlFor="15_30" className="text-gray-300">15 A 30</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="30_45" id="30_45" className="border-gray-500" />
            <Label htmlFor="30_45" className="text-gray-300">30 A 45</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="45_60" id="45_60" className="border-gray-500" />
            <Label htmlFor="45_60" className="text-gray-300">45 A 60</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">
            QUESTIONÁRIO - PARTE {currentStep}/3
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              onClick={handleBack}
              variant="outline"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              VOLTAR
            </Button>
          )}
          
          <div className="ml-auto">
            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white"
              >
                CONTINUAR
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                FINALIZAR INSCRIÇÃO
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
