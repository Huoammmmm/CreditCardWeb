import React, { useState } from 'react';

export default function App() {
        const [putar, setPutar] = useState(false)
        const [rating, setRating] = useState(0);

        const handleRatingChange = (value) => {
          setRating(value);
        };

        const getMessage = (value) => {
            switch (value) {
              case 1:
                return 'Terrible';
              case 2:
                return 'Bad';
              case 3:
                return 'OK';
              case 4:
                return 'Good';
              case 5:
                return 'Excellent';
              default:
                return '';
            }
          };
  return (
    <div class="flex justify-center mt-4">
        <div class={`absolute flex-col mt-4 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl w-64 transition-all duration-500 preserve-3d
        backface-hidden z-10 h-[143px] ${putar? 'z-0 my-rotate-y-180' : 'z-10'}`} onClick={() => setPutar(true)}>
            <div class="absolute flex pr-3 tracking-widest font-semibold ml-[140px]">MasterCard</div>
            <div class="w-1/4 -mt-3"><img src="./asset/CCC.png" alt=""/></div>
            <div class="flex justify pl-3 font-bold">9759 2484 2569 6767</div>
            <div class="pl-6 text-xs font-semibold">valid Thru <br /> 12/24</div>
            <div class="flex-row">
                <div class="w-1/2 pl-3 pt-2 tracking-widest text-xs font-bold">Andy</div>
                <div class="float-right -mt-10 w-1/2"><img class="object-contain ml-4" src="./asset/LogoMC.png" alt="" /></div>
            </div>
        </div>

        <div class={`absolute flex-col mt-4 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl w-64 transition-all duration-500 preserve-3d
        backface-hidden z-10 h-[143px] ${putar? 'z-10' : 'z-0 my-rotate-y-180'}`} onClick={() => setPutar(false)}>
        <div class="pl-3 pt-0 tracking-widest text-xs font-bold p-7 text-right"> <img src="" alt="" /></div>
        <img src="./asset/line.png" alt="" class="w-80 h-6 object-cover"/>
        <div class="flex p-4">
            <div class="w-2/4 pl-3 pt-2 tracking-widest text-xs font-bold text-right bg-white"></div>
            <div class="w-1/4 pl-3 pt-2 tracking-widest text-xs font-bold text-right"></div>
            <div class="w-1/4 pl-3 pt-2 tracking-widest text-xs font-bold bg-white">911</div>
            <div class="pl-3 pt-2 tracking-widest text-xs font-bold p-1 text-right"></div>
        </div>

        </div>

        <div class="flex-col mt-44 p-4 min-w-min">
        <h2 class="text-lg font-semibold mb-2 ml-[50px]">Rating</h2>
        <div class="flex justify-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} class="mx-1">
              <input
                type="radio"
                name="newRating"
                value={value}
                onChange={() => handleRatingChange(value)}
                style={{ display: 'none' }}
              />
              <span
                class={`text-3xl cursor-pointer ${
                  value <= rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
                onClick={() => handleRatingChange(value)}
              >
                {value <= rating ? '\u2605' : '\u2606'}
              </span>
            </label>
          ))}
        </div>
        <p class="mt-4">
          {rating > 0 ? `You rated it as "${getMessage(rating)}"` : ''}
        </p>
      </div>
    </div>
  );
}