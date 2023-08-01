import { useNavigate, useParams } from "react-router";
import { useMealBYIDQuery } from "../features/mealApi";

const Details = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const { data, isLoading, isError, error } = useMealBYIDQuery(id);


  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (

    <div className='grid bg-brown-700 grid-cols-3 gap-7 p-5 items-start'>
      {data.meals.map((meal) => {
        return <div onClick={() => nav(`/meals/detail2/${meal.idMeal}`)} key={meal.idMeal} className='space-y-5 shadow-2xl cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-wider'
          >{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt="" />


        </div>
      })}



    </div>
  )
}
export default Details