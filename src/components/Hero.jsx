import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

function Hero() {
  return (
    <div>
      <div className="hero py-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Carousel/>
          <div>
            <h1 className="text-5xl font-bold">We are changing the way people shop</h1>
            <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
            <button className="btn btn-primary"><a href="/products">Our Products</a></button>
                                      </div>
                                      
          </div>
        </div>
        <ul>
        <li>
                  <div className=" main card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://cdn0.divan.by/img/v1/59eKPNkZE9oVKG2Dlc1JjjW72V0HDA5lceheHqbYrnk/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4MzEzNjQucG5n.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://cdn0.divan.by/img/v1/fSRGGeFZqUuvwpZ-S2-noJHGJLqFUkrglkFEbrCfdn0/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ2NDUxNzAucG5n.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                </ul>          
      </div>
   
  )
}

export default Hero
