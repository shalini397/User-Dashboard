import React from 'react'

const TableComponent = ({ tableHeadings = [], isLoading = true, children }) => {
  return (
    <>
    {isLoading?(
        <div className="animate-pulse">
        <table className="table-auto min-w-full border border-gray-300 text-left text-sm">            
           <thead class='bg-gray-100'>
               <tr>
               {tableHeadings.map((_, index) => (
                  <th
                    key={`skeleton-heading-${index}`}
                    className="h-6 bg-gray-200 border-b border-gray-300 px-4 rounded"
                  ></th>
                ))}
               </tr>
           </thead>
           <tbody className="divide-y divide-gray-200">
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={`skeleton-row-${rowIndex}`}>
                  {tableHeadings.map((_, cellIndex) => (
                    <td
                      key={`skeleton-cell-${rowIndex}-${cellIndex}`}
                      className="h-10 bg-gray-200 px-4 rounded px-4 py-3"
                    ></td>
                  ))}
                </tr>
              ))}
           </tbody>
        </table>
       </div>
    ):(
        <table className="table-auto min-w-full border border-gray-300 text-left text-sm">            
            <thead className='bg-gray-100'>
                <tr>
                {tableHeadings && tableHeadings.length>0 ? (<>
                    {tableHeadings.map((heading, index)=>{
                        return(
                            <th key={`heading-${index}`} className="border-b border-gray-300 px-4 py-3 font-medium text-gray-700">{heading}</th>
                        )
                    })}
                </>):(<></>)}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
               {children}
            </tbody>
        </table>
    )}
        
    </>
  )
}

export default TableComponent