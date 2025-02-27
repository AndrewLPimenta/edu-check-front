import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useLoader } from "../context/LoaderContext";
import "../styles/userPages.css";


const chatFlow = {
  inicio: {
    message: "Olá! Sou seu assistente virtual. Como posso te ajudar?",
    options: [
      { text: "Registrar presença", next: "registrar_presenca" },
      { text: "Ver histórico de presença", next: "historico_presenca" },
      { text: "Configurações", next: "configuracoes" },
      { text: "Falar com suporte", next: "suporte" },
    ],
  },

  registrar_presenca: {
    message: "Para registrar presença, você pode escanear o QR Code ou usar autenticação facial. Qual método deseja usar?",
    options: [
      { text: "QR Code", next: "qrcode" },
      { text: "Autenticação facial", next: "faceid" },
      { text: "Ajuda com isso", next: "ajuda_presenca" },
      { text: "Voltar", next: "inicio" },
    ],
  },

  ajuda_presenca: {
    message: "Se estiver tendo problemas, tente reiniciar o app ou verificar sua conexão. Deseja tentar de novo ou falar com o suporte?",
    options: [
      { text: "Tentar novamente", next: "registrar_presenca" },
      { text: "Falar com suporte", next: "suporte" },
    ],
  },

  qrcode: {
    message: "Ótimo! Abra sua câmera e escaneie o QR Code na tela do evento. Deu tudo certo?",
    options: [
      { text: "Sim, registrado!", next: "confirmacao_presenca" },
      { text: "Não, tive um problema", next: "ajuda_presenca" },
    ],
  },

  faceid: {
    message: "Posicione seu rosto na câmera e aguarde a validação. Funcionou corretamente?",
    options: [
      { text: "Sim, registrado!", next: "confirmacao_presenca" },
      { text: "Não, algo deu errado", next: "ajuda_presenca" },
    ],
  },

  confirmacao_presenca: {
    message: "Presença registrada com sucesso! Precisa de mais alguma coisa?",
    options: [
      { text: "Ver meu histórico", next: "historico_presenca" },
      { text: "Sair do chat", next: "fim" },
    ],
  },

  historico_presenca: {
    message: "Aqui está seu histórico de presença. Deseja baixar um relatório?",
    options: [
      { text: "Sim, baixar", next: "baixar_relatorio" },
      { text: "Não, só visualizar", next: "visualizar_relatorio" },
      { text: "Voltar", next: "inicio" },
    ],
  },

  baixar_relatorio: {
    message: "Seu relatório foi gerado! Ele será enviado para o seu e-mail. Precisa de mais alguma coisa?",
    options: [
      { text: "Voltar ao início", next: "inicio" },
      { text: "Sair do chat", next: "fim" },
    ],
  },

  configuracoes: {
    message: "Você pode alterar notificações, tema ou redefinir a senha. O que deseja configurar?",
    options: [
      { text: "Notificações", next: "notificacoes" },
      { text: "Tema", next: "tema" },
      { text: "Redefinir senha", next: "redefinir_senha" },
      { text: "Voltar", next: "inicio" },
    ],
  },

  notificacoes: {
    message: "Atualmente, as notificações estão ativadas. Deseja desativá-las?",
    options: [
      { text: "Sim, desativar", next: "notificacoes_desativadas" },
      { text: "Não, manter ativadas", next: "inicio" },
    ],
  },

  notificacoes_desativadas: {
    message: "Notificações desativadas! Você pode reativá-las nas configurações.",
    options: [{ text: "Voltar ao início", next: "inicio" }],
  },

  tema: {
    message: "Deseja alternar entre modo claro e escuro?",
    options: [
      { text: "Sim, mudar", next: "tema_alterado" },
      { text: "Não, manter como está", next: "inicio" },
    ],
  },

  tema_alterado: {
    message: "Tema atualizado com sucesso!",
    options: [{ text: "Voltar ao início", next: "inicio" }],
  },

  redefinir_senha: {
    message: "Para redefinir sua senha, enviamos um e-mail com um link de recuperação.",
    options: [{ text: "Voltar ao início", next: "inicio" }],
  },

  suporte: {
    message: "Você precisa de ajuda com qual assunto?",
    options: [
      { text: "Problema ao registrar presença", next: "ajuda_presenca" },
      { text: "Outro problema técnico", next: "problema_tecnico" },
      { text: "Falar com um humano", next: "suporte_humano" },
      { text: "Voltar", next: "inicio" },
    ],
  },

  problema_tecnico: {
    message: "Tente atualizar o aplicativo ou reiniciar seu dispositivo. Se o problema persistir, deseja falar com o suporte humano?",
    options: [
      { text: "Sim, falar com suporte", next: "suporte_humano" },
      { text: "Não, resolver sozinho", next: "inicio" },
    ],
  },

  suporte_humano: {
    message: "Um atendente humano entrará em contato em breve. Obrigado por sua paciência!",
    options: [{ text: "Voltar ao início", next: "inicio" }],
  },

  fim: {
    message: "Obrigado por utilizar nosso assistente virtual! Até logo! 👋",
    options: [],
  },
};

export default function ChatBot() {
  const { setLoading } = useLoader(); 
  const [chat, setChat] = useState([{ sender: "bot", text: chatFlow.inicio.message }]);
  const [currentStep, setCurrentStep] = useState("inicio");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setLoading(true); 
    setTimeout(() => setLoading(false), 1000); 
  }, [setLoading]); 

  const handleUserMessage = (option) => {
    setChat((prev) => [...prev, { sender: "user", text: option.text }]);
    
    setIsTyping(true);
    setTimeout(() => {
      setChat((prev) => [...prev, { sender: "bot", text: chatFlow[option.next].message }]);
      setCurrentStep(option.next);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <main>
      <Header />

      <div className="chat-container">
        <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && <div className="chat-typing">...</div>}
        </div>

        <div className="chat-options">
          {chatFlow[currentStep].options.map((option, index) => (
            <button key={index} className="chat-button" onClick={() => handleUserMessage(option)}>
              {option.text}
            </button>
          ))}
        </div>
      </div>

    </main>
  );
}
