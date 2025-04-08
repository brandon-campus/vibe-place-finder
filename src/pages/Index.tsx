
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainOptions from '@/components/MainOptions';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-jama-primary to-jama-secondary bg-clip-text text-transparent">
            Encuentra tu lugar ideal
          </h1>
          <p className="text-xl text-muted-foreground">
            Jama te ayuda a descubrir el lugar perfecto para cada momento, según tus preferencias y estado de ánimo.
          </p>
        </div>
        
        <MainOptions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
