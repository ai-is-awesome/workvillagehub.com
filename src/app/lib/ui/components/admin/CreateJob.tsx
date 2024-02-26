"use client";
const CreateJob = () => {
  return (
    <>
      <div>
        <p>Create Job</p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <label>Enter Job Title</label>
            <input className="px-2 py-1 bg-gray-300 rounded-md" type="text" />
          </div>
          <div className="flex flex-row gap-2">
            <label>Enter the job url</label>
            <input className="px-2 py-1 bg-gray-300 rounded-md" type="text" />
          </div>
          <div className="flex flex-row gap-2">
            <label>Enter the company ID</label>
            <input className="px-2 py-1 bg-gray-300 rounded-md" type="text" />
          </div>
          <div className="flex flex-row gap-2">
            <label>Add technologies ID</label>
            <input className="px-2 py-1 bg-gray-300 rounded-md" type="text" />
          </div>
          <div className="flex flex-row gap-2">
            <label>Add location ID</label>
            <input className="px-2 py-1 bg-gray-300 rounded-md" type="text" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateJob;
