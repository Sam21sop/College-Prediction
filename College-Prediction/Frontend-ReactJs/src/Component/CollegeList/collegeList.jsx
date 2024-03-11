
export default function CollegeList() {

  return (
    <>  
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className=" bg-yellow-100 flex items-center justify-center text-center p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">List of Top Colleges</h3>
            </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="text-center p-4 sm:p-6 dark:bg-gray-800">
                <h4 className="box" style={{gap:"4px", backgroundColor:"red", width:"50px", height:"50px", border:"1ppx solid black"}}>college 1</h4>
                <h4 className="box" style={{gap:"4px", backgroundColor:"red", width:"50px", height:"50px", border:"1ppx solid black"}}>college 2</h4>
                <h4 className="box">college 3</h4>
                <h4 className="box">college 4</h4>
                <h4 className="box">college 5</h4>
                <h4 className="box">college 6</h4>
                <h4 className="box">college 7</h4>
                <h4 className="box">college 8</h4>
                <h4 className="box">college 9</h4>
                <h4 className="box">college 10</h4>
            </div>
        </div>
    </>
  )
}
