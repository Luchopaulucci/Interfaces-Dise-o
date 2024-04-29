
import { useEffect, useState } from 'react';
import ExerciseCard from './../components/ExerciseCard';
import Ejercicios from '../Assets/ejercicioInfo.json'

const Index = () => {
  const [ejercicios, setEjercicios] = useState(null);

  function infoEjercicios() {
    setEjercicios(Ejercicios.exercises);
  }

  console.log(ejercicios);

  useEffect(() => {
    infoEjercicios();
    }, [])

  return (
    <div className="h-[90vh] w-full flex items-center flex-col">
        <div className="flex items-center justify-center flex-col h-12 mt-24 gap-4">
          <h1 className="text-5xl italic">BUGS BUSTER</h1>
          <h2 className="text-xl">Pantallas de los Flujos de Casos de Usos</h2>
        </div>
        <div className="w-11/12 flex items-center justify-center flex-row flex-wrap mt-24 gap-11">
        {Array.isArray(ejercicios) && ejercicios.map((ejercicios) => (
          <ExerciseCard
            key={ejercicios.name}
            name={ejercicios.name}
            description={ejercicios.description}
            link={ejercicios.link}
            page={ejercicios.page}
          />
        ))}
        </div>
    </div>
  )
}

export default Index