

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">Announcements</h1>
            <span className="text-gray-400 text-xs">ViewAll</span>
        </div>

        <div className="flex flex-col gap-4">

<div className="bg-lamSkyLight rounded-md p-4 mt-4">
    <div className="flex items-center justify-between">
       <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
       <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
    </div>
           <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero possimus tempore magni</p>
</div>

<div className="bg-lamPurpleLight rounded-md p-4 mt-4">
    <div className="flex items-center justify-between">
       <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
       <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
    </div>
        <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero possimus tempore magni</p>
</div>

<div className="bg-lamYellowLight rounded-md p-4 mt-4">
    <div className="flex items-center justify-between">
       <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur.</h2>
       <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
    </div>
        <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero possimus tempore magni</p>
</div>


        </div>
      
    </div>
  )
}

export default Announcements
