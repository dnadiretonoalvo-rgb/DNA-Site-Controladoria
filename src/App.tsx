import React, { useState, useEffect } from 'react';
import { PageId, DiagnosticSituation } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ContractControlView } from './components/ContractControlView';
import { SupplierControlView } from './components/SupplierControlView';
import { ComplianceView } from './components/ComplianceView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { DiagnosticModal } from './components/DiagnosticModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [diagnosticSituation, setDiagnosticSituation] = useState<DiagnosticSituation>('ainda-nao-sei');

  const handleOpenDiagnostic = (initialSituation: DiagnosticSituation = 'ainda-nao-sei') => {
    setDiagnosticSituation(initialSituation);
    setIsDiagnosticOpen(true);
  };

  const handleNavigate = (page: PageId) => {
    if (['para-quem-e', 'como-funciona', 'faq'].includes(page)) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById(page);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-900 selection:text-white">
      {/* Executive Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => handleOpenDiagnostic('ainda-nao-sei')}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'contratos' && (
          <ContractControlView
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'fornecedores' && (
          <SupplierControlView
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'compliance' && (
          <ComplianceView
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenDiagnostic}
          />
        )}

        {currentPage === 'sobre' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenDiagnostic={() => handleOpenDiagnostic('ainda-nao-sei')}
          />
        )}

        {(currentPage === 'contato' || currentPage === 'diagnostico') && (
          <ContactView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Executive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => handleOpenDiagnostic('ainda-nao-sei')}
      />

      {/* Persistent Floating WhatsApp Channel */}
      <WhatsAppFloatingButton />

      {/* Central Diagnostic Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        initialSituation={diagnosticSituation}
      />
    </div>
  );
}
