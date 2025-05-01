import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Placeholder data - replace with actual course data
const courses = [
  {
    id: 1,
    title: 'Desarrollo Web Full Stack',
    description: 'Aprende a construir aplicaciones web completas desde cero con las tecnologías más demandadas.',
    image: 'https://picsum.photos/600/400?random=10', // Changed random seed
    imageHint: 'full stack web development', // Updated hint
  },
  {
    id: 2,
    title: 'Marketing Digital Estratégico',
    description: 'Domina las estrategias y herramientas clave para impulsar negocios en el entorno digital.',
    image: 'https://picsum.photos/600/400?random=11', // Changed random seed
    imageHint: 'web page marketing', // Updated hint
  },
  {
    id: 3,
    title: 'Diseño Gráfico y UX/UI',
    description: 'Crea interfaces atractivas y funcionales, mejorando la experiencia del usuario.',
    image: 'https://picsum.photos/600/400?random=12', // Changed random seed
     imageHint: 'user interface design', // Updated hint
  },
];

export function CourseListing() {
  return (
    <section id="courses" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Nuestros Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
             <div className="relative h-48 w-full">
               <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={course.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription className="h-20 overflow-hidden">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
             {/* Additional content if needed */}
            </CardContent>
            <CardFooter>
               <Button asChild variant="outline" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200">
                 <Link href={`/courses/${course.id}`}>
                    Más Detalles <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
