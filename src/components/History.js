import React from "react";
import maac from "../img/maac.jpg";
export function History() {
  return (
    <>
      <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 ">
        <div className="grid grid-cols-6 gap-4">
        <time class="text-lg font-semibold text-gray-900 col-start-1 col-span-2">
          January 13th, 2022
        </time>
        <div class="text-base font-normal col-start-6 col-span-6 text-right">
                  <span class="font-medium text-gray-900 ">
                    Total: 
                  </span>
                  $4000
                </div>
        </div>
        

        <ol class="mt-3 divide-y divider-gray-200 ">
          <li>
            <a
              href="#"
              class="items-center block p-3 sm:flex hover:bg-gray-100 "
            >
              <img
                class="w-24 h-24 mb-3 mr-3 rounded-full sm:mb-0"
                src={maac}
                alt="Jese Leos image"
              />
              <div class="text-gray-600 relative">
                <div class="text-base font-normal">
                  <span class="font-medium text-gray-900 ">
                    Macbook Pro 2023
                  </span>
                </div>
                <div class="text-sm font-normal">2 Unidad(es)</div>
                <div class="text-base font-normal">$4000</div>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
