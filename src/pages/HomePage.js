import React from 'react'
import { useGetCategoryFoodQuery, useGetRandomFoodQuery } from '../features/mealApi'
import { useNavigate } from 'react-router';





const HomePage = () => {

  const { data, isError, error, isLoading } = useGetCategoryFoodQuery();
  const { data: dat, isLoading: load, isError: isE, error: err } = useGetRandomFoodQuery();



  const nav = useNavigate()


  if (isLoading || load) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  console.log(data);


  return (
    <div>
      <div className='flex py-9 bg-brown-200'>
        <div>
          <img src="https://themealdb.com/images/meal-icon.png" alt="" />
        </div>

        <div className='  px-20'>
          <h1 className='font-bold text-4xl'>WELCOME TO THE MEALDB</h1>
          <p className='text-red-800'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the wrold.</p>
          <p className='text-red-800'> We also offer a free Json API  for anyone wanting to use it, with additional features for subscribers.</p>
        </div>

        <div>
          <img src="https://themealdb.com/images/meal-icon.png" alt="" />
        </div>

      </div>


      <div className=' bg-brown-300'>
        <h1 className='text-center  text-3xl font-bold'> Meal categories</h1>
      </div>

      <div>
        <img src="https://themealdb.com/images/separator.jpg" alt="" />
      </div>


      <div className=' grid bg-brown-300 grid-cols-3 gap-7 p-5 items-start  msm:grid-cols-1 mmd:grid-cols-2'>
        {data.categories.map((meal) => {
          return <div
            onClick={() => nav(`/meals/detail/${meal.strCategory}`)}
            key={meal.idCategory} className='space-y-5 shadow-2xl cursor-pointer'>
            <h1 className='text-2xl font-bold tracking-wider'
            >{meal.strCategory}</h1>
            <img src={meal.strCategoryThumb} alt="" />
            <p>{meal.strCategoryDescription.substring(0, 150) + '....'}</p>


          </div>
        })}



      </div>










      <div className=' bg-brown-300 py-4' >
        <h1 className='text-center  text-3xl font-bold'>Random Meal</h1>
      </div>
      <div>
        <img src="https://themealdb.com/images/separator.jpg" alt="" />
      </div>


      <div className=' bg-brown-300  gap-7 p-5 items-start  msm:grid-cols-2 mmd:grid-cols-2'>
        <div>
          {dat.meals.map((meal) => {
            return <div key={meal.idMeal} className='grid grid-cols-3  space-y-5 shadow-2xl cursor-pointer '>

              <div>
                <h1 className='text-2xl font-bold tracking-wider'
                >{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt="" />
                <p>{meal.strInstructions.substring(0, 150) + '....'}</p>

              </div>

              <div className='px-60 grid ' >
                <div><h1 className='font-bold text-3xl'>Ingredient</h1></div>
                <h1>{meal.strIngredient1}</h1>
                <h1>{meal.strIngredient2}</h1>
                <h1>{meal.strIngredient3}</h1>
                <h1>{meal.strIngredient4}</h1>
                <h1>{meal.strIngredient5}</h1>
                <h1>{meal.strIngredient6}</h1>
                <h1>{meal.strIngredient7}</h1>
                <h1>{meal.strIngredient8}</h1>

              </div>

            </div>




          })}

        </div>




      </div>






    </div>
  )
}

export default HomePage

