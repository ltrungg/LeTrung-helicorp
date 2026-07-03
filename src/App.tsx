import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Story } from './components/Story';
import { Specs } from './components/Specs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { useTheme, useScrollReveal, useScrollTracking } from './hooks';

/**
 * Root application component.
 * Orchestrates theme, scroll animations, analytics, and page sections.
 */
function App() {
  const { isDark, toggleTheme } = useTheme();
  useScrollReveal();
  useScrollTracking();

  return (
    <>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Story />
        <Specs />
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
