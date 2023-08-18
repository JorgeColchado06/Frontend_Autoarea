import React, { useContext, useEffect } from "react";
import { PurchasesContext } from "../contexts/PurchasesContext";

export const History = () => {
  const { history } = useContext(PurchasesContext);
  console.log(history)
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  return (
    <>
      {history.map((item) => (
        <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 " key={item.total}>
          <div className="grid grid-cols-6 gap-4">
            <time class="text-lg font-semibold text-gray-900 col-start-1 col-span-2">
              {formatDate(item.DATE)}
            </time>
            <div class="text-base font-normal col-start-6 col-span-6 text-right">
              <span class="font-medium text-gray-900 ">Total:</span>$
              {item.TOTAL}
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
                  src={item.IMAGE}
                  alt="Jese Leos image"
                />
                <div class="text-gray-6L0 relative">
                  <div class="text-base font-normal">
                    <span class="font-medium text-gray-900 ">
                      {item.PRODUCT}
                    </span>
                  </div>
                  <div class="text-sm font-normal">{item.QUANTITY} Unidad(es)</div>
                  
                </div>
              </a>
            </li>
          </ol>
        </div>
      ))}
    
    </>
  );
};
