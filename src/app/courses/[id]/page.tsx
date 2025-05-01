import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, Users } from "lucide-react";

// Placeholder data - replace with actual data fetching logic
const getCourseData = (id: string) => {
  // In a real app, you would fetch this data from an API or database
  const courses = {
    '1': {
      id: 1,
      title: 'Desarrollo Web Full Stack',
      description: 'Aprende a construir aplicaciones web completas desde cero con las tecnologías más demandadas. Cubriremos frontend con React, backend con Node.js y bases de datos.',
      image: 'https://picsum.photos/1200/600?random=10', // Changed random seed
      imageHint: 'full stack web development laptop', // Updated hint
      duration: '12 semanas',
      modality: 'Online / Presencial',
      level: 'Intermedio',
    },
    '2': {
      id: 2,
      title: 'Marketing Digital Estratégico',
      description: 'Domina las estrategias y herramientas clave para impulsar negocios en el entorno digital. Aprende sobre SEO, SEM, redes sociales, email marketing y analítica web.',
      image: 'https://picsum.photos/1200/600?random=11', // Changed random seed
      imageHint: 'web page marketing analytics', // Updated hint
      duration: '8 semanas',
      modality: 'Online',
      level: 'Principiante a Intermedio',
    },
    '3': {
      id: 3,
      title: 'Diseño Gráfico y UX/UI',
      description: 'Crea interfaces atractivas y funcionales, mejorando la experiencia del usuario. Aprende principios de diseño, herramientas como Figma y metodologías UX/UI.',
      image: 'https://picsum.photos/1200/600?random=12', // Changed random seed
      imageHint: 'user interface design figma', // Updated hint
      duration: '10 semanas',
      modality: 'Online',
      level: 'Principiante',
    },
  };
  // @ts-ignore
  return courses[id] || null;
};

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseData(params.id);

  if (!course) {
    return (
       <div className="container mx-auto px-4 py-12 text-center">
         <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
         <p className="text-muted-foreground mb-6">El curso que buscas no existe o ha sido movido.</p>
          <Button asChild variant="outline">
             <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
            </Link>
          </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/#courses">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Cursos
        </Link>
      </Button>
      <Card className="overflow-hidden shadow-lg">
         <div className="relative h-64 md:h-96 w-full">
           <Image
            src={course.image}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={course.imageHint}
          />
        </div>
        <CardHeader className="pt-6">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{course.title}</CardTitle>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
             <div className="flex items-center gap-1.5">
               <Clock className="h-4 w-4" />
               <span>Duración: {course.duration}</span>
             </div>
             <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>Modalidad: {course.modality}</span>
             </div>
             <div className="flex items-center gap-1.5">
               <Users className="h-4 w-4" />
                <span>Nivel: {course.level}</span>
             </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg mb-6">{course.description}</CardDescription>
           {/* Add more course details here, like syllabus, instructors, etc. */}
           <p className="mb-4">Aquí irían más detalles sobre el contenido del curso, los instructores, el temario detallado, requisitos previos, y testimonios de estudiantes.</p>
           <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200">
             Inscribirse Ahora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Optional: Generate static paths if you know all course IDs at build time
// export async function generateStaticParams() {
//   // Fetch all course IDs
//   const courseIds = ['1', '2', '3']; // Replace with actual fetch logic
//   return courseIds.map((id) => ({
//     id,
//   }));
// }
