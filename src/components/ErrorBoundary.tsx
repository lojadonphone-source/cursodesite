import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Evita que um erro inesperado deixe a página em branco. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Erro na página:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink-950 p-6 text-center text-mist-100">
          <div className="max-w-md rounded-3xl border border-white/10 bg-ink-800/80 p-8">
            <h1 className="font-display text-xl font-bold">Algo deu errado ao carregar a página</h1>
            <p className="mt-3 text-mist-300">Recarregue a página para tentar novamente.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-2xl bg-linear-to-b from-cta-500 to-cta-700 px-6 py-3 font-display font-bold uppercase tracking-wide text-white shadow-cta transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
