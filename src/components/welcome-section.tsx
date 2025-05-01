import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function WelcomeSection() {
  return (
    <section id="welcome" className="mb-16">
       <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="md:flex">
          <div className="md:w-1/2">
             <Image
              src="https://picsum.photos/800/600?random=13" // Changed random seed
              alt="Campus de Liceo Creativo"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              data-ai-hint="school campus" // Updated hint
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">¡Bienvenido a Liceo Creativo!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground mb-4">
                Tu centro de excelencia educativa donde el aprendizaje transforma tu futuro.
              </p>
              <p className="text-muted-foreground">
                En Liceo Creativo, nos dedicamos a ofrecer programas de alta calidad diseñados para impulsar tu carrera profesional y desarrollo personal. Explora nuestros cursos y únete a nuestra comunidad de aprendizaje.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
