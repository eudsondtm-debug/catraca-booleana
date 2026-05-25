import { useState } from "react";

function App() {

  const [cartao, setCartao] = useState("");
  const [biometria, setBiometria] = useState("");
  const [alarme, setAlarme] = useState(false);

  const acessoLiberado =
    (cartao !== "" &&
      biometria !== "" &&
      cartao === biometria) || alarme;

  const mensagem = () => {

    if (alarme) {
      return "🚨 EMERGÊNCIA - CATRACAS LIBERADAS";
    }

    if (cartao === "" && biometria === "") {
      return "⏳ AGUARDANDO AUTENTICAÇÃO";
    }

    if (cartao === biometria) {
      return "✅ ACESSO LIBERADO";
    }

    return "🔒 ACESSO NEGADO";
  };

  const regraBooleana = () => {

    if (alarme) {
      return "C = V → S = V";
    }

    if (cartao === "" && biometria === "") {
      return "A = F | B = F | C = F → S = F";
    }

    if (cartao === biometria) {
      return "A = V | B = V | C = F → S = V";
    }

    return "A = V | B = F | C = F → S = F";
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-3 md:p-10">

      <div className="w-full max-w-7xl bg-slate-800 rounded-3xl shadow-2xl p-4 md:p-8">

        {/* TÍTULO */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-cyan-400 leading-tight">
          Sistema de Controle de Acesso
        </h1>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* PAINEL ESQUERDO */}
          <div className="bg-slate-700 rounded-3xl p-4 md:p-8">

            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Entradas do Sistema
            </h2>

            {/* CARTÃO */}
            <div className="mb-10">

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Cartão Inserido
              </h3>

              <div className="grid grid-cols-1 gap-4">

                <button
                  onClick={() => setCartao("")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    cartao === ""
                      ? "bg-slate-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  ⏳ Aguardando autenticação
                </button>

                <button
                  onClick={() => setCartao("João")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    cartao === "João"
                      ? "bg-cyan-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Cartão João
                </button>

                <button
                  onClick={() => setCartao("Carla")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    cartao === "Carla"
                      ? "bg-cyan-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Cartão Carla
                </button>

              </div>

            </div>

            {/* BIOMETRIA */}
            <div className="mb-10">

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Biometria Detectada
              </h3>

              <div className="grid grid-cols-1 gap-4">

                <button
                  onClick={() => setBiometria("")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    biometria === ""
                      ? "bg-slate-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  ⏳ Aguardando autenticação
                </button>

                <button
                  onClick={() => setBiometria("João")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    biometria === "João"
                      ? "bg-green-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Biometria João
                </button>

                <button
                  onClick={() => setBiometria("Carla")}
                  className={`p-4 md:p-5 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 ${
                    biometria === "Carla"
                      ? "bg-green-500 scale-105"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  Biometria Carla
                </button>

              </div>

            </div>

            {/* ALARME */}
            <button
              onClick={() => setAlarme(!alarme)}
              className={`w-full p-4 md:p-5 rounded-2xl text-lg md:text-2xl font-bold transition-all duration-300 ${
                alarme
                  ? "bg-yellow-400 text-black scale-105"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {alarme
                ? "🚨 ALARME ATIVADO"
                : "ALARME DESATIVADO"}
            </button>

          </div>

          {/* PAINEL DIREITO */}
          <div className="bg-slate-700 rounded-3xl p-4 md:p-8 flex flex-col items-center justify-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Estado da Catraca
            </h2>

            {/* LED */}
            <div
              className={`w-36 h-36 md:w-52 md:h-52 rounded-full mb-8 shadow-2xl transition-all duration-500 ${
                alarme
                  ? "bg-yellow-400 shadow-yellow-400/60 animate-pulse"
                  : acessoLiberado
                  ? "bg-green-500 shadow-green-500/60"
                  : "bg-red-500 shadow-red-500/60"
              }`}
            ></div>

            {/* STATUS */}
            <div className="text-xl md:text-3xl font-bold text-center mb-8 leading-relaxed">
              {mensagem()}
            </div>

            {/* DETALHES */}
            <div className="w-full bg-slate-900 rounded-3xl p-4 md:p-6 space-y-4 text-base md:text-lg">

              <div className="break-words">
                <span className="font-bold text-cyan-400">
                  Cartão:
                </span>{" "}
                {cartao || "Aguardando"}
              </div>

              <div className="break-words">
                <span className="font-bold text-green-400">
                  Biometria:
                </span>{" "}
                {biometria || "Aguardando"}
              </div>

              <div className="break-words">
                <span className="font-bold text-yellow-400">
                  Resultado:
                </span>{" "}
                {acessoLiberado
                  ? "Liberação autorizada"
                  : "Acesso bloqueado"}
              </div>

            </div>

            {/* REGRA BOOLEANA */}
            <div className="mt-8 md:mt-10 text-center w-full">

              <div className="text-lg md:text-xl mb-4 text-slate-300">
                Regra Booleana Aplicada
              </div>

              <div className="bg-slate-900 rounded-3xl p-4 md:p-6 text-lg md:text-3xl font-bold text-cyan-400 break-words leading-relaxed">

                {regraBooleana()}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;