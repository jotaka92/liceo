import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Calle Falsa 123, Ciudad Ejemplo, CP 08001</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+34900123456" className="hover:text-accent transition-colors">+34 900 123 456</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@liceocreativo.com" className="hover:text-accent transition-colors">info@liceocreativo.com</a>
            </div>
            {/* Optional: Add Map component here if needed */}
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Envíanos un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
