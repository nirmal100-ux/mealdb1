import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSearchMealQuery } from '../features/mealApi';




const Search = () => {
  const { search } = useParams();



  const { data, isLoading, isError, error } = useSearchMealQuery(search);

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  if (data?.results?.length < 1) {
    return <h1 className='text-red-600 text-2xl w-[25%] mx-auto mt-20'>Try using another keyword</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-5 p-6'>
      {data.meals.map((meal) => {
        return <div onClick={() => nav(`/meals/detail2/${meal.idMeal}`)} key={meal.idMeal} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
          <img src={`${meal.strMealThumb}`} alt="" />

          <div className='p-3 space-y-2'>
            <h1 className='text-xl font-bold'>{meal.strMeal}</h1>
            <p>{meal.strInstructions.substring(0, 150) + '...'}</p>
          </div>

        </div>
      })}

    </div>
  )
}

export default Search
